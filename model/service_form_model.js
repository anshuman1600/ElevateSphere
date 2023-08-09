const {model , Schema} = require('mongoose');

const serviceFormSchema = new Schema({
    name: String,
    email: String,
    country_code: String,
    phone: String,
    message: String,
    createAt: { type: Date, default: Date.now },
});

module.exports = model('ServiceForm', serviceFormSchema);