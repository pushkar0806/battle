var express = require('express'),
    Mongoose = require('mongoose'),
    router = require('./server/routes/route.js'),
    path = require('path'),
    bodyParser = require('body-parser'),
    app = express();

Mongoose.connect('mongodb://localhost:27017/battle_ground',{ useNewUrlParser: true });
Mongoose.connection;


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));

app.use('/', router);

var port = 3080;
app.listen(port, function () {
    console.log('Battle is going on at localhost: ' + port);
});

module.exports = app;