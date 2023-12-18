import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPTIONS = {
            user: "AnkitSingh",
            pass: "password",
            dbName: "School",
            authSource: "School",
        };
        await mongoose.connect(DATABASE_URL, DB_OPTIONS);
        console.log("DaTaBasE ConnECted..");
    } catch (err) {
        console.log(err);
    }
};

export default connectDB;
