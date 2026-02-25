const weatherService = require('../services/weather.service');

exports.getWeatherByCoords = async (req, res, next) => {
  try {
    const lat = parseFloat(req.query.lat);
    const lon = parseFloat(req.query.lon);

    if (isNaN(lat) || isNaN(lon)) {
      return res.status(400).json({ error: 'Invalid coordinates' });
    }

    const weather = await weatherService.fetchWeatherByCoords(lat, lon);

    res.status(200).json({
      message: 'Weather data fetched successfully',
      ...weather
    });

  } catch (err) {
    next(err);
  }
};

exports.getWeatherByCity = async (req, res, next) => {
  try {
    const { city } = req.params;

    if (!city) {
      return res.status(400).json({ error: 'City is required' });
    }

    const weather = await weatherService.fetchWeatherByCity(city);

    res.status(200).json({
      message: 'Weather data fetched successfully',
      ...weather
    });

  } catch (err) {
    next(err);
  }
};