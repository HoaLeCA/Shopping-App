const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const authRoute = require('./routes/authRoute');
const productRoute = require('./routes/productRoute');
const cookieParser = require('cookie-parser'); // for refresh token
const morgan = require('morgan');

const port = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

const app = express();

// add functions to read information from body
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', authRoute);
app.use('/api/products', productRoute);

app.use(errorHandler);
app.use(notFound);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
