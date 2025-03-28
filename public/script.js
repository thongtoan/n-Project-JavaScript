import env from 'dotenv';
const apiKey = process.env.API_KEY;
    console.log(apiKey);
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=vietnam&units=metric"
        async function checkWeather() {
            const response = await fetch(apiURL + `&appid=${apiKey}`);
            console.log(response);
            let data = await response.json();
            console.log(data);
        }
checkWeather()