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

// Retrive all Document
const getAllDoc = async () => {
    const result = await studentModel.find();
    console.log(result);
    result.forEach((item) => {
        console.log(
            item.name,
            item.age,
            item.address,
            item.hobbies[0],
            item.hobbies[1]
        );
    });
};

// Retrive all Document with specific field
const getAllDocSpecificField = async () => {
    // Include
    const resultmtd1 = await studentModel.find().select("name age");
    const resultmtd2 = await studentModel.find().select(["name", "age"]);
    const resultmtd3 = await studentModel.find().select({ name: 1, age: 1 });
    console.log(resultmtd1, resultmtd2, resultmtd3);
    // Exclude
    const resultmtd4 = await studentModel.find().select("-name -age");
    const resultmtd5 = await studentModel.find().select(["-name", "-age"]);
    const resultmtd6 = await studentModel.find().select({ name: 0, age: 0 });
    console.log(resultmtd4, resultmtd5, resultmtd6);
    // Without using select
    const result = await studentModel.find({}, "name age");
    console.log(result);
};

// Retrive single Document
const getSingleDoc = async () => {
    const result = await studentModel.findById("63711b3fc09b0e460c948f72");
    console.log(result);
    console.log(result._id, result.name, result.age, result.address);
};

// Retrive Document by field
const getDocByField = async () => {
    const result = await studentModel.find({ name: "Sophia" });
    console.log(result);
};

// Retrive Document by field
const getDocByFieldSpecificField = async () => {
    const result = await studentModel
        .find({ name: "Sophia" })
        .select("age address");
    console.log(result);
};

// Retrive limited Document
const getLimitDoc = async () => {
    const result1 = await studentModel.find().limit(2);
    const result2 = await studentModel.find({}, null, { limit: 1 });
    console.log(result1, result2);
};

// Retrive Skip Document
const getSkipDoc = async () => {
    const result1 = await studentModel.find().skip(2);
    const result2 = await studentModel.find({}, null, { skip: 1 });
    console.log(result1, result2);
};

// Count Document
const getCount = async () => {
    const result = await studentModel.find().countDocuments();
    console.log(result);
};

// Sort Document
const getSortDoc = async () => {
    // In ascending order
    const result1 = await studentModel.find().sort({ age: 1 });
    // In descending Order
    const result2 = await studentModel.find().sort({ age: -1 });
    console.log(result1, result2);
};

export {
    getAllDoc,
    getAllDocSpecificField,
    getSingleDoc,
    getDocByField,
    getDocByFieldSpecificField,
    getLimitDoc,
    getSkipDoc,
    getCount,
    getSortDoc,
};
