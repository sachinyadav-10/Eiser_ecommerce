// controllers/contactController.js
const Contact = require('../models/contact');

const createContact = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error(error.message);  // Log the error message to the console
    res.status(500).json({ error: 'Failed to send message' });
  }
};

module.exports = { createContact };
