import express from "express";
import connectDB from "./db/connectDB.js";
const app = express();
import {
    getAllDoc,
    getAllDocSpecificField,
    getSingleDoc,
    getDocByField,
    getDocByFieldSpecificField,
    getLimitDoc,
    getSkipDoc,
    getCount,
    getSortDoc,
} from "./models/studentModel.js";

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

// Database Connection
connectDB(DATABASE_URL);
// Retrive   Document
// getAllDoc()
// getAllDocSpecificField()
// getSingleDoc()
// getDocByField()
// getDocByFieldSpecificField()
// getLimitDoc()
// getSkipDoc()
// getCount()
getSortDoc();

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});
