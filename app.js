async function getWeather() {
    const cityName = document.getElementById('city').value;
    const apiKey = 'YOUR_API_KEY'; // Replace with your OpenWeatherMap API Key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        console.error('Error fetching the weather data: ', error);
        alert('Failed to retrieve the weather data. Please check the city name and try again.');
    }
}

function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
    `;
}
