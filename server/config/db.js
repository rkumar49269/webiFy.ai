import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("DB connected")
    } catch (error) {
        console.log("DB error", error)
    }
}

export default connectDb