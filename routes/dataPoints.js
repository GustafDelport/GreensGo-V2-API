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

//No use yet
router.post('/send',async (req,res) => {
     
    const Data = new SensorData({
         Time: req.body.Time,
         Temperature: req.body.Temperature, 
         HumidityPercentage: req.body.HumidityPercentage, 
         MoisturePercentage: req.body.MoisturePercentage, 
         LightIndex: req.body.LightIndex    
    })

    try {
         const newData = await Data.save()
         res.status(201).json(newData)

    } catch (error) {
         res.status(400).json({ message: error.message})
    }
})

// router.post('/point',async (req,res) => {
//     console.log(req);
// })

module.exports = router