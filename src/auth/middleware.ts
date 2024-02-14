import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { IGetUserAuthInfoRequest } from "../types/custom";
import * as personModel from "../person/model";

export const authorization = (
  req: IGetUserAuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized." });
  }

  const user = parseJwt(token);
  req.user = user;

  jwt.verify(
    token,
    process.env.JWT_SECRET || "default_secret",
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Forbidden." });
      }

      next();
    }
  );
};

export const restrict = (role: string) => {
  return async (
    req: IGetUserAuthInfoRequest,
    res: Response,
    next: NextFunction
  ) => {
    try {
      if (!req.user) {
        const error = "Please login.";
        return res.status(401).json({ error });
      }

      const userRole: any = await personModel.checkIfAdmin(req.user.person_id);
      if (userRole.rows[0].role === role) {
        next();
      } else {
        const error = "Permission denied. You are not an admin.";
        return res.status(403).json({ error });
      }
    } catch (error: any) {
      next(error);
    }
  };
};

export const parseJwt = (token: string) => {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = Buffer.from(base64, "base64").toString("utf-8");

  return JSON.parse(jsonPayload);
};
