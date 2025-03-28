import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
    res.render("index.html");
})

app.get("/weather", async (req, res) => {
    
})

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
})