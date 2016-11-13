var express = require('express');
var app = express();
var server = require('http').Server(app);
var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);
var bodyParser = require('body-parser');

// Database stuff here
var dbInit = require('./dbInit.js');
var dbHandler = require('./dbHandler.js');

var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();

//Open db. Should fix the SQL_ERROR: DB LOCKED.
var db = new sqlite3.Database(file);

// Run initial database script

//var mysql = require('mysql');

var io = require('socket.io')(server,{log:false});

var port = 80;
server.listen(port,function(){
    console.log("Server connected. Listening on port: " + port);
});


//session init
app.use( session({
    store: new SQLiteStore({
        table: 'sessions',
        db: 'database',
        dir: '.'
    }),
    rolling: true,
    secret: 'keyboard cat',
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 }, // 1 week
    resave: false,
    saveUninitialized: false
}));
db.close();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}) );


app.use( express.static(__dirname + '/dist' ) );

//Routes
var Routes = require('./routes.js');
var r = new Routes(app, io);