import { Router } from "express";
import * as authController from "./controller";
import { authorization } from "./middleware";

const router = Router();

router.post("/login", authController.login);
router.get("/validate-token", authController.validateJwtToken);
router.get("/logout", authController.logout);

export default router;
