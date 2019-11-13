var express = require("express");
var socket = require("socket.io");
// APP setup 

var app  = express();
var server = app.listen(4000,function(){
    console.log("listenind to requests on port 4000");
})

//Static file
app.use(express.static('public'));


//Socket setup
var io = socket(server);

io.on('connection',function(socket){
    console.log('made socket connection',socket.id)
})
