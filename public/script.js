async function getWeather() {
    const city = document.getElementById("cityInput").value;
    try {
        const responce = await fetch(`http://localhost:3000/weather?city=${city}`) ;
        const data = await responce.json();
    } catch (err) {
        console.log(err);
    }

}