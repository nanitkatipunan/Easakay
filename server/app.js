const express = require('express');
const app = express();
const port = process.env.PORT || 8082
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./model/user.model')
const Bus = require('./model/bus.model')
const Route = require('./model/route.model')
const config = require('./key')
const jwt = require('jsonwebtoken')
const path = require('path')
const router = require('express').Router();
// const Post = require('./../models/post');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

let url = 'mongodb://localhost:27017/easakayDB'

app.use('/public', express.static(path.join(__dirname, 'images')))
var currentDate = new Date().toJSON().slice(0, 10).replace(/-/g, "-");
let buses = [
    {
        bus_id: 1,
        name: "Sunrays",
        image: "/public/sunraysair.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "45211",
        busType: "Aircon",
        company: "Sunrays Bus Lines",
        departureTime: "04:00 AM",
        arrivalTime: "08:30 PM",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Samboan",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        dropdown: {
            adult: "Adult",
            senior: "Senior Citizen",
            student: "Student"
        },
        availableSeats: 56
    },
    {
        bus_id: 2,
        name: "Ceres",
        image: "/public/ceresor.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "55778",
        busType: "Ordinary",
        company: "Ceres Liner",
        departureTime: "01:00 AM",
        arrivalTime: "08:30 PM",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Santander Liloan Port",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 50
    },
    {
        bus_id: 3,
        name: "Ceres",
        image: "/public/ceresair.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "871",
        busType: "Aircon",
        company: "Ceres Liner",
        departureTime: "04:00 AM",
        arrivalTime: "06:00 AM",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Argao",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 45
    },
    {
        bus_id: 4,
        name: "Ceres",
        image: "/public/ceres.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "71289",
        busType: "Ordinary",
        company: "Ceres Liner",
        departureTime: "01:00 AM",
        arrivalTime: "10:00 PM",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Bato",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 55
    },
    {
        bus_id: 5,
        name: "Ceres",
        image: "/public/ceresairc.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "78542",
        busType: "Aircon",
        company: "Ceres Liner",
        departureTime: "07:00 PM",
        arrivalTime: "12:00 Mid",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Argao",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 40
    },
    {
        bus_id: 6,
        name: "Sunrays",
        image: "/public/sunraysairc.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "58976",
        busType: "Aircon",
        company: "Sunrays Bus Lines",
        departureTime: "04:00 AM",
        arrivalTime: "08:30 PM",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Santander Liloan Port",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 56
    },
    {
        bus_id: 7,
        name: "Ceres",
        image: "/public/ceresord.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "52345",
        busType: "Ordinary",
        company: "Ceres Liner",
        departureTime: "01:00 PM",
        arrivalTime: "12:00 Mid",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Bato",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 45
    },
    {
        bus_id: 8,
        name: "Sunrays",
        image: "/public/sunrays.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "80123",
        busType: "Aircon",
        company: "Sunrays Bus Lines",
        departureTime: "07:00 AM",
        arrivalTime: "10:30 AM",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Alcoy",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 55
    },
    {
        bus_id: 9,
        name: "Sunrays",
        image: "/public/sunraysexp.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "78542",
        busType: "Ordinary",
        company: "Sunrays Bus Lines",
        departureTime: "01:00 PM",
        arrivalTime: "08:30 PM",
        departureDate: currentDate,
        rlink: "Router Details",
        fare: "Estimated Fare Php 120.00 - Php 180.00",
        busRoute: {
            from: "Southbus Terminal",
            to: "Santander Liloan Port",
            address: "Natalio B. Bacalso Avenue, Cebu City, 6000 Cebu"
        },
        availableSeats: 39
    },
    {
        bus_id: 10,
        name: "Sunrays",
        image: "/public/sunraysord.jpg",
        image1: "/public/iconbus.png",
        plateNumber: "18956",
        busType: "Ordinary",
        company: "Sunrays Bus Lines",
        departureTime: "04:00 AM",
        arrivalTime: "08:30 PM",
        departureDate: currentDate,
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
let items = [
    {
        id: 1,
        Location: "CENTER WING",
        BusName: "CERES LINER",
        BusNumber: "Ceres Liner 55778",
        BusType: "Ordinary",
        Destination: "South Bus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob, Santander",
        DepartureTime: "1:00 AM",
        ArrivalTime: "8:30 PM",
        NumberOfBuses: '5',
        Seats: "50 seats"
    },
    {
        id: 2,
        Location: "CENTER WING",
        BusName: "CERES LINER",
        BusNumber: "Ceres Liner 55778",
        BusType: "Aircon",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Barili, Dumanjug, Badian, Samboan, Bato",
        DepartureTime: "4:00 AM",
        ArrivalTime: "6:00 PM",
        NumberOfBuses: '3',
        Seats: "45 Seaters"
    },
    {
        id: 3,
        Location: "CENTER WING",
        BusName: "CERES LINER",
        BusNumber: "Ceres Liner 71289",
        BusType: "Ordinary",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Barili, Dumanjug, Badian, Samboan, Bato",
        DepartureTime: "1:00 AM",
        ArrivalTime: "10:00 PM",
        NumberOfBuses: '5',
        Seats: "55 Seaters"
    },
    {
        id: 4,
        Location: "CENTER WING",
        BusName: "CERES LINER",
        BusNumber: "Ceres Tours 871",
        BusType: "Aircon",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao",
        DepartureTime: "04:00 AM",
        ArrivalTime: "06:00 AM",
        NumberOfBuses: '3',
        Seats: "45 Seaters"
    },
    {
        id: 5,
        Location: "CENTER WING",
        BusName: "CERES LINER",
        BusNumber: "Ceres Liner 78542",
        BusType: "Aircon",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao",
        DepartureTime: "7:00 AM",
        ArrivalTime: "12:00 Mid",
        NumberOfBuses: '4',
        Seats: "40 Seaters"
    },
    {
        id: 6,
        Location: "CENTER WING",
        BusName: "CERES LINER",
        BusNumber: "Ceres Liner 55778",
        BusType: "Aircon",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy ",
        DepartureTime: "1:00 AM",
        ArrivalTime: "12:00 Mid",
        NumberOfBuses: '5',
        Seats: "45 Seaters"
    },
    {
        id: 7,
        Location: "RIGHT WING",
        BusName: "CERES LINER",
        BusType: "Aircon",
        BusNumber: "Ceres Liner 45678",
        Destination: "Southbus Terminal - Balamban, via Toledo, Pinamungajan",
        DepartureTime: "4:00 AM",
        ArrivalTime: "7:00 PM",
        NumberOfBuses: '4',
        Seats: "55 Seaters"
    },
    {
        id: 8,
        Location: "LEFT WING",
        BusName: "SUNRAYS",
        BusNumber: "Sunrays Bus Lines 45211",
        BusType: "Aircon",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Barili, Dumanjug, Badian, Samboan",
        DepartureTime: "4:00 AM",
        ArrivalTime: "8:30 PM",
        NumberOfBuses: '3',
        Seats: "56 Seaters"
    },
    {
        id: 9,
        Location: "LEFT WING",
        BusName: "SUNRAYS",
        BusNumber: "Sunrays Bus Lines 58976",
        BusType: "Aircon",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob, Santander",
        DepartureTime: "4:00 AM",
        ArrivalTime: "8:30 PM",
        NumberOfBuses: '6',
        Seats: "56 Seaters"
    },
    {
        id: 10,
        Location: "LEFT WING",
        BusName: "SUNRAYS",
        BusNumber: "Sunrays Bus Lines 80123",
        BusType: "Aircon",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy",
        DepartureTime: "07:00 AM",
        ArrivalTime: "10:30 AM",
        NumberOfBuses: '4',
        Seats: "55 Seaters"
    },
    {
        id: 11,
        Location: "LEFT WING",
        BusName: "SUNRAYS",
        BusNumber: "Sunrays Bus Lines 78542",
        BusType: "Ordinary",
        Destination: "Southbus Terminal - Talisay, City of Naga, San Fernando, Sibonga, Argao, Dalaguete, Alcoy, Boljoon, Oslob, Santander",
        DepartureTime: "01:00 PM",
        ArrivalTime: "08:30 AM",
        NumberOfBuses: '3',
        Seats: "39 Seaters"
    }
]

// for(var i =0; i< buses.length;i++){
let bus1 = new Bus(buses[0]);
bus1.save();
console.log(bus1);
let bus2 = new Bus(buses[1]);
bus2.save();
console.log(bus2);
let bus3 = new Bus(buses[2]);
bus3.save();
console.log(bus3);
let bus4 = new Bus(buses[3]);
bus4.save();
console.log(bus4);
let bus5 = new Bus(buses[4]);
bus5.save();
console.log(bus5);
let bus6 = new Bus(buses[5]);
bus6.save();
console.log(bus6);
let bus7 = new Bus(buses[6]);
bus7.save();
console.log(bus7);
let bus8 = new Bus(buses[7]);
bus8.save();
console.log(bus8);
let bus9 = new Bus(buses[8]);
bus9.save();
console.log(bus9);
let bus10 = new Bus(buses[9]);
bus10.save();
console.log(bus10);

//for the route details
let route1 = new Route(items[0]);
route1.save();
console.log(route1);
let route2 = new Route(items[1]);
route2.save();
console.log(route2);
let route3 = new Route(items[2]);
route3.save();
console.log(route3);
let route4 = new Route(items[3]);
route4.save();
console.log(route4);
let route5 = new Route(items[4]);
route5.save();
console.log(route5);
let route6 = new Route(items[5]);
route6.save();
console.log(route6);
let route7 = new Route(items[6]);
route7.save();
console.log(route7);
let route8 = new Route(items[7]);
route8.save();
console.log(route8);
let route9 = new Route(items[8]);
route9.save();
console.log(route9);
let route10 = new Route(items[9]);
route10.save();
console.log(route10);
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
    res.json({ buses: buses });
});

app.get('/buses/search', function (req, res, next) {

    let to = req.query.to;
    let depart = req.query.depart;

    let query = {};

    if (to != null) {
        query["busRoute.to"] = to;
    }

    if (depart != null) {
        query.departureTime = depart;
    }

    Bus.find(query)
        .then((data) => {
            if (data) {
                res.json({ data: data });
            } else {
                res.status(404).send('not found')
            }
        })
        .catch(err => {
            res.status(500).send(err)
        })

});

// router.get('/', (req, res, next) => {
//     Post.find({}, {title: true}).exec((err, posts) => {
//         res.render('index', {posts});
//     });
// });

// router.get('/posts/:id', (req, res, next) => {
//     Post.findOne({_id: req.params.id}).exec((err, post) => {
//         res.render('post', {post});
//     });
// });

// router.post('/posts/:id', (req, res, next) => {
//     Post.findByIdAndUpdate(req.params.id, { body: req.body.body }, (err, post) => {
//             let Pusher = require('pusher');
//             let pusher = new Pusher({
//                 appId: process.env.PUSHER_APP_ID,
//                 key: process.env.PUSHER_APP_KEY,
//                 secret: process.env.PUSHER_APP_SECRET,
//                 cluster: process.env.PUSHER_APP_CLUSTER
//             });
//             pusher.trigger('notifications', 'post_updated', post, req.headers['x-socket-id']);
//             res.send('');
//         });
// });

module.exports = router;
app.get('/items', function (req, res, next) {
    res.json({ items: items });
});

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('connected ' + port)
    }
})