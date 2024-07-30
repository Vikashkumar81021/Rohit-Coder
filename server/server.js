import express from "express";
import cors from "cors";
import { config } from "dotenv";
import connectDB from "./db/db.js";
import userRoutes from "./routes/user-routes.js";
import { errorMiddleware } from "./middlewares/error-middleware.js";
const app = express();
config({ path: "./config/config.env" });
const PORT = process.env.PORT;
const corsOptions = {
  origin: "http://localhost:5173", // Your frontend's URL
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/v1", userRoutes);
app.use(errorMiddleware);
connectDB();

app.listen(PORT, () => {
  console.log(`Server is listen at ${PORT}`);
});
