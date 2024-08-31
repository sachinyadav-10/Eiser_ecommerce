const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const productRouter = require('./routes/productrouters');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');

    // Import the model after connection
   
    })
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.use('/products', productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});