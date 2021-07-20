import mongoose from "mongoose";
import { logError, logInfo } from "../../common/logger";

export const dbConnection = async (url: string) => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    logInfo("DB connection successfully");
  } catch (err: any) {
    logError("DB connection error", err);
  }
};
