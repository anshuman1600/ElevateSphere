const {model,Schema} = require("../connection");

const trainingFormSchema = new Schema({
    name: String,
    email: String,
    phoneNo: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    address: String,
    message: String,
  });

module.exports = model("trainingForm",trainingFormSchema);