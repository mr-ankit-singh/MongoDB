import express from "express";
import connectDB from "./db/connectDB.js";
const app = express();
import {
    deleteDocById,
    deleteOneDoc,
    deleteManyDoc,
} from "./models/studentModel.js";

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);
// Delete Document
deleteDocById("63712706ff2e950cc7e06e5a");
deleteOneDoc("63711b3fc09b0e460c948f72");
deleteManyDoc(22);

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
