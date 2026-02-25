const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast';

async function fetchWeatherByCoords(latitude, longitude) {
  const url = `${WEATHER_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Weather API request failed');
  }

  const data = await response.json();

  return {
    latitude: data.latitude,
    longitude: data.longitude,
    temperature: data.current_weather.temperature,
    windSpeed: data.current_weather.windspeed
  };
}

async function fetchWeatherByCity(city) {
  const geoResponse = await fetch(`${GEO_URL}?name=${city}&count=1`);

  if (!geoResponse.ok) {
    throw new Error('Geocoding API request failed');
  }

  const geoData = await geoResponse.json();

  if (!geoData.results || geoData.results.length === 0) {
    throw new Error('City not found');
  }

  const { latitude, longitude } = geoData.results[0];

  return await fetchWeatherByCoords(latitude, longitude);
}

module.exports = {
  fetchWeatherByCoords,
  fetchWeatherByCity
};