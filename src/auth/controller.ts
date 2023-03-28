import { Request, Response } from 'express';
import * as model from './model';
import * as jwt from 'jsonwebtoken';
import axios from 'axios';

export const login = async (req: Request, res: Response) => {
  let { username, password } = req.body;
  if (!username || !password) {
    res.status(401).send({ error: 'Please provide a username and password' });
    return;
  }
  try {
    const result: any = await model.getUser(username, password);
    if (result.rows && result.rows[0]) {
      const user = result.rows[0];
      const token = jwt.sign(
        {
          userId: user.user_id,
          username: user.username,
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