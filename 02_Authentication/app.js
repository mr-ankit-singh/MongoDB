import express from "express";
const app = express();
import connectDB from "./db/connectDB.js";

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/Student";

// Connect DAtabase
connectDB(DATABASE_URL);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
