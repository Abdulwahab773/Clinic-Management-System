import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
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
        required: true
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, { timestamps: true })

const AppointmentModel = mongoose.model("appointment" , appointmentSchema )
export default AppointmentModel;