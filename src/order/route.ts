import { Router } from "express";
import * as orderController from "./controller";
import { authorization } from "../auth/middleware";

const router = Router();

router.post("/order", authorization, orderController.addOrder);

export default router;
