import { pool } from '../db/db';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const getPerson = (personEmail: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: `SELECT * FROM person
        WHERE person.personEmail = $1`,
      values: [personEmail],
    };
    pool.query(query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

export const comparePasswords = async (password: string, hash: string): Promise<boolean> => {
  try {
    const passwordsMatch: boolean = await bcrypt.compare(password, hash);
    return passwordsMatch;
  } catch (err) {
    console.log(err);
    throw new Error('Error comparing passwords');
  }
};

export const generateJwtToken = (user: any): string => {
  const payload = { userId: user.id };
  const secret = process.env.JWT_SECRET || 'default_secret';

  const options: jwt.SignOptions = {
    expiresIn: '1d'
  };

  const token: string = jwt.sign(payload, secret, options);
  return token;
};