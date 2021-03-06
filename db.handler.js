var http = require("http");
var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var routes = require('./routes.js');
var util = require('util');

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




exports.getUserMovieReview =  function(userId, movieId) {
    var userMovieReview = {};
    var stmt = db.prepare('SELECT * FROM Reviews WHERE userId = ? AND movieId = ?');
    stmt.each([userId, movieId],
        function(err, row) {
            console.log(err);

            userMovieReview[row.userId] = {"MovieId: ": row.movieId,
                "ReviewTitle: ": row.title,
                "Rating: ": row.rating,
                "ReviewText: ": row.review};

            console.log("MovieId: " + row.movieId + " - "
                + row.title + " - " + row.rating + " - " + row.review);
        },

        //callback called when the operation is completed (async call)
        function() {
            dbCallback(userMovieReview)
        }
    );
    stmt.finalize();
};

//this.getUserMovieReview("802492929853563", "2");




exports.insertUser = function(id, name, email, imageurl) {
    var stmt = db.prepare('INSERT OR IGNORE INTO Users VALUES (?, ?, ?, ?)');
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

exports.deleteUser = function (id) {
    console.log('In delete user db');
    var stmt = db.prepare('DELETE FROM Users WHERE id = ?');
    stmt.run(id);
    stmt.finalize();
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

exports.getMovies =  function(){

    //* id, title, img_url, year, description
    var movieList = {};
    //var stmt = db.prepare('SELECT * FROM Movies');
    db.each('SELECT * FROM Movies',
        function(err, row) {
            //console.log(err);
            movieList[row.id] = {"title": row.title, "img_url": row.img_url, "year": row.year, "description": row.description};
            //console.log(util.inspect(movieList[row.id], false, null));
            //console.log("Movie: " + movieList[row.id]);
        },

        //callback called when the operation is completed (async call)
        function() {
            dbCallback(movieList)
        }
    );
    return movieList;
    //stmt.finalize();

};

//this.getMovies()

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

exports.addReview =  function(userId, movieId, review, title, rating, date) {
    var stmt = db.prepare('INSERT OR IGNORE INTO Reviews VALUES (?, ?, ?, ?, ?, ?);');
    stmt.run(userId, movieId, review, title, rating, date);
    stmt.finalize();
};


var movieByIdCallback = function (callback) {
    //* id, title, img_url, year, description
    var key = Object.keys(callback);
    var title = "";
    var img_url = "";
    var year = "";
    var description = "";
    Object.keys(callback).forEach(function (key) {
        var attribute_list = callback[key];
        title = attribute_list.title;
        img_url = attribute_list.img_url;
        year = attribute_list.year;
        description = attribute_list.description
    });
};
