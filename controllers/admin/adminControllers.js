import UserModel from "../../models/UserModel.js";
import bcrypt from "bcryptjs";


export const addDoctor = async (req, res) => {

    try {

        const { name, email, password, age, qualification, dob, isAvailable, specialization, role, schedule } = req.body


        if (!name || !email || !password || !age || !qualification || !dob || !role || !specialization || !schedule) {
            return res.json({
                message: "Required Fields Are Missing!",
                status: false
            })
        }

        const doctor = await UserModel.findOne({ email });

        if (doctor) {
            return res.json({
                message: "Doctor Already Exists!",
                status: false
            })
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const doctorObj = {
            ...req.body,
            password: hashPassword
        }


        await UserModel.create(doctorObj);


        const doctorObjForFrontEnd = {
            name,
            email,
            age,
            qualification,
            dob,
            role,
            specialization,
            schedule
        }

        return res.json({
            message: "Doctor Added Successfully!",
            status: true,
            data: doctorObjForFrontEnd
        })


    } catch (error) {
        res.json({
            message: error.message || "Something Went Wrong!",
            status: false,
        })
    }

}

export const deleteDoctor = async (req, res) => {

    const { doctorID } = req.params
    try {

        const doctor = await UserModel.findById({ _id: doctorID })

        if (!doctor) {
            return res.json({
                message: "Doctor Does Not Exists!",
                status: false
            })
        }

        await UserModel.findByIdAndDelete(doctorID)

        res.json({
            message: "Doctor deleted successfully!",
            status: true,
        });


    } catch (error) {
        res.json({
            message: error.message || "Something Went Wrong!",
            status: false

        })
    }
}