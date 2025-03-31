async function getWeather() {
    const city = document.getElementById("cityInput").value;
    try {
        const response = await fetch(`http://localhost:3000/weather?city=${city}`) ;
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }

}