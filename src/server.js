require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// user authentication and authorization
// database connection and models
// API routes and controllers
// error handling middleware
// logging and monitoring
// security best practices (e.g., input validation, rate limiting)
// deployment configuration (e.g., Dockerfile, cloud provider setup)