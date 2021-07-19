import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";
import { EntityBase } from "./entity.base";

/**
 * DOCUMENTS
 *
 * Los documentos de Mongoose representan una asignación de uno a uno a los documentos almacenados en MongoDB.
 * Cada documento es una instancia de su modelo.
 */

export interface EntityDocument extends EntityBase, mongoose.Document {
  createdAt: Date;
  // user: UserDocument["_id"];
}

/**
 * SCHEMA
 *
 * Todo en Mongoose comienza con un esquema. Cada esquema se asigna a una colección de MongoDB y
 * define la forma de los documentos dentro de esa colección.
 */

const EntitySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      default: () => uuidv4(),
    },
    // // Relación
    // user: {
    //   type: mongoose.Schema.Types.ObjectId, // Indicamos la relación
    //   ref: "User", // Documento con el que se relaciona
    //   required: true,
    // },
    propertyOne: { type: String, default: true },
    propertyTwo: { type: Number, default: true },
  },
  { timestamps: true }
);

const Entity = mongoose.model<EntityDocument>("Entity", EntitySchema);

export default Entity;
