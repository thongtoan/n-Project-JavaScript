async function getWeather() {
    const cityInput = document.getElementById("cityInput");
    const errorMessage = document.getElementById("errorMessage");
    const loading = document.getElementById("loading");
    const weatherShow = document.querySelector(".weather");
    const city = cityInput.value
    console.log("city:", city) 

    cityInput.classList.add("input-error");
        errorMessage.style.display = "none";
        errorMessage.textContent = "";

    if (!city) {
        // Cho khung thông báo thay vì alert
        cityInput.classList.add("input-error");
        errorMessage.style.display = "block";
        errorMessage.textContent = "City name is required!";
    }

    loading.style.display = "block";

    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`) ;
        const data = await response.json();
        
        if (data.cod !== 200) {
            cityInput.classList.add("input-error");
            errorMessage.style.display = "block";
            errorMessage.textContent = "Not found a city name";
        }

        cityInput.value = "";
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = `${data.main.temp}°C`;
        document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
        document.querySelector('.wind').textContent = `${data.wind.speed} km/h`;
    
        weatherShow.style.display = "block";
        
        const weatherIcon = document.querySelector(".weather-icon");
        const weatherType = data.weather[0].main.toLowerCase();

        const weatherIcons = {
            clear: "images/clear.png",
            clouds: "images/clouds.png",
            drizzle: "images/drizzle.png",
            mist: "images/mist.png",
            rain: "images/rain.png",
            snow: "images/snow.png",
        };

        weatherIcon.src = weatherIcons[weatherType] || "images/clear.png";

    } catch (err) {
        console.log(err);
    }

    loading.style.display = "none";
}

document.getElementById("cityInput").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        getWeather();
    }
});