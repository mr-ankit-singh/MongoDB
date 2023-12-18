import mongoose from "mongoose";

// Defining schema
const studentSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 15, max: 30 },
    address: { type: String, required: true },
});

// Defining/Compiling Model
const studentModel = new mongoose.model("StudentDetail", studentSchema);
