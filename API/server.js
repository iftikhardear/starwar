var express = require('express');
var app = express();
var port = process.env.port || 1337;
var peopleController = require('./controller/PeopleController')();
var cors = require('cors');

app.use(cors({origin: '*'}));
app.use("/api/people", peopleController);

//To check port and start running time
app.listen(port,function(){
    var datetime = new Date();
    var message = "Server running on Port = "+ port + " Started at ="+ datetime;
    console.log(message);
});