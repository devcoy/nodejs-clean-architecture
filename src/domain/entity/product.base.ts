/**
 * README
 *
 * interface base de la Entity. Agregar todas las propiedad de la Entity aqui
 *
 */

export interface ProductBase {
  name: string;
  description: string;
  price: number;
  createdAt?: string;
  updatedAt?: string;
  image?: string;
}
