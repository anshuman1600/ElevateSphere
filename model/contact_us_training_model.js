const { Schema, model } = require('mongoose');

const contactUsSchema = new Schema({
    name: String,
    email: String,
    phoneNo: String,
    createdAt: { type: Date, default: Date.now },
    qualification: String,
    address: String,
    message: String,
});

const ContactUsModel = model("contactUsTraining", contactUsSchema);

module.exports = ContactUsModel;