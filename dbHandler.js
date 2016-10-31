var http = require("http");
var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var routes = require('./routes.js');

/**
 * TODO: Node is asynchronous, so the data is not available to add to a list like this. FIX
 */

var dbCallback = function(callback) {
    console.log(callback);
};

exports.getUsersFromDb =  function(query) {
    var userList = {};
    var stmt = db.prepare('SELECT * FROM Users WHERE name LIKE ?');
    stmt.each('%' + query + '%',
        function(err, row) {
            console.log(err);
            userList[row.id] = {"name": row.name, "email": row.email, "imageUrl": row.imageUrl};
            console.log("User: " + row.id + " - " + row.name + " - " + row.email + " - " + row.imageUrl);
        },

        //callback called when the operation is completed (async call)
        function() {
            dbCallback(userList)
        }
    );
    stmt.finalize();
};


exports.getUserById =  function(id) {
    var user = {};
    var stmt = db.prepare('SELECT * FROM Users WHERE id = ?');
    stmt.each(id,
        function(err, row) {
            console.log(err);
            user[row.id] = {"name": row.name, "email": row.email, "imageUrl": row.imageUrl};
            console.log("User: " + row.id + " - " + row.name + " - " + row.email + " - " + row.imageUrl);
        },

        //callback called when the operation is completed (async call)
        function() {
            dbCallback(user)
        }
    );
    stmt.finalize();
};

exports.insertUser = function(id, name, email, imageurl) {
    var stmt = db.prepare('INSERT INTO Users VALUES (?, ?, ?, ?)');
    stmt.run(id, name, email, imageurl);
    stmt.finalize();
};


exports.updateUser =  function(id, attr, value) {
    if (attr == 'name' || attr == 'email' || attr == 'imgurl'){
        var stmt = db.prepare('UPDATE Users SET ' + attr + '= ? WHERE id = ?');
        stmt.run(value, id);
        stmt.finalize();
    }
    else {
        console.log('Not a valid attribute to change!');
    }
};

exports.getMovieById = function(id) {
    var movieList = {};
    var stmt = db.prepare('SELECT * FROM Movies WHERE id = ?');
    stmt.each(id,
        function(err, row) {
            console.log(err);
            movieList[row.id] = {"title": row.title, "viewCount": row.viewCount};
            console.log("Movie: " + row.id + " - " + row.title + " - " + row.viewCount);
        },

        //callback called when the operation is completed (async call)
        function() {
            movieByIdCallback(movieList);
        }
    );
    stmt.finalize();
};

exports.getMoviesByTitle =  function(title){
    var movieList = {};
    var stmt = db.prepare('SELECT * FROM Movies WHERE title LIKE ?');
    stmt.each('%' + title + '%',
        function(err, row) {
            console.log(err);
            movieList[row.id] = {"title": row.title, "viewCount": row.viewCount};
            console.log("Movie: " + row.id + " - " + row.title + " - " + row.viewCount);
        },

        //callback called when the operation is completed (async call)
        function() {
            dbCallback(movieList)
        }
    );
    stmt.finalize();
};

exports.insertMovie =  function(id, title, viewCount) {
    var stmt = db.prepare('INSERT INTO Movies VALUES (?, ?, ?)');
    stmt.run(id, title, viewCount);
    stmt.finalize();
};

exports.updateMovie =  function(id, attr, value){
    if (attr == 'title' || attr == 'viewCount'){
        var stmt = db.prepare('UPDATE Movies SET ' + attr + '= ? WHERE id = ?');
        stmt.run(value, id);
        stmt.finalize();
    }
    else {
        console.log('Not a valid attribute to change!');
    }
};

exports.incrementViewCount = function(id){
    var stmt = db.prepare('UPDATE Movies SET viewCount = viewCount + 1 WHERE id = ?');
    stmt.run(id);
    stmt.finalize();
};

// TODO: A review can now be added without the user or movie existing. Fix this.
exports.addReview =  function(userId, movieId, review) {
    var stmt = db.prepare('INSERT INTO Reviews VALUES (?, ?, ?);');
    stmt.run(userId, movieId, review);
    stmt.finalize();


};

var movieByIdCallback = function (callback) {
    var key = Object.keys(callback);
    var title = "";
    var viewCount = 0;
    Object.keys(callback).forEach(function (key) {
        var attribute_list = callback[key];
        title = attribute_list.title;
        viewCount = attribute_list.viewCount;
    });
};
