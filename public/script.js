async function getWeather() {
    const city = document.getElementById("cityInput").value;
    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`) ;
        const data = await response.json();
        console.log(data);
        
        document.querySelector('.city').textContent = data.name;
        document.querySelector('.temp').textContent = `${data.main.temp}°C`;
        document.querySelector('.humidity').textContent = `${data.main.humidity}%`;
        document.querySelector('.wind').textContent = `${data.wind.speed} km/h`;
        switch (data.weather[0].main) {
            case 'Clear':
                document.querySelector('.wheather-icon').src = "images/clear.png";
                break;
            case 'Clouds':
                document.querySelector('.wheather-icon').src = "images/clouds.png";
                break;
            case 'Drizzle':
                document.querySelector('.wheather-icon').src = "images/drizzle.png";
                break;
            case 'Mist':
                document.querySelector('.wheather-icon').src = "images/mist.png";
                break;
            case 'Rain':
                document.querySelector('.wheather-icon').src = "images/rain.png";
                break;
            case 'Snow':
                document.querySelector('.wheather-icon').src = "images/snow.png";
                break;
        }
    } catch (err) {
        console.log(err);
    }

}