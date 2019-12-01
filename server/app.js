const express = require('express');
const app = express();
const port = process.env.PORT || 8082
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./model/user.model')
const Bus = require('./model/bus.model')
const config = require('./key')
const jwt = require('jsonwebtoken')
const path = require('path')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

let url = 'mongodb://localhost:27017/easakayDB'

// app.use(express.static('images'))

app.use('/public', express.static(path.join(__dirname, 'images')))

// let buses = [
    // {
    //     busId: 1,
    //     name: "Sunrays",
    //     image: require("assets/sunraysair.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "45211",
    //     busType: "Aircon",
    //     company: "Sunrays Bus Lines",
    //     departureTime: "04:00 AM",
    //     arrivalTime: "08:30 PM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Samboan",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     dropdown: {
    //         adult: "Adult",
    //         senior: "Senior Citizen",
    //         student: "Student"
    //     },
    //     availableSeats: 56
    // },
    // {
    //     busId: 2,
    //     name: "Ceres",
    //     image: require("assets/ceresor.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "55778",
    //     busType: "Ordinary",
    //     company: "Ceres Liner",
    //     departureTime: "01:00 AM",
    //     arrivalTime: "08:30 PM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Santander Liloan Port",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 50
    // },
    // {
    //     busId: 3,
    //     name: "Ceres",
    //     image: require("assets/ceresair.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "871",
    //     busType: "Aircon",
    //     company: "Ceres Liner",
    //     departureTime: "04:00 AM",
    //     arrivalTime: "06:00 AM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Argao",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 45
    // },
    // {
    //     busId: 4,
    //     name: "Ceres",
    //     image: require("assets/ceres.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "71289",
    //     busType: "Ordinary",
    //     company: "Ceres Liner",
    //     departureTime: "01:00 AM",
    //     arrivalTime: "10:00 PM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Bato",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 55
    // },
    // {
    //     busId: 5,
    //     name: "Ceres",
    //     image: require("assets/ceresairc.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "78542",
    //     busType: "Aircon",
    //     company: "Ceres Liner",
    //     departureTime: "07:00 PM",
    //     arrivalTime: "12:00 Mid",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Argao",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 40
    // },
    // {
    //     busId: 6,
    //     name: "Sunrays",
    //     image: require("assets/sunraysairc.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "58976",
    //     busType: "Aircon",
    //     company: "Sunrays Bus Lines",
    //     departureTime: "04:00 AM",
    //     arrivalTime: "08:30 PM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Santander Liloan Port",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 56
    // },
    // {
    //     busId: 7,
    //     name: "Ceres",
    //     image: require("assets/ceresord.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "52345",
    //     busType: "Ordinary",
    //     company: "Ceres Liner",
    //     departureTime: "01:00 PM",
    //     arrivalTime: "12:00 Mid",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Bato",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 45
    // },
    // {
    //     busId: 8,
    //     name: "Sunrays",
    //     image: require("assets/sunrays.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "80123",
    //     busType: "Aircon",
    //     company: "Sunrays Bus Lines",
    //     departureTime: "07:00 AM",
    //     arrivalTime: "10:30 AM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Alcoy",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 55
    // },
    // {
    //     busId: 9,
    //     name: "Sunrays",
    //     image: require("assets/sunraysexp.jpg"),
    //     image1: require("assets/iconbus.png"),
    //     plateNumber: "78542",
    //     busType: "Ordinary",
    //     company: "Sunrays Bus Lines",
    //     departureTime: "01:00 PM",
    //     arrivalTime: "08:30 PM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Santander Liloan Port",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },
    //     availableSeats: 39
    // },
    // {
    //     busId: 10,
    //     name: "Sunrays",
    //     image: "/uploads/image.jpeg",
    //     image1: "/uploads/image.jpeg",
    //     plateNumber: "18956",
    //     busType: "Ordinary",
    //     company: "Sunrays Bus Lines",
    //     departureTime: "04:00 AM",
    //     arrivalTime: "08:30 PM",
    //     departureDate: currentDate,
    //     rlink: "Router Details",
    //     fare: "Estimated Fare Php 120.00 - Php 180.00",
    //     busRoute: {
    //         from: "Southbus Terminal",
    //         to: "Samboan",
    //         address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
    //     },

    //     availableSeats: 45
    // }`
// ]




let buses = [
    {
        bus_id: 10,
        name: "Sunrays",
        image: "/public/ceres.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "18956",
        busType: "Ordinary",
        company: "Sunrays Bus Lines",
        departureTime: "04:00 AM",
        arrivalTime: "08:30 PM",
        departureDate: Date.now(),
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Samboan",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 45
    },
    {
        bus_id: 11,
        name: "Ceres",
        image: "/public/ceres.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "18956",
        busType: "Ordinary",
        company: "Ceres Bus Lines",
        departureTime: "04:00 AM",
        arrivalTime: "08:30 PM",
        departureDate: Date.now(),
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Samboan",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 45
    }
]


// for(var i =0; i< buses.length;i++){
    //  let bus1 = new Bus(buses[0]);
    //  bus1.save();
    // console.log(bus1);
    //  let bus2 = new Bus(buses[1]);
    // bus2.save();
    // console.log(bus2);
// }    

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('connedted to DB')
    })
    .catch(err => {
        console.log(err)
    })

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world')
});

app.post('/user/register', (req, res) => {
    console.log(req.body)
    let user = new User(req.body.data)
    user.save()
        .then(() => {
            console.log('saved')
            res.json({ message: "saved" })
        })
        .catch(err => {
            res.status(500).send(err)
        })

});

app.post('/user/login', (req, res) => {
    console.log(req.body)
    console.log(req.body.data.username)
    User.findOne({ username: req.body.data.username, password: req.body.data.password })
        .then((data) => {
            if (data) {
                var token = jwt.sign({
                    _id: data._id
                }, config.secret, {
                        expiresIn: 86400
                    });
                res.json({
                    user: data, token: token,
                    AUTH: true,
                })
            } else {
                res.send('not found')
            }
        })
        .catch(err => {
            res.status(500).send(err)
        })

});

app.get('/buses', function (req, res, next) {
    res.json({buses : buses});
});

app.get('/buses/search', function (req, res, next) {

    let to = req.query.to;
    let depart = req.query.depart;
      
    let query = {};

    if(to != null){
        query["busRoute.to"] = to;
    }

    if(depart != null){
        query.departureTime = depart;
    }

    Bus.find(query)
        .then((data) => {
            if (data) {
                res.json({ data :data});
            } else {
                res.status(404).send('not found')
            }
        })
        .catch(err => {
            res.status(500).send(err)
        })

});


app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected ' + port)
    }
})