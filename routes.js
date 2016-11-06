var http = require('http');
var parseurl = require('parseurl');
var file = "database.db";
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);
var dbHandler = require('./dbHandler');

module.exports = function(app,io){

    // On connect emit from socket
    io.on('connection', function(socket){
        console.log("Server connection.io");
        socket.emit('topology',currentTopo);
    });

    io.on('disconnect', function(socket){
        console.log("client dcd");
    });

    // Creates the recentMovies variable for the session
    app.use(function (req, res, next) {
        // If it is of length zero, create an empty array.
        if (!req.session.recentMovies) {
            req.session.recentMovies = [];
        }
        next()
    })

    // Gets all the recent movies
    app.get('/api/recent-movies', function(req, res){

        // Store the session IDs in a string
        var ids = req.session.recentMovies;

        // Track the recent movies
        var recent_movies = [];

        // Prepare the DB Statement
        var stmt = db.prepare(
            "SELECT * " +
            "FROM Movies " +
            "WHERE id IN (?, ?, ?, ?, ?) "
        );

        // For each  DB row
        stmt.each(ids,
            function(err, row) {
                recent_movies.push({
                    "id": row.id,
                    "title": row.title,
                    "img_url": row.img_url
                });
            },
            // Send the result
            function() {
                // Sort the array so that is in the same manner as the session array.
                recent_movies.sort(function(a, b) {
                    return ids.indexOf(b.id) - ids.indexOf(a.id);
                });
                res.send({recent_movies});
            }
        );

    });

    // Get all movies
    app.get('/api/get/movies', function(req, res) {

        var search_result = [];

        db.each('SELECT * FROM Movies',
            function(err, row) {
                search_result.push({"id": row.id, "title": row.title, "img_url": row.img_url, "year": row.year, "description": row.description});
            },
            function() {
                res.send({search_result})
            }
        );

    });


    // Get reviews based on movie with pagination
    app.get('/api/get/reviews/:movie_id/:from/:to', function(req, res) {

        var results = [];
        var stmt = db.prepare('SELECT * FROM Reviews WHERE movieId = ? ')

    });


    // Get movies by title
    app.get('/api/get/movies/:title', function(req, res) {

        var search_result = [];
        var stmt = db.prepare('SELECT * FROM Movies WHERE title LIKE ?');
        var term = "%"+req.params.title+"%"; // Check for results that are LIKE the search term
        stmt.each(term,
            function(err, row) {
                search_result.push({"id": row.id, "title": row.title, "img_url": row.img_url, "year": row.year, "description": row.description});
            },
            function() {
                res.send({search_result});
            }
        );

    });

    // Get specific movie reviews
    app.get('/api/specific-movie-reviews/:movieId', function(req, res){

        var reviews = [];
        var stmt = db.prepare(
            "SELECT r.review, r.title, r.rating, r.date, Users.name " +
            "FROM Reviews AS r " +
            "INNER JOIN Users " +
            "ON r.userId = Users.id " +
            "AND r.movieId = ? "
        );
        var movieId = req.params.movieId; // ID is provided by the parameters of the URL
        stmt.each(movieId,
            function(err, row) {
                reviews.push({
                    "username": row.name,
                    "review": row.review,
                    "title": row.title,
                    "rating": row.rating,
                    "date": row.date,
                });
            },
            function() {
                res.send({reviews});
            }
        );

    });

    // Get a specific movie based on id
    app.get('/api/specific-movie/:movieId', function(req, res) {

        // SESSION START
        // Adds the movie accessed to the recentMovies variable of the session, with some added logic

        // Check if the movie is already there
        // indexOf returns -1 if not present, index if present
        if (req.session.recentMovies.indexOf(req.params.movieId) < 0){
            console.log("test 1");
            // Check the length of the array
            if (req.session.recentMovies.length >= 5) {
                console.log("test 3");
                // Remove the first entry
                req.session.recentMovies.shift();
            }
            // Add the latest visited movie
            req.session.recentMovies.push(req.params.movieId);
        }
        else if (req.session.recentMovies.indexOf(req.params.movieId) >= 0) {
            console.log("test 2");
            // Find the index
            var index = req.session.recentMovies.indexOf(req.params.movieId);
            // Remove the entry
            req.session.recentMovies.splice(index, 1);
            // Add the entry to last place of array
            req.session.recentMovies.push(req.params.movieId);
        }
        else {
            console.log("Error occurred in /api/specific-movie/" + req.params.movieId);
        }

        // SESSION END

        //Do the acutal DB work
        var movie = [];
        var stmt = db.prepare('SELECT * FROM Movies WHERE id = ?');
        var id = req.params.movieId;
        stmt.each(id,
            function(err, row) {
                movie = {"id": row.id, "title": row.title, "img_url": row.img_url, "year": row.year, "description": row.description};
            },
            function() {
                res.send({movie});
            }
        );

    });


    // Get the newest reviewed movies sorted by date, limited to 5
    app.get('/api/newly-reviewed-movies', function(req, res) {

        var movies = [];
        var stmt = db.prepare(
            'SELECT Movies.id AS moviesId, Movies.title AS moviesTitle, Movies.img_url AS moviesImg_url ' +
            'FROM Movies ' +
            'INNER JOIN Reviews ' +
            'ON Movies.id = Reviews.movieId ' +
            'GROUP BY Movies.id ' +
            'ORDER BY datetime(Reviews.date) DESC ' +
            'LIMIT 5'
        );

        stmt.each(
            function (err, row) {
                movies.push({"id": row.moviesId, "title": row.moviesTitle, "img_url": row.moviesImg_url, "abc": row.rating});
            },
            function () {
                res.send({movies});
            }
        );

    });

    //Fetch the post request and add movie to database.
    app.post('/api/movies/add/:id', function (req, res) {
        var id = req.body[0];
        var title = req.body[1];
        var viewCount = req.body[2];
        dbHandler.insertMovie(id, title, viewCount);
    });

    // Fetch the post request and add item to database.
    app.post('/api/users/add/:id', function (req, res) {
        console.log("Received data ID: " + req.body[0]);
        console.log("Received data NAME: " + req.body[1]);
        console.log("Received data EMAIL: " + req.body[2]);
        console.log("Received data IMGURL: " + req.body[3]);
        var id = req.body[0];
        var name = req.body[1];
        var email = req.body[2];
        var imgurl = req.body[3];
        // Dont call for insert if some attributes are undefined
        if (id != null && name != null && email != null && imgurl != null){
            dbHandler.insertUser(id, name, email, imgurl);
        }
        else {
            console.log('req body is null!');
        }

    });

    //Fetch post request and remove user from database.
    app.post('/api/users/remove/:id', function (req, res) {
        console.log("Received data " + req.body[0]);
        var id = req.body[0];
        if (id != null){
            dbHandler.deleteUser(id);
        }else {
            console.log('id is null');
        }
    });

    app.get('/api/users/getUser/:id', function (req, res) {
        var user_by_id = [];
        var stmt = db.prepare("SELECT * FROM Users WHERE id = ?");

        stmt.each(req.params.id, // ID is provided by the parameters of the URL
            function(err, row) {
                console.log(err);
                user_by_id = {
                    "name": row.name,
                    "email": row.email,
                    "imageUrl": row.imageUrl
                };
                //console.log("User: " + row.id + " - " + row.name + " - " + row.email + " - " + row.imageUrl);
            },
            function() {
                /*Object.keys(user_by_id).forEach(function (key) {
                    var attribute_list = user_by_id[key];
                    console.log("Name: " + attribute_list.name);
                    console.log("Email: " + attribute_list.email);
                });*/
                res.send({user_by_id});
            }
        );
    });

    /*
        If all other options are exhausted, use this.
        Temp solution. This should be placed last.
        Sends the index file for all other URLs not specified previously in the express routing
    */
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/client/index.html');
    });


};
