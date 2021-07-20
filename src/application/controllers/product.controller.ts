import express from "express";
import productService from "../services/product.service";
import { logInfo } from "../../common/logger";

class ProductController {
  async listProducts(req: express.Request, res: express.Response) {
    const products = await productService.findAll();
    res.status(200).send(products);
  }

  async getProductById(req: express.Request, res: express.Response) {
    logInfo(`find product by id: ${req.params.id}`);
    const product = await productService.findById(req.params.id);
    res.status(200).send(product);
  }

  async createProduct(req: express.Request, res: express.Response) {
    const productId = await productService.create(req.body);
    res.status(201).send({ id: productId });
  }
}

export default new ProductController();
