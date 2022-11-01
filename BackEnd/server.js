
const express = require('express')
const Mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const app = express()

app.use(express.json())




app.listen(3000, () => {
    console.log("server created successfully");
})
