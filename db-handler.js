var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


/**
 * TODO: Node is asynchronous, so the data is not available to add to a list like this. FIX
 */

function dbCallback(callback) {
    console.log(callback);
}

function getUsersFromDb2(query) {
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
    db.close();
}


function getUserById(id) {
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
    db.close();
}

function insertUser(id, name, email, imageurl) {
    var stmt = db.prepare('INSERT INTO Users VALUES (?, ?, ?, ?)');
    stmt.run(id, name, email, imageurl);
    stmt.finalize();
    db.close();
}


function updateUser(id, attr, value) {
    if (attr == 'id' || attr == 'name' || attr == 'email' || attr == 'imgurl'){
        var stmt = db.prepare('UPDATE Users SET ' + attr + '= ? WHERE id = ?');
        stmt.run(value, id);
        stmt.finalize();
        db.close();
    }
    else {
        console.log('Not a valid attribute to change!');
    }
}

function getMovieById(id) {
    var movieList = {};
    var stmt = db.prepare('SELECT * FROM Movies WHERE id = ?');
    stmt.each(id,
        function(err, row) {
            console.log(err);
            movieList[row.id] = {"name": row.title, "viewCount": row.viewCount};
            console.log("Movie: " + row.id + " - " + row.title + " - " + row.viewCount);
        },

        //callback called when the operation is completed (async call)
        function() {
            dbCallback(movieList)
        }
    );
    stmt.finalize();
    db.close();
}

function getMoviesByTitle(title){
    var movieList = {};
    var stmt = db.prepare('SELECT * FROM Movies WHERE title LIKE ?');
    stmt.each('%' + title + '%',
        function(err, row) {
            console.log(err);
            movieList[row.id] = {"name": row.title, "viewCount": row.viewCount};
            console.log("Movie: " + row.id + " - " + row.title + " - " + row.viewCount);
        },

        //callback called when the operation is completed (async call)
        function() {
            dbCallback(movieList)
        }
    );
    stmt.finalize();
    db.close();
}
