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

// Delete document by Id
const deleteDocById = async (id) => {
    try {
        const result = await studentModel.findByIdAndDelete(id);
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// Delete One Document
const deleteOneDoc = async (id) => {
    try {
        const result = await studentModel.deleteOne({ _id: id });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

// Delete Many Document
const deleteManyDoc = async (age) => {
    try {
        const result = await studentModel.deleteMany({ age: age });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

export { deleteDocById, deleteOneDoc, deleteManyDoc };
