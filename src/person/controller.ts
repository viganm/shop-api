import { Request, Response } from "express";
import { hashPasswordWithBcrypt } from '../utils/encryption';
import * as model from "./model";

export const getPersons = async (req: Request, res: Response) => {
  try {
    const result: any = await model.getPersons();
    if (result.rows) {
      res.status(200).json({ persons: result.rows });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export const addPersons = async (req: Request, res: Response) => {
  let { personEmail, password } = req.body;
  try {
    const hash: string | null = await hashPasswordWithBcrypt(password, 10);
    if (!hash) {
      res.status(400).json({ error: 'Error hashing password.' });
      return;
    }
    const result: any = await model.addPersons(personEmail, hash);
    if (result.rows && result.rows[0]) {
      res.status(201).json({ user: result.rows[0] });
    } else {
      res.status(401).json({ error: 'Error.' });
    }
  } catch (err: any) {
    console.log(err);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

export const updatePerson = async (req: Request, res: Response) => {
  let { personId } = req.params;
  let { personName, personBirthday, personEmail, personPhone } = req.body;
  if (!personId || !personName) {
    res.status(401).send({ error: "Please provide valid request." });
    return;
  }
  try {
    const result: any = await model.updatePerson(personId, personName, personBirthday, personEmail, personPhone);
    if (result.rows && result.rows[0]) {
      res.status(200).json({ person: result.rows[0] });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export const deletePerson = async (req: Request, res: Response) => {
  let { personId } = req.params;
  if (!personId) {
    res.status(401).send({ error: "Please provide a valid request." });
    return;
  }
  try {
    const result: any = await model.deletePerson(personId);
    if (result.rows && result.rows[0]) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
