import productRepo from "../../data-access/mongoose/repo/product.repo";
import {
  PostProductDto,
  PutProductDto,
} from "../../domain/product/product.dto";
import { ProductUsecase } from "../../domain/product/product.usecase";

/**
 * README
 *
 * Implementamos los UseCase de la entidad, para acceder a la data usamos el repo
 */
class ProductService implements ProductUsecase {
  async findAll(): Promise<any> {
    return productRepo.findAll();
  }
  async findById(id: string): Promise<any> {
    return productRepo.findById(id);
  }
  async create(product: PostProductDto): Promise<any> {
    return productRepo.create(product);
  }
}

export default new ProductService();
