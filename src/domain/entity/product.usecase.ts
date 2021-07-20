import { PostProductDto, PutProductDto } from "./product.dto";
/**
 * README
 *
 * Aqui vamos a definir todos los métodos que va a tener la Entity para después implementarlos en el Service de la Entity
 */

export interface EntityUsecase {
  findAll: () => Promise<any>;
  // findAllByPagination: (limit: number, page: number) => Promise<any>;
  findById: (id: string) => Promise<any>;
  create: (product: PostProductDto) => Promise<any>;
  updateById: (id: string, product: PutProductDto) => Promise<string>;
  deleteById: (id: string) => Promise<string>;
}
