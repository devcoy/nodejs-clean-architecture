/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { logSuccess } from "./common/logger";
import { dbConnection } from "./application/data-access/mongoose/database.config";

dotenv.config();
const ENV = process.env;

/**
 * App Variables
 */

// Comprobamos que carge la variable PORT en process.env. Sino la carga, salimos de la app
if (!process.env.PORT) {
  process.exit(1);
}
// Parseamos su valor como un tipo de número y creamos una instancia de una aplicación Express
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
dbConnection(String(ENV.DB_URL));

/**
 * Server Activation
 */

app.listen(PORT, () => {
  // console.log(`Listening on port ${PORT}`);
  logSuccess(`Listening on port ${PORT}`);
});
