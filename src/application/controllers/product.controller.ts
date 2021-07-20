import express from "express";
import productService from "../services/product.service";

class ProductController {
  async listProducts(req: express.Request, res: express.Response) {
    const products = await productService.findAll();
    res.status(200).send(products);
  }

  async getProductById(req: express.Request, res: express.Response) {
    const product = await productService.findById(req.body.id);
    res.status(200).send(product);
  }

  async createProduct(req: express.Request, res: express.Response) {
    const productId = await productService.create(req.body);
    res.status(201).send({ id: productId });
  }
}

export default new ProductController();
