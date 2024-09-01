const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const Contact = require('./models/contact');
const productRouter = require('./routes/productrouters');
const contactrouter = require('./routes/contactrouter');
const orderrouter = require('./routes/orderrouter');



app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend's origin
    methods: 'GET,POST', // Allowed methods
    allowedHeaders: 'Content-Type', // Allowed headers
  }));
  app.use(bodyParser.json());

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
app.use('/contactform', contactrouter);
app.use('/orderdetails', orderrouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});