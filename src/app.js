const express = require('express');
const weatherRoutes = require('./routes/weather.routes');
const errorMiddleware = require('./middleware/error.middleware');

const app = express();

app.use(express.json());

app.use('/weather', weatherRoutes);

app.use(errorMiddleware);

module.exports = app;