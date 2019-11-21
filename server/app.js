const express = require('express');
const app = express();
const port = process.env.PORT || 8082
const bodyParser = require('body-parser');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./model/user.model')
const config = require('./key')
const jwt = require('jsonwebtoken')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

let url = 'mongodb://localhost:27017/easakayDB'



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
    User.findOne({ username: req.body.data.username, password: req.body.data.password })
        .then((data) => {
            if (data) {
                var token = jwt.sign({
                    _id: data._id
                }, config.secret, {
                        expiresIn: 86400
                    });
                res.json({token:token,
                    AUTH: true
                })
            } else {
                res.send('not found')
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