import { ProductBase } from "./product.base";

/**
 * README
 *
 * Data Transfer Objects (DTOs). Permite mapear el contenido de la request, es decir, podemos comprobar que venga todos los datos necesarios
 *
 */

export interface PostProductDto extends ProductBase {
  // ... others properties
}

export interface PutProductDto extends ProductBase {
  id: string;
  // ... others properties
}
