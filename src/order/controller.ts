import { Request, Response } from "express";
import * as model from "./model";

export const addOrder = async (req: Request, res: Response) => {
  let { personId, address, postalCode, city, country, productIds } = req.body;
  if (!personId) {
    res.status(401).send({ error: "Please Login" });
    return;
  } else if (!productIds) {
    res.status(404).send({ error: "Please add Products to your Cart " });
    return;
  } else if (!postalCode || !city || !country) {
    res.status(404).send({ error: "Please fill all address related fields " });
    return;
  }
  try {
    const result: any = await model.addOrder(
      personId,
      address,
      postalCode,
      city,
      country,
      productIds
    );
    if (result.rows && result.rows[0]) {
      res.status(201).json({ order: result.rows[0] });
    } else {
      res.status(401).json({ error: "Error." });
    }
  } catch (_) {
    res.status(500).json({ error: "Something went wrong. Please try again." });
  }
};
