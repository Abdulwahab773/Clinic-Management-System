import express from "express";
import { loginController, signupController } from "../../controllers/patient/authController.js";
import { authMiddleware } from "../../middlewares/authMiddleware.js";

const authRoute = express.Router();


authRoute.post("/signup",  signupController);
authRoute.post("/login", loginController);





export default authRoute;