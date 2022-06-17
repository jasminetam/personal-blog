// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

async function handler(req, res) {
  const { name, email, message } = req.body.data;
  if (req.method === "POST") {
    if (name !== "" && email !== "" && message !== "") {
      const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db();
      const commentCollection = db.collection("comments");
      const result = await commentCollection.insertOne(req.body.data);
      client.close();
      res.json("Succeed");
    } else
      res.status(400).json({ message: "You should fill in all the blanks" });
  }
}

export default handler;
