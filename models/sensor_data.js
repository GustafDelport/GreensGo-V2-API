const mongoose = require('mongoose')

const DataSchema = mongoose.Schema({
    time: Date,
    Temperature: String, 
    HumidityPercentage: String, 
    MoisturePercentage: String, 
    LightIndex: String
})

const Data = mongoose.model('Data',DataSchema)

module.exports = Data