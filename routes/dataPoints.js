const express = require('express')
const SensorData = require('../models/sensor_data')

const router = express.Router()

router.get('/all',async (req,res) => {

    try {
         const Data = await SensorData.find()
         res.json(Data)
    } 
    catch (error) {
         res.status(500).json({ message: error.message})
    }
})

router.post('/point',async (req,res) => {
    console.log(req);
})

module.exports = router