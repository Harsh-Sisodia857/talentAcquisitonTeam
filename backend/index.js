const express = require('express');
const mongoose = require('mongoose');
const multer = require("multer");
const cors = require('cors');
const PORT = 4000;
const app = express();
const path = require('path');
const fs = require('fs');


mongoose.connect('mongodb://0.0.0.0:27017/hiringForm', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(express.json());
app.use(cors());


// Define MongoDB Schema
const talentSchema = new mongoose.Schema({
    // Define your schema based on the form fields
    // Example for the Basic Details section
    Name: { type: String },
    Email: { type: String },
    Mobile: { type: String },
    dateOfBirth: { type: Date },
    documents: {
        class10Marksheet: { type: String },
        class12Marksheet: { type: String },
        graduationMarksheet: { type: String },
        postGraduationMarksheet: { type: String },
        resumeCV: { type: String },
        recommendationLetter: { type: String },
        salarySlips: { type: String },
        others: { type: String }
    },
    questionA: { type: String, maxlength: 300 },
    questionB: { type: String, maxlength: 300 },
    questionC: { type: String, maxlength: 300 },
        // Add other questions
    location: { type: String },
    interviewDate: { type: Date },
    interviewTime: { type: String },
    timeZone: { type: String },
    interviewMedium: { type: String },
});

const Talent = mongoose.model('Talent', talentSchema);
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), (req, res) => {
    // Handle the uploaded file here
    const uploadedFile = req.file;

    // Check if the file exists
    if (!uploadedFile) {
        return res.status(400).json({ message: 'No file uploaded' });
    }

    // Set the file location
    const fileLocation = path.join(__dirname, 'uploads', uploadedFile.filename);

    // Move the file to the desired location
    fs.rename(uploadedFile.path, fileLocation, (err) => {
        if (err) {
            console.error('Error moving file:', err);
            return res.status(500).json({ message: 'Internal Server Error' });
        }

        console.log('File moved successfully to:', fileLocation);
        res.json({ message: 'File uploaded successfully', fileLocation });
    });
});

// API Endpoint to handle form submissions
app.post('/submitForm', async (req, res) => {
    try {
        console.log("SUBMITTING FORM >>>>>>>")
        // Create a new talent instance with the submitted data
        console.log(req.body);
        const newTalent = new Talent(req.body);
        // Save the talent instance to the database
        await newTalent.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
