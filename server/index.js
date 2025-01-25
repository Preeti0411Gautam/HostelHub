import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


connectDB();
app.use('/', (req, res) => {
    res.status(200).json({
        message: "Hello there"
    });
});

const port =process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
})