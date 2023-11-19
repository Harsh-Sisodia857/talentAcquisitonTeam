const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

mongoose.connect('mongodb://0.0.0.0:27017/hiringForm', { useNewUrlParser: true, useUnifiedTopology: true });

// Middleware
app.use(bodyParser.json());

// Define MongoDB Schema
const talentSchema = new mongoose.Schema({
    // Define your schema based on the form fields
    // Example for the Basic Details section
    basicDetails: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        mobileNumber: { type: String },
        dateOfBirth: { type: Date },
    },
    documentCollection: {
        class10Marksheet: { type: String, required: true },
        class12Marksheet: { type: String, required: true },
        graduationMarksheet: { type: String, required: true },
        postGraduationMarksheet: { type: String },
        resumeCV: { type: String, required: true },
        recommendationLetter: { type: String },
        salarySlips: { type: String },
        others: { type: String },
    },
    statementOfPurpose: {
        question1: { type: String, required: true, maxlength: 300 },
        question2: { type: String, required: true, maxlength: 300 },
        question3: { type: String, required: true, maxlength: 300 },
        // Add other questions
    },
    interviewAvailability: {
        email: { type: String, required: true },
        location: { type: String, required: true },
        interviewDate: { type: Date, required: true },
        interviewTime: { type: String, required: true },
        timeZone: { type: String, required: true },
        interviewMedium: { type: String, required: true },
    },
});

const Talent = mongoose.model('Talent', talentSchema);

// API Endpoint to handle form submissions
app.post('/submitForm', async (req, res) => {
    try {
        // Create a new talent instance with the submitted data
        const newTalent = new Talent(req.body);
        // Save the talent instance to the database
        await newTalent.save();
        res.status(201).json({ message: 'Form submitted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
