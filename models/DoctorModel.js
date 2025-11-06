import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
}, { _id: false }); 


const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  specialization: {
    type: String,
    required: true,
  },
  schedule: {
    type: [scheduleSchema], 
    default: [],
  },
  role: {
    type: String,
    default: "doctor", 
  },
}, { timestamps: true });

const DoctorModel = mongoose.model("doctor", doctorSchema);
export default DoctorModel;
