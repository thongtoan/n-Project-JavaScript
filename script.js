const apiKey = "efd9b540e3562c5f2d778fdc2660fa1b";
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=vietnam&units=metric"
        async function checkWeather() {
            const response = await fetch(apiURL + `&appid=${apiKey}`);
            console.log(response);
            let data = await response.json();
            console.log(data);
        }
        checkWeather()