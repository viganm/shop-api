import { Request, Response } from 'express';
import { hashPasswordWithBcrypt } from '../utils/encryption';
import * as model from './model';
import * as jwt from 'jsonwebtoken';
import axios from 'axios';

export const login = async (req: Request, res: Response) => {
  let { userEmail, password } = req.body;
  if (!userEmail || !password) {
    res.status(401).send({ error: 'Please provide a email and password' });
    return;
  }
  try {
    const hash: string | null = await hashPasswordWithBcrypt(password, 10);
    if (!hash) {
      res.status(400).json({ error: 'Error hashing password.' });
      return;
    }
    const result: any = await model.getUser(userEmail, hash);
    if (result.rows && result.rows[0]) {
      const user = result.rows[0];
      const token = jwt.sign(
        {
          userId: user.user_id,
          userEmail: user.userEmail,
        },
        process.env.JWT_KEY || '',
        { expiresIn: 60 * 60 * 24 }
      );
      res.cookie('token', token, {
        expires: new Date(new Date().getTime() + 60 * 60 * 24 * 1000),
        httpOnly: true,
      });
      res.status(200).json({ accessToken: token });
    } else {
      res.status(401).json({ error: 'Invalid username or password.' });
    }
  } catch (_) {
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

export const validateToken = async (req: Request, res: Response) => {
    const token = <string>req.cookies ? req.cookies.token : null;
    if (!token) {
      res.status(403).json({ error: 'Unauthorized.' });
      return;
    }
    try {
      const data = <any>jwt.verify(token, process.env.JWT_KEY || '');
      res.status(200).json({ user: data.user });
    } catch (_) {
      res.status(403).json({ error: 'Unauthorized.' });
      return;
    }
  };

  export const logout = async (req: Request, res: Response) => {
    res.cookie('token', '', {
      //expires after 1 second
      expires: new Date(new Date().getTime() + 1000),
      httpOnly: true,
    });
    res.status(200).json({ success: true });
  };