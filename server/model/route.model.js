const mongoose = require('mongoose')
const Schema = mongoose.Schema

var RouteSchema = new Schema({
    id : {
        type:Number,
        required: true,
        unique: true,
    },
    Location: {
        type:String,
        required: true,
    },	
    BusName: {
        type:String,
        required: true,
    },
    BusNumber: {
        type:String,
        required: true,
        unique: true,
    },	
    BusType: {
        type:String,
        required: true,
    },	
    Destination: {
        type:String,
        required: true,
    },
    DepartureTime: {
        type:String,
        required: true,
    },	
    ArrivalTime: {
        type:String,
        required: true,
    },	
    NumberOfBuses: {
        type:String,
        required: true,
    },	
    Seats: {
        type:String,
        required: true,
    }
});
module.exports = mongoose.model('Route', RouteSchema)