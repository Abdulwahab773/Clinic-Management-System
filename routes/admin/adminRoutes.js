import express from "express";
import { addDoctor, deleteDoctor } from "../../controllers/admin/adminControllers.js";

const adminRoutes = express.Router();


adminRoutes.post("/doctor/add", addDoctor);
adminRoutes.delete("/doctor/delete/:doctorID", deleteDoctor);


export default adminRoutes;