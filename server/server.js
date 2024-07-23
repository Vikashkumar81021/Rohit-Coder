import express from "express";
import { config } from "dotenv";
import connectDB from "./db/db.js";
config({ path: "./config.env" });

const app = express();

const PORT = process.env.PORT;

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listen at ${PORT}`);
});
