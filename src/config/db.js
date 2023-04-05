import { connect } from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

(async () => {
  try {
    const db = await connect(
      `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}?directConnection=true&serverSelectionTimeoutMS=2000&authSource=admin&appName=mongosh+1.8.0`
    );
    console.log(`Connected to DB`);
  } catch (error) {
    console.log(error);
  }
})();
