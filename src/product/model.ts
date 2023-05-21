import { pool } from "../db/db";
import fs from "fs";

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM sp_product_list()";
    pool.query(query, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
        console.log(result);
      }
    });
  });
};

export const addProducts = (
  productName: string,
  productPrice: number,
  productCategoryId: number,
  productImage: any
) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_product_add($1, $2, $3, $4)",
      values: [productName, productPrice, productCategoryId, productImage],
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

export const updateProduct = (
  personId: string,
  personName: string,
  personBirthday: Date,
  personEmail: string,
  personPhone: string
) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_product_update($1,$2,$3,$4,$5)",
      values: [personId, personName, personBirthday, personEmail, personPhone],
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

export const deleteProduct = (personId: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_product_delete($1)",
      values: [personId],
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
