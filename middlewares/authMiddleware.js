import jwt from "jsonwebtoken";

export const authMiddleware = async(req, res , next) => {
    try {
        const PRIVATE_KEY = process.env.PRIVATE_KEY;
        const token = req.headers?.authorization?.split(" ")[1];

        

        const isVerify = jwt.verify(token, PRIVATE_KEY)


        if (isVerify._id) {
         next();   
        } else {
            res.json({
                message: "un-Auth User",
                status: false
            })
        }


    } catch (error) {
        res.json({
            message: error.message || "something went wrong!",
            status: false
        })
    }
}  