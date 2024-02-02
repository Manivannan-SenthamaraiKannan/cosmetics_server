import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import { MongoClient } from "mongodb";

// config App
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Connection URI
const MONGO_URL = process.env.MONGO_URL; // Assuming MongoDB is running locally on the default port

async function createConnection() {
    const client = new MongoClient(MONGO_URL);
    await client.connect();
    console.log("MongoDb is connected");
    return client;
}

export const client = await createConnection();

app.get("/", (req, res) => {
    res.send("Backend Server is running");
});

// Routes Middlewares


// Serving 
const PORT = process.env.PORT;
app.listen(PORT, () =>
    console.log(`http:\\localhost:${PORT}`)
);