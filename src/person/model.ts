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

export const addPersons = (
  personName: string,
  personBirthday: Date,
  personEmail: string,
  personPhone: string
) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_person_add($1,$2,$3,$4)",
      values: [personName, personBirthday, personEmail, personPhone],
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

export const updatePerson = (
  personId: string,
  personName: string,
  personBirthday: Date,
  personEmail: string,
  personPhone: string
) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: "SELECT * FROM sp_person_update($1,$2,$3,$4,$5)",
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
