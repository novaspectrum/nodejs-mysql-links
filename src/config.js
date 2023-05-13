import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "mysql.serviciosintegralesonline.com",
  user: process.env.DATABASE_USER || "practica6",
  password: process.env.DATABASE_PASSWORD || "admon1234",
  database: process.env.DATABASE_NAME || "admondb910",
};

export const port = process.env.PORT || 4000;
