var http = require("http");
var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


server = http.createServer( function (res, req) {
   console.dir(req.param);

    if (req.method == 'POST'){
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end('post received');
    }
    else {
        console.log("Not a POST REQUEST!");
    }
});

port = 3000;
host = 'localhost';
server.listen(port, host);
console.log("listening on port: " + port + " AND host: " + host);

/**
 * TODO: Node is asynchronous, so the data is not available to add to a list like this. FIX
 */

function dbCallback(callback) {
    console.log(callback);
}

function getUsersFromDb(query) {
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
    if (attr == 'name' || attr == 'email' || attr == 'imgurl'){
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

function insertMovie(id, title, viewCount) {
    var stmt = db.prepare('INSERT INTO Movies VALUES (?, ?, ?)');
    stmt.run(id, title, viewCount);
    stmt.finalize();
    db.close();
}

function updateMovie(id, attr, value){
    if (attr == 'title' || attr == 'viewCount'){
        var stmt = db.prepare('UPDATE Movies SET ' + attr + '= ? WHERE id = ?');
        stmt.run(value, id);
        stmt.finalize();
        db.close();
    }
    else {
        console.log('Not a valid attribute to change!');
    }
}

function incrementViewCount(id){
    var stmt = db.prepare('UPDATE Movies SET viewCount = viewCount + 1 WHERE id = ?');
    stmt.run(id);
    stmt.finalize();
    db.close();
}

// TODO: A review can now be added without the user or movie existing. Fix this.
function addReview(userId, movieId, review) {
    var stmt = db.prepare('INSERT INTO Reviews VALUES (?, ?, ?);');
    stmt.run(userId, movieId, review);
    stmt.finalize();
    db.close();


}