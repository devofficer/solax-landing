import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { db } from "firebase/admin";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { contactType, contactInfo } = req.body;

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

export default handler;
