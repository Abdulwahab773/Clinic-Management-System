import express from "express";
import { bookAppointment } from "../../controllers/patient/patientControllers.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";


const patientRoutes = express.Router();

patientRoutes.post("/user/appointments/booking", authMiddleware, bookAppointment);

