import { PostEntityDto, PutEntityDto } from "./entity.dto";
/**
 * README
 *
 * Aqui vamos a definir todos los métodos que va a tener la Entity para después implementarlos en el Service de la Entity
 */

export interface EntityUsecase {
  findAll: () => Promise<any>;
  findAllByPagination: (limit: number, page: number) => Promise<any>;
  findById: (id: string) => Promise<any>;
  save: (entity: PostEntityDto) => Promise<any>;
  updateById: (id: string, entity: PutEntityDto) => Promise<string>;
  deleteById: (id: string) => Promise<string>;
}
