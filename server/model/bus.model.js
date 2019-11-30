const mongoose = require('mongoose')
const Schema = mongoose.Schema

var BusSchema = new Schema({
    bus_id:{
        type:Number,
        required: true,
        unique: true,
    },
    departureTime:{
        type: String,
        required: true
    },
    arrivalTime:{
        type: String,
        required: true
    },
    destination:{
        type: String,
        required: true
    },
    busType:{
        type: String,
        required: true
    },
    availableSeat:{
        type: Number,
        required: true
    },
    busNo:{
        type: Number,
        required: true
    },
    passenger_id:{
        type: String,
        required: true
    },
    fare:{
        type: Number,
        required: true
    }

});
module.exports = mongoose.model('Bus', BusSchema)