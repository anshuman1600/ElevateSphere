const {model,Schema} = require("../connection");

const trainingFormSchema = new Schema({
    name: String,
    email: String,
    phoneNo: String,
    qualification: String,
    createdAt: { type: Date, default: Date.now },
    address: String,
    about: String,
    file: String,
  });

module.exports = model("trainingForm",trainingFormSchema);