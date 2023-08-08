const express = require('express');
const router = express.Router();

const ServiceForm = require('../model/service_form_model');

router.post ('/', async (req, res) => { 
    try {
        const serviceForm = new ServiceForm(req.body);
        const result = await serviceForm.save();
        res.status(200).json(result);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;