import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/products.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT || 3000}`);
});