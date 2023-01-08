const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const { errorHandler, notFound } = require('./middlewares/errorMiddleware');
const authRoute = require('./routes/authRoute');

const port = process.env.PORT || 3000;

// connect to MongoDB
connectDB();

const app = express();

// add functions to read information from body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', authRoute);

app.use(errorHandler);
app.use(notFound);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
