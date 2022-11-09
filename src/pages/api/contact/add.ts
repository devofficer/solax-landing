import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { db } from "firebase/admin";
import { recaptchaPrivKey } from "utils";
const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { contactType, contactInfo } = req.body;

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

  if (req.method === "POST") {
    try {
      fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${recaptchaPrivKey}&response=${req.body.gRecaptchaToken}`,
      })
        .then((reCaptchaRes) => reCaptchaRes.json())
        .then((reCaptchaRes) => {
          console.log(reCaptchaRes, "Response from Google reCaptcha verification API");
          if (reCaptchaRes?.score > 0.5) {
            // Save data to the database from here
            console.log(reCaptchaRes);
            // handleQuery();
          } else {
            res.status(200).json({
              sucess: 0,
            });
          }
        });
    } catch (error) {
      res.status(405).json({
        sucess: 0,
        error: error,
      });
    }
  } else {
    res.status(405);
    res.end();
  }
};

export default handler;
