// Define the cities and API key
const cities = ['Çorum', 'Denizli'];
const apiKey = '02be11762ed0b5c74ccb4ef25b847d17
'; // Replace with your actual API key

// Function to get weather for a city
function getWeather(city) {
    // Construct the URL
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Make the API request
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Unable to fetch weather for ${city}`);
            }
            return response.json();
        })
        .then(data => {
            // Log the weather information to the console
            console.log(`Weather in ${city}: ${data.weather[0].description}, Temperature: ${data.main.temp}°C`);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Get weather for each city
cities.forEach(city => getWeather(city));
