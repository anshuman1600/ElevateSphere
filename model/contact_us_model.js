const { Schema, model } = require('mongoose');

const contactUsSchema = new Schema({
    name: String,
    email: String,
    phoneNo: String,
    createdAt: { type: Date, default: Date.now },
    message: String,
});

const ContactUsModel = model("contactUs", contactUsSchema);

module.exports = ContactUsModel;