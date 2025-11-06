import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema({
    day: String,
    startTime: String,
    endTime: String,
}, { _id: false });


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "doctor", "patient"], required: true },


    // patient fields
    age: Number,
    phoneNo: String,
    dob: String,
    cnic: String,


    // doctor fields
    qualification: String,
    specialization: String,
    room: Number,
    isAvailable: { type: Boolean },
    schedule: {
        required: false,
        type: [scheduleSchema]
    },

}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);
export default UserModel;
