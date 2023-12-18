import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTION = {
            dbName: "Student",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTION);
        console.log("DAtaBAse COnnECted...");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
