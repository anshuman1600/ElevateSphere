const express = require('express');
const router = express.Router();

const ContactUsClientModel = require('../model/contact_us_client_model');


router.post('/', async (req, res) => {
    try {
        console.log(req.body); // Log the received request body to check the data being sent
        const contactUsClient = new ContactUsClientModel(req.body);
        await contactUsClient.save();
        res.status(200).json({ message: "Contact Us Client Saved Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Contact Us Client Saved Failed" });
    }
});


module.exports = router;