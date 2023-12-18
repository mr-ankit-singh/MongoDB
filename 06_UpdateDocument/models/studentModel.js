import mongoose from "mongoose";

// Create Student Schema
const studentSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true },
    address: { type: String, require: true, trim: true },
    hobbies: { type: Array },
});

// Creating and compiling a StudentModel
const studentModel = new mongoose.model("StudentDetail", studentSchema);

// Update document by Id
const updateDocById = async (id) => {
    try {
        const result = await studentModel.findByIdAndUpdate(id, {
            name: "Sophia Swamy",
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// Update One Document
const updateOneDoc = async (id) => {
    try {
        const result = await studentModel.updateOne(
            { _id: id },
            { name: "Nandini Jain" },
            { returnDocument: "after" } // yeh update hone ke baad result dega
        );
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// Update Many Document
const updateManyDoc = async (age) => {
    try {
        const result = await studentModel.updateMany(
            { age: age },
            { name: "Khushi" }
        );
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

export { updateDocById, updateOneDoc, updateManyDoc };
