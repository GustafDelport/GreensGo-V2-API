require('dotenv').config()

const express = require('express')
const cors = require('cors');
const app = express()

const corsOptions = {
    origin: process.env.ORIGIN || "http://localhost:5000"
};

app.use(cors(corsOptions));

const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser: true,useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to Database"))

app.use(express.json())

app.get('/', (req, res) => {
    res.send("working")
})

const SensorRouter = require('./routes/dataPoints.js')
app.use('/dataPoints',SensorRouter)

app.listen(3001, () => console.log("The server has started"))
