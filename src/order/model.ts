import { pool } from "../db/db";
import fs from "fs";

export const addOrder = (
  personId: number,
  address: string,
  postalCode: string,
  city: string,
  country: string,
  productIds: number[]
) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_order_add($1, $2, $3, $4, $5, $6)",
      values: [personId, address, postalCode, city, country, productIds],
    };

    pool.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
