import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
// @ts-ignore
import validateRecaptcha from "recaptcha-validator";
import requestIp from "request-ip";
import { db } from "firebase/admin";
import getConfig from "next/config";

const { serverRuntimeConfig } = getConfig();
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { contactType, contactInfo, gRecaptchaToken } = req.body;
  const clientIp = requestIp.getClientIp(req);

  const recaptchaPrivKey = serverRuntimeConfig.recaptchaPrivKey || "6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe";
  const handleQuery = async () => {
    try {
      const snapshot = await db.collection(contactType).where("contactInfo", "==", contactInfo).get();

      if (snapshot.empty) {
        await db.collection(contactType).add({ contactInfo: contactInfo });
        res.status(200).json({ success: 1 });
      } else {
        res.status(403).json({ success: 2 });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ success: 0, error: error });
    }
  };
  validateRecaptcha(recaptchaPrivKey, gRecaptchaToken, clientIp)
    .then(function (reply: any) {
      const { success } = reply;
      if (success) {
        handleQuery();
      } else {
        res.status(403).json({ success: 3, error: "Invalid Captcha. Try again." });
      }
    })
    .catch(function (err: any) {
      if (typeof err === "string") {
        const errorMsg = "Got recaptcha error: " + err + " please go back and try again";
        res.status(403).json({ success: 3, error: errorMsg });
      } else {
        console.error("[INTERNAL_ERROR] Recaptcha failure: ", err);
        const errorMsg = "[INTERNAL_ERROR] Recaptcha failure: ";
        res.status(403).json({ success: 0, error: errorMsg });
      }
    });
};

export default handler;
