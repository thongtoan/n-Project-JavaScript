import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

app.use(cors()); 
app.use(express.static("public"));
app.use(express.json());

app.get("/", async (req, res) => {
    res.render("index.html");
})

app.get("/weather", async (req, res) => {
    try {
        const city = req.query.city;
        const cityName = city.replace(/\s+/g, "");
        if (!cityName) {
            return res.status(400).json({ error: "City name is required" });
        } 
        
        const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
        const response = await axios.get(weatherApiUrl);

        res.json(response.data);
    } catch (err) {
        console.error(err);
        if (err.response) {
            res.status(err.response.status).json({ error: err.response.data.message });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    
})

app.listen(port, () => {
    console.log(`Server is running at: http://localhost:${port}`);
})