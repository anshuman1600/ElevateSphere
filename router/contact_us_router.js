const express = require('express');
const router = express.Router();

const ContactUsModel = require("../model/contact_us_model");

router.post("/", async (req, res) => {
    try {
        // Get the form data from req.body
        const { name, email, phone, message } = req.body;
    
        // Save the form data to the database
        const contactUs = await ContactUsModel.create({
        name,
        email,
        phoneNo: phone,
        message,
        });
    
        res.status(201).json({ contactUs });
    } catch (err) {
        res.status(500).json({ err });
    }
    }
);

module.exports = router;