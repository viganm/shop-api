import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { IGetUserAuthInfoRequest } from "../types/custom";

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

  jwt.verify(
    token,
    process.env.JWT_SECRET || "default_secret",
    (err, decoded) => {
      if (err) {
        return res.status(403).json({ error: "Forbidden." });
      }
      const user = parseJwt(token);
      if (req.user) {
        req.user = user;
      }

      next();
    }
  );
};

export const restrict = (role: any) => {
  return (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    if (req.user) {
      if (req.user.role !== role) {
        const error = "error";
        next(error);
      }
    }
    next();
  };
};

function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
