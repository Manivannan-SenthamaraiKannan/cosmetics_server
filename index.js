import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

// config App
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGO_URL;

// db
async function connectToDB() {
    const client = new MongoClient(MONGO_URL)
    await client.connect()
    console.log("Connected to MongoDB")
    return client
}

export const client = await connectToDB();

app.get("/", (req, res) => {
    res.send("Backend Server is running");
});

// Routes Middlewares


// Serving 
const PORT = process.env.PORT;
app.listen(PORT, () =>
    console.log(`http:\\localhost:${PORT}`)
);