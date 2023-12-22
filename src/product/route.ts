import { Router } from "express";
import * as productController from "./controller";
import { authorization, restrict } from "../auth/middleware";

const router = Router();

router.get("/products", productController.getProducts);
router.get("/products-by-id/:productId", productController.getProductsByIds);
router.post(
  "/product",
  authorization,
  restrict("admin"),
  productController.addProducts
);
router.put(
  "/product/:productId",
  authorization,
  restrict("admin"),
  productController.updateProduct
);
router.delete(
  "/product/:productId",
  authorization,
  restrict("admin"),
  productController.deleteProduct
);

export default router;
