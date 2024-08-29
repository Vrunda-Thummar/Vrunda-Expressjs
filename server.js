require("dotenv").config();
const express = require('express');
const server = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path'); 
const port = process.env.PORT;
const ejs = require("ejs");
const userRoutes = require('./routes/user.routes');

// Set up EJS as the templating engine
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(morgan('dev'));

// Database connection
mongoose
    .connect("mongodb://localhost:27017/todoProject")
    .then(() => console.log('Database connection established successfully...'))
    .catch((err) => console.log(err));

server.get("/", (req, res) => {
    res.send("welcome to todoProject");
});

server.use("/user", userRoutes);

// Start server
server.listen(2309, () => {
    console.log(`Server is running at http://localhost:2309`);
});