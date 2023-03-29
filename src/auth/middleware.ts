import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
// import basicAuth from 'basic-auth';

export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = <string>req.cookies ? req.cookies.token : null;
  if (!token) {
    res.status(403).json({ error: 'Unauthorized.' });
    return;
  }
  try {
    const data = <any>jwt.verify(token, process.env.JWT_KEY || '');
    next();
  } catch (_) {
    res.status(403).json({ error: 'Unauthorized.' });
    return;
  }
};