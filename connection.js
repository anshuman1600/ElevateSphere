const mongoose = require("mongoose");
require('dotenv').config(); // Load environment variables from .env file

const password = encodeURIComponent(process.env.DB_PASSWORD); // Retrieve the database password from environment variables
const dbName = process.env.DB_NAME; // Retrieve the database name from environment variables
const url = `mongodb+srv://moundwebitwebsolution:${password}@cluster0.smgwfyl.mongodb.net/${dbName}`;

const options = {
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options)
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("Error",err);
  });

module.exports = mongoose;
