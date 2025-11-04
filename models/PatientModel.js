import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    cnic: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: "patient"
    }
}, { timestamps: true })

const PatientModel = mongoose.model("patient", patientSchema)
export default PatientModel;