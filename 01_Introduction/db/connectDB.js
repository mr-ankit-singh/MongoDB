import mongoose from "mongoose";

/* Method 1 => Using Promise 
const connectDB = (DATABASE_URL) => {
    return mongoose.connect(DATABASE_URL)
    .then( () => { console.log( "DataBase Connected..")})
    .catch( (err) => { console.log(err)})
}
*/

// Method 2 => Using Async Await
const connectDB = async (DATABASE_URL) => {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log("DaTaBasE ConnEctED...");
    } catch (error) {
        console.log(error);
    }
};

export default connectDB;
