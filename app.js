// Define the cities and API key
const cities = ['Çorum', 'Denizli'];
const apiKey = '02be11762ed0b5c74ccb4ef25b847d17'; // Be cautious with exposing API keys

async function getWeather(city) {
    try {
        // Construct the URL
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        // Make the API request
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Unable to fetch weather for ${city}`);
        }

        const data = await response.json();

        // Find the div element for the city
        const cityDiv = document.getElementById(city);

        // Create paragraph elements for weather description and temperature
        const weatherP = document.createElement('p');
        const tempP = document.createElement('p');

        // Set the text content of the paragraph elements
        weatherP.textContent = `Weather: ${data.weather[0].description}`;
        tempP.textContent = `Temperature: ${data.main.temp}°C`;

        // Append the paragraph elements to the city div
        cityDiv.appendChild(weatherP);
        cityDiv.appendChild(tempP);
    } catch (error) {
        console.error('Error:', error);
        // Display a user-friendly error message in the UI
        const cityDiv = document.getElementById(city);
        cityDiv.textContent = `Unable to fetch weather for ${city}`;
    }
}

// Get weather for each city
cities.forEach(city => getWeather(city));
