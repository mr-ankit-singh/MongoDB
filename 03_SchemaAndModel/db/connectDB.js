import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            dbName: "School",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("DaTaBasE ConnECted..");
    } catch (err) {
        console.log(err);
    }
};

export default connectDB;
