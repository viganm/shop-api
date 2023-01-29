import { Request, Response } from "express";
import * as model from "./model";

export const getProducts = async (req: Request, res: Response) => {
  try {
    const result: any = await model.getProducts();
    if (result.rows) {
      res.status(200).json({ persons: result.rows });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export const addProducts = async (req: Request, res: Response) => {
  let { personName, personBirthday, personEmail, personPhone } = req.body;
  if (!personName) {
    res.status(401).send({ error: "Please provide a person" });
    return;
  }
  try {
    const result: any = await model.addProducts(
      personName,
      personBirthday,
      personEmail,
      personPhone
    );
    if (result.rows && result.rows[0]) {
      res.status(201).json({ person: result.rows[0] });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  let { personId } = req.params;
  let { personName, personBirthday, personEmail, personPhone } = req.body;
  if (!personId || !personName) {
    res.status(401).send({ error: "Please provide valid request." });
    return;
  }
  try {
    const result: any = await model.updateProduct(personId, personName, personBirthday, personEmail, personPhone);
    if (result.rows && result.rows[0]) {
      res.status(200).json({ person: result.rows[0] });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  let { personId } = req.params;
  if (!personId) {
    res.status(401).send({ error: "Please provide a valid request." });
    return;
  }
  try {
    const result: any = await model.deleteProduct(personId);
    if (result.rows && result.rows[0]) {
      res.status(200).json({ success: true });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
