var express = require('express');
var app = express();
var server = require('http').Server(app);
var session = require('express-session');
var bodyParser = require('body-parser');


// Database stuff here
var dbInit = require('./dbInit.js');
var dbHandler = require('./dbHandler.js');

var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();

// Run initial database script

//var mysql = require('mysql');

var io = require('socket.io')(server,{log:false});

server.listen(3000,function(){
    console.log("Server connected. Listening on port: 3000");
});
//session init
app.use( session({
    secret:'can',
    resave:false,
    saveUninitialized:false
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );

app.use( express.static(__dirname + '/client' ) );

//Routes
var Routes = require('./routes.js');
var r = new Routes(app, io);