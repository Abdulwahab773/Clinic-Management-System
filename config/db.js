import mongoose from "mongoose";


const connectDatabase = () => {
    mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected Successfully!"))
    .catch((err) => console.log("MongoDB Error", err.message))

}


export default connectDatabase;