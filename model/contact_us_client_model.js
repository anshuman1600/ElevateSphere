const {model, Schema} = require('mongoose');

const contactUsClientSchema = new Schema({
    name: String,
    email: String,
    phoneNo: String,
    createdAt: { type: Date, default: Date.now },
    address: String,
    message: String,    
});

const ContactUsClientModel = model("contactUsClient", contactUsClientSchema);

module.exports = ContactUsClientModel;