import mongoose from "mongoose";

// Creating Schema
const studentSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, trim: true },
    address: { type: String, required: true },
    hobbies: { type: Array, required: true },
});

// Compiling Schema / Creating Model
const studentModel = new mongoose.model("StudentDetail", studentSchema);

const createDoc = async (name, age, address, hobbies) => {
    try {
        // Create Insert document in collection
        const studentDoc = new studentModel({
            name: name,
            age: age,
            address: address,
            hobbies: hobbies,
        });
        //Saving the Document
        await studentDoc.save();
        console.log("Data InSerTed SucceSSFullY..");
    } catch (error) {
        console.log(error);
    }
};

export default createDoc;


// Note : For inserting many document
//  Insteed of this => await studentDoc.save()
//  We can do  this => await studentModel.insertMany([doc1,doc2,...])

/*
// This is a not a reusable function so,we follow the above code
const createDoc = async () => {
    try{
        // Create Insert document in collection
        const studentDoc = new studentModel({
            name : "Ankit Singh",
            age : 22,
            address : "Meerut UP",
            hobbies : ["Coding","Cricket","Football"]
        })

        //Saving the Document
        await studentDoc.save()
        console.log("Data InSerTed SucceSSFullY..")
    }
    catch(error){
        console.log(error)
    }
}
*/

// We can also do in this fashion but this is not a good way
/* Create StudentDoc or Insert document in collection
const studentDoc = new studentModel({
    name : "Ankit Singh",
    age : 22,
    address : "Meerut UP",
    hobbies : ["Coding","Cricket","Football"]
})
//Saving the Document
await studentDoc.save()
console.log("Data InSerTed SucceSSFullY..")
*/
