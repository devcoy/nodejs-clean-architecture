import express, { Request, Response } from "express";
import productController from "../../application/controllers/product.controller";
/**
 * Required External Modules and Interfaces
 */

/**
 * Router Definition
 */

export const productRouter = express.Router();

/**
 * Controller Definitions
 */

productRouter.get("/", [], productController.listProducts);
productRouter.get("/:id", [], productController.getProductById);
productRouter.post("/", [], productController.createProduct);
