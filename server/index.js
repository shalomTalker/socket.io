//modules

const express = require('express')
const app = express();
const http = require('http').Server(app) // we have to use it for getting socket.io and express working together
const PORT = process.env.PORT || 5000;
const io = require('socket.io')(http) // setting up socket.io for working with http server (3000, localhost, app)
const fs = require('fs')
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const morgan = require('morgan')
io.on('connection',socket=>{
    console.log(socket)
})
app.use(express.static('public'))
// const users = JSON.parse(fs.readFileSync('../../users.json', 'utf8'))

//  models
require('./models/User');

//docs
require('./services/passport');
const keys = require('./config/keys')

//connecting mongoDB via mongoose libary
console.log(keys.mongoURI)
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })


// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

// routers uses
app.use(require('./routes/authRouter'))

// production`s static files config
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })

}
// opening port
app.listen(PORT)