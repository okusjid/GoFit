// src/config/environment.js
require('dotenv').config(); // Import environment variables from .env

const requiredEnvVars = ['MONGO_URI', 'JWT_SECRET', 'PORT'];

requiredEnvVars.forEach((envVar) => {
  if (!process.env[envVar]) {
    console.error(`Environment variable ${envVar} is missing!`);
    process.exit(1);
  }
});

module.exports = {
  port: process.env.PORT,
  mongoURI: process.env.MONGO_URI,
  jwtSecret: process.env.JWT_SECRET,
};
