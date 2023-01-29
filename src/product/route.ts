import { Router } from "express";
import * as productController from "./controller";

const router = Router();

router.get("/products", productController.getProducts);
router.post("/product", productController.addProducts);
router.put("/product/:productId", productController.updateProduct);
router.delete("/product/:productId", productController.deleteProduct);

export default router;
