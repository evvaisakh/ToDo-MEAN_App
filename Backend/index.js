const express = require('express');
const app = new express();
const logger = require('morgan');
const cors = require('cors');
const api = require('./routes/router');
const connectDB = require('./db/db');
require("dotenv").config();

const PORT = process.env.PORT;


app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api',api);


app.listen(PORT, ()=>{
    connectDB();
    console.log(`Server running on port ${PORT}`);
});