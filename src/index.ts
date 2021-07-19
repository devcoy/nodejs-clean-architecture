/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

import { logSuccess } from "./common/logger";

dotenv.config();

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

/**
 * Server Activation
 */

app.listen(PORT, () => {
  // console.log(`Listening on port ${PORT}`);
  logSuccess(`Listening on port ${PORT}`);
});
