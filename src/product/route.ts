import { Router } from "express";
import * as productController from "./controller";
import { authorization } from "../auth/middleware";

const router = Router();

router.get("/products", productController.getProducts);
router.post("/product", productController.addProducts);
router.put(
  "/product/:productId",
  authorization,
  productController.updateProduct
);
router.delete(
  "/product/:productId",
  authorization,
  productController.deleteProduct
);

export default router;
