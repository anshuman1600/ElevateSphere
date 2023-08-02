const {model,Schema} = require("../connection");

const ClientFormSchema = new Schema({
    name: String,
    email: String,
    phoneNo: String,
    description: String,
    createdAt: { type: Date, default: Date.now },
    address: String,
    message: String,
  });

module.exports = model("Clientform",ClientFormSchema);