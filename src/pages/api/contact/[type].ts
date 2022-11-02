import type { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

import { db } from "firebase/admin";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { type } = req.query;

  const temp: any = [];

  if (type === "email" || type === "telegram" || type === "discord") {
    const snapshot = await db.collection(type as string).get();

    snapshot.forEach((doc) => {
      temp.push(doc.data());
    });

    res.status(200).json(temp);
  } else {
    throw new Error(`${type} doesn't support!`);
  }
};

export default handler;
