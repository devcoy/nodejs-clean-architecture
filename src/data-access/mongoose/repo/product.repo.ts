import { DocumentDefinition } from "mongoose";
import { logInfo } from "../../../common/logger";
import Product, {
  ProductDocument,
} from "../../../domain/product/product.model";

/**
 * README
 *
 * El repo es propio de cada ORM que utilicemos, aquí se hace la lógica necesaria que implique cada ORM
 * para persistir la info en DB.
 */

class ProductRepo {
  constructor() {
    logInfo("Created new instance of ProductRepo");
  }

  async findAll() {
    /**
     * populate() => Verifica si un campo está poblado, si está poblado devuelve true.
     * De igual forma podemos indicar que campos deseasmos devolver del Schema.
     * Podemos implementar todos los populate() necesarios
     */
    return await Product.find({});
  }
  async findById(id: string) {
    return await Product.findById(id);
  }

  async create(product: DocumentDefinition<ProductDocument>) {
    try {
      return await Product.create(product);
    } catch (err: unknown) {
      throw new Error(err);
    }
  }
}

export default new ProductRepo();
