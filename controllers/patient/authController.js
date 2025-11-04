import bcrypt from "bcryptjs";
import PatientModel from "../../models/PatientModel.js";
import jwt from "jsonwebtoken";

export const signupController = async (req, res) => {
    try {
        const { name, email, password, age, phoneNumber, cnic, role } = req.body

        if (!name || !email || !password || !age || !phoneNumber || !cnic || !role) {
            return res.json({
                message: "Required Fields Are Missing!",
                status: false
            })
        }

        const patient = await PatientModel.findOne({ email });

        if (patient) {
            return res.json({
                message: "Email address already exists!",
                status: false
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const patientObj = {
            ...req.body,
            password: hashPassword
        }

        await PatientModel.create(patientObj);

        return res.json({
            message: "Patient Signup Successfully!",
            status: true,
        })


    } catch (error) {
        console.log("error", error.message);
        res.json({
            message: error.message || "Something Went Wrong!",
            status: false
        })
    }
}

export const loginController = async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.json({
                message: "required fields are missing!",
                status: false
            })
        }

        const patient = await PatientModel.findOne({ email });

        if (!patient) {
            return res.json({
                message: "Invalid Email Or Password!",
                status: false
            })
        }

        const comparePassword = await bcrypt.compare(password, patient.password);
        if (!comparePassword) {
            return res.json({
                message: "Invalid email or password!",
                status: false,
            });
        }

        const PRIVATE_KEY = process.env.PRIVATE_KEY

        const token = jwt.sign({ _id: patient._id }, PRIVATE_KEY, {
            expiresIn: "24h"
        });

        
        const patientObj = {
            name: patient.name,
            email: patient.email,
            phoneNumber: patient.phoneNumber,
            cnic: patient.cnic,
            role: patient.role
        }

        res.json({
            message: "Login successfully!",
            status: true,
            data: patientObj,
            token
        })

    } catch (error) {
        res.json({
            message: error.message || "something went wrong!",
            status: false,
            data: null,
        })
    }
}
