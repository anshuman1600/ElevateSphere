const express = require('express');
const router = express.Router();

const ClientFormModel = require("../model/Client_form_model");

router.post("/",async(req,res)=>{
    try{
        const trainingForm = await ClientFormModel.create(req.body);
        res.status(201).json({trainingForm});
    }catch(err){
        res.status(500).json({err});
    }
}
)

module.exports = router; 