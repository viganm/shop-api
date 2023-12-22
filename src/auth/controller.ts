import { Request, Response } from "express";
import { hashPasswordWithBcrypt } from "../utils/encryption";
import * as model from "./model";
import * as jwt from "jsonwebtoken";
import axios from "axios";

export const login = async (req: Request, res: Response) => {
  let { personEmail, password } = req.body;
  try {
    const result: any = await model.getPerson(personEmail);
    if (result.rows && result.rows[0]) {
      const hash: string = result.rows[0].password;
      const passwordsMatch: boolean = await model.comparePasswords(
        password,
        hash
      );
      if (passwordsMatch) {
        const token: string = model.generateJwtToken(result.rows[0]);
        res.status(200).json({ token });
      } else {
        res.status(401).json({ error: "Incorrect password." });
      }
    } else {
      res.status(401).json({ error: "No user found." });
    }
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export const logout = async (req: Request, res: Response) => {
  res.cookie("token", "", {
    //expires after 1 second
    expires: new Date(new Date().getTime() + 1000),
    httpOnly: true,
  });
  res.status(200).json({ success: true });
};

export const validateJwtToken = (token: string): any => {
  try {
    const secret = process.env.JWT_SECRET || "default_secret";

    const decodedToken: any = jwt.verify(token, secret);
    return decodedToken;
  } catch (err) {
    console.log(err);
    throw new Error("Invalid token");
  }
};
