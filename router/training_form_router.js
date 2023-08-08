const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const TrainingFormModel = require("../model/training_form_model");

// Create a Multer storage instance to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './static/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueFilename = Date.now() + '-' + file.originalname;
    cb(null, uniqueFilename);
  }
});

// Define the file filter function
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

// Create a Multer instance with the storage and file filter
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB file size limit
  },
  fileFilter: fileFilter
});

router.post("/", upload.single('cv'), async (req, res) => {
  try {
    // Get the form data from req.body
    const { name, email, phone, qualification, about } = req.body;

    // Get the filename of the uploaded CV (if available)
    const cvFileName = req.file ? req.file.filename : null;

    // Save the form data and the CV filename to the database
    const trainingForm = await TrainingFormModel.create({
      name,
      email,
      phoneNo: phone,
      qualification,
      about,
      file: cvFileName,
    });

    res.status(201).json({ trainingForm });
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;
    