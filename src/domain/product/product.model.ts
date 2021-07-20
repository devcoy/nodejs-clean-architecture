import mongoose from "mongoose";

import { ProductBase } from "./product.base";

/**
 * DOCUMENTS
 *
 * Los documentos de Mongoose representan una asignación de uno a uno a los documentos almacenados en MongoDB.
 * Cada documento es una instancia de su modelo.
 */

export interface ProductDocument extends ProductBase, mongoose.Document {
  // user: UserDocument["_id"]; // Documento con el que se relaciona
  // ... others properties
}

/**
 * SCHEMA
 *
 * Todo en Mongoose comienza con un esquema. Cada esquema se asigna a una colección de MongoDB y
 * define la forma de los documentos dentro de esa colección.
 */

const ProductSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      default: "Sin nombre",
    },
    description: {
      type: String,
      required: true,
      default: "Sin descripción",
    },
    price: {
      type: Number,
      required: true,
      default: 0.0,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
    image: {
      type: String,
    },
    // // Relación
    // user: {
    //   type: mongoose.Schema.Types.ObjectId, // Indicamos la relación
    //   ref: "User", // Documento con el que se relaciona
    //   required: true,
    // },
  },
  { timestamps: true }
);

/**
 * Permite parsear que info vamos a retornar del objeto
 */
ProductSchema.method("toJSON", function () {
  const { id, ...object } = this.toObject();
  return object;
});

const Product = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Product;
