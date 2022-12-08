const apiKey = '892096b32bf13367e8bb4d2a5b16b4b4';
let city = 'London';

async function getWeatherData() {
  // get city coordinates
  const cityCoordinateResponse = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`
  );
  const cityCoordinates = await cityCoordinateResponse.json();

  // latitute nad longitude
  const cityLat = cityCoordinates[0].lat;
  const cityLon = cityCoordinates[0].lon;

  // get weather condition
  const weatherResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&units=metric&appid=${apiKey}`
  );
  const weatherData = await weatherResponse.json();

  // outputs
  const weatherObject = {
    // city name and country
    cityName: cityCoordinates[0].name,
    country: cityCoordinates[0].country,
    // weather
    temp: weatherData.main.temp,
    humidity: weatherData.main.humidity,
    feelsLike: weatherData.main.feels_like,
    description: weatherData.weather[0].description,
  };

  console.log(weatherObject);
  console.log(weatherData);

  return weatherObject;
}

export { getWeatherData };
