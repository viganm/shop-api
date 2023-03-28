import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
//----------------------------------------------------------------------------------------------------------
//routes of the app (importation of endpoints)
import authRoutes from './auth/route';
import personRoutes from "./person/route";
import productRoutes from "./product/route";
//----------------------------------------------------------------------------------------------------------
//server
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
//----------------------------------------------------------------------------------------------------------
//packages
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
//----------------------------------------------------------------------------------------------------------
//cors (connecting with Front End)
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
//----------------------------------------------------------------------------------------------------------
//routes of the app (endpoints)
app.use('/', authRoutes);
app.use("/", personRoutes);
app.use("/", productRoutes);
//----------------------------------------------------------------------------------------------------------
//server
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "API not found!" });
});

app.listen(port, () => {
  console.log(new Date().toLocaleTimeString());
  console.log(`listening on port http://localhost:${port}`);
});
