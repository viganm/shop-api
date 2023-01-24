import { pool } from "../db/db";

export const getPersons = () => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM sp_person_list()";
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

export const addPersons = (personName: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_person_add($1)",
      values: [personName],
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

export const updatePerson = (personName: string, personId: number) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_person_update($1,$2)",
      values: [personName, personId],
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

export const deletePerson = (personId: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_person_delete($1)",
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
