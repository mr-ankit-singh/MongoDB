import express from "express";
const app = express();
import connectDB from "./db/connectDB.js";
import createDoc from "./models/student.js";

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/";

// Connecting DAtabase
connectDB(DATABASE_URL);
// Create and save document
createDoc("Jasmine", 22, "Delhi", ["Singing", "Dancing"]);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
