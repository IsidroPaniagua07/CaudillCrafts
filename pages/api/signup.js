import clientPromise from "../../lib/mongodb";
import User from "../../models/user";
import jwt from "jsonwebtoken";
import { setCookies } from "cookies-next";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("CaudillsCrafts");
  const { name, email, password } = req.body;

  if (req.method == "POST") {
    const userExist = await db.collection("Users").findOne({ email: email });

    if (userExist)
      return res.status(422).json({ message: "Email already in use." });

    const user = await db
    .collection("Users")
    .insertOne({
      name: name,
      email: email,
      password: password,
    });

    const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: "1d",
    });

    setCookies("token", token, {
      req,
      res,
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    });

    res.status(201).json(user);
  } else {
    res.status(424).json({ message: "Invalid method." });
  }
}
