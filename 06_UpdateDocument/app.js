import express from "express";
import connectDB from "./db/connectDB.js";
const app = express();
import {
    updateDocById,
    updateOneDoc,
    updateManyDoc,
} from "./models/studentModel.js";

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);
// Update Document
updateDocById("63712706ff2e950cc7e06e5a");
updateOneDoc("63711b3fc09b0e460c948f72");
updateManyDoc(22);

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
