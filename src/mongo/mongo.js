import { mongoose } from "mongoose";
import { databaseConfig } from "../config/database.config.js";

export async function database() {
    await mongoose.connect(databaseConfig.url);
}