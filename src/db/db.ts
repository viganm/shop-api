import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: 5432,
});

// export const pool = new Pool({
//   host: "localhost",
//   port: 5432,
//   user: "postgres",
//   password: "Santanotreal2018",
//   database: "shop-db",
// });

// pool.connect((err) => {
//   if (err) {
//     console.error("Error connecting to the database: ", err.stack);
//   } else {
//     console.log("Connected to the database.");
//   }
// });

// module.exports = pool;

// user: "postgres",
// host: "localhost",
// database: "shop-db",
// password: "Santanotreal2018",
// port: 5432,
