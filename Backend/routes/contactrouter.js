// routes/contactRoutes.js
const express = require('express');
const { createContact } = require('../controllers/contactcontroller');

const router = express.Router();

router.post('/contact', createContact);

module.exports = router;
