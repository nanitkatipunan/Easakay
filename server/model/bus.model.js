const mongoose = require('mongoose')
const Schema = mongoose.Schema

var BusSchema = new Schema({
    bus_id:{
        type:Number,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    image1:{
        type: String,
        required: true
    },
    plateNumber:{
        type: String,
        required: true
    },
    busType:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    departureTime:{
        type: String,
        required: true
    },
    arrivalTime:{
        type: String,
        required: true
    },
    departureDate:{
        type: String,
        required: true
    },
    rlink:{
        type: String,
        required: true
    },
    fare:{
        type: String,
        required: true
    },
    busRoute:{
        from:{
            type: String,
            required: true
        },
        to:{
            type: String,
            required: true
        },
        address:{
            type: String,
            required: true
        },
    },
    availableSeats:{
        type: Number,
        required: true
    }

});
module.exports = mongoose.model('Bus', BusSchema)