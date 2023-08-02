const mongoose = require("mongoose");

const password = encodeURIComponent("moundweb@123");
const dbName = "User_Update_Form";
const url = `mongodb+srv://moundwebitwebsolution:${password}@cluster0.smgwfyl.mongodb.net/${dbName}`;

mongoose.connect(url)
  .then((result) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;

