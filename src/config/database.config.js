import { config } from "dotenv";
config()

export const databaseConfig = {
    url: process.env.DB_URL + process.env.DB_NAME
}