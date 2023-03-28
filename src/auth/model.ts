import { pool } from '../db/db';

export const getUser = (personEmail: string, password: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: `SELECT * FROM person
        WHERE person.personEmail = $1 AND users.userpassword = $2`,
      values: [personEmail, password],
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

export const getUserWithLocationInfo = (personEmail: string, password: string) => {
  return new Promise((resolve, reject) => {
    const query = {
      text: `SELECT * FROM users
        LEFT JOIN user_role 
        ON users.user_id = user_role.user_id
        LEFT JOIN role
        ON user_role.role_id = role.role_id
        LEFT JOIN person
        ON users.person_id = person.person_id
        LEFT JOIN person_location
        ON person.person_id = person_location.person_id
        LEFT JOIN location
        ON person_location.location_id = location.location_id
        WHERE lower(person.personEmail) = lower($1) AND person.password = $2`,
      values: [personEmail, password],
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
