import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { pool } from "./db/db";
import bodyParser from "body-parser";

import personRoutes from "./person/route";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

app.use("/", personRoutes);

app.use(cors);
app.use(helmet());
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "API not found!" });
});

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
