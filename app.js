import express from "express";
import cors from "cors";
import connectDatabase from "./config/db.js";
import dotenv from "dotenv";
import {v4 as uuid} from "uuid";
import authRoute from "./routes/patient/authRoutes.js";

dotenv.config();

const PORT = 5000 || process.env.PORT;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// db connection
connectDatabase();

app.use("/api", authRoute)






app.listen(PORT, () => console.log(`server running on http://localhost:${PORT}`));