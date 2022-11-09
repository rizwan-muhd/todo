
const express = require('express')
const cors = require('cors')

const mongoose = require('mongoose')
const routesUrls = require('./routes/route')
const app = express()


mongoose.connect('mongodb://localhost:27017/myDB', { useNewUrlParser: true })

app.use(express.json())
app.use(cors())

app.use('/app', routesUrls)



app.listen(3008, () => {
    console.log("server created successfully");
})




