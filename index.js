import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbconnect.js";
import { indexRoutes } from "./routes/indexRoute.js";
dotenv.config();
const app = express();
app.use(express.json());

//routes
app.use(indexRoutes)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    dbConnect();
    console.log(`Server is running on port ${PORT}`);
});