var http = require('http');
var parseurl = require('parseurl');

module.exports = function(app,io){
    var dbHandler = require('./dbHandler');

    var sess;

    /*

     */

    app.use(function (req, res, next) {
        var recentMovies = req.session.recentMovies;

        if (!recentMovies) {
            recentMovies = req.session.recentMovies = [];
        }

        next() // Sort of understand this
    })

    app.get('/api/recent-movies', function(req, res){

        // Create an empty json array
        var obj = {"recent_movies": []};

        // Fill the array
        for (var i = 0; i < req.session.recentMovies.length; i++) {
            obj["recent_movies"].push({id: req.session.recentMovies[i], title: "Session", year: "2012"});
        }

        // Send the array
        res.send(JSON.stringify(
            obj
        ));

    });

    /*

     */



    io.on('connection', function(socket){
        console.log("Server connection.io");
        socket.emit('topology',currentTopo);
    });

    io.on('disconnect', function(socket){
        console.log("client dcd");
    });


    app.get('/api/specific-movie-reviews/:movieId', function(req, res){
        res.send(JSON.stringify(
            {
                "reviews": [
                    {id: req.params.movieId, title: "Neutral", rating: "3", user: "A", text: "This is a test."},
                    {id: req.params.movieId, title: "Good", rating: "4", user: "B", text: "This is a test."},
                    {id: req.params.movieId, title: "lol", rating: "4", user: "AC", text: "This is a test."},
                    {id: req.params.movieId, title: "Awful", rating: "4", user: "C", text: "This is a test."},
                    {id: req.params.movieId, title: "Nice", rating: "5", user: "BB", text: "This is a test."},
                    {id: req.params.movieId, title: "Yolo", rating: "9", user: "Z", text: "This is a test."},
                    {id: req.params.movieId, title: "G-man", rating: "1", user: "AA", text: "This is a test. "},
                ]
            }
        ));
    });

    app.get('/api/specific-movie/:movieId', function(req, res) {

        // Check if the movie is already there
        // indexOf returns -1 if not present, index if present
        if (req.session.recentMovies.indexOf(req.params.movieId) < 0){
            // Check the length of the array
            if (req.session.recentMovies.length >= 5) {
                // Remove the first entry
                req.session.recentMovies.shift();
            }
            // Add the latest visited movie
            req.session.recentMovies.push(req.params.movieId);
        }
        else if (req.session.recentMovies.indexOf(req.params.movieId) >= 0) {
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




        res.send(JSON.stringify(
            {
                id: req.params.movieId, title: "Frozen", rating: "10", year: "2012", actors: "Anna, Bella, John", directors: "JJ", country: "Iceland", description: "Lengthy description."
            }
        ));
    });

    app.get('/api/newly-reviewed-movies', function(req, res) {

        res.send(JSON.stringify(
            {
                "movies": [
                    {id: "1", title: "Frozen", year: "2012"},
                    {id: "2", title: "Matrix", year: "2002"}
                ]
            }
        ));

    });

    //Fetch the post request and add movie to database.
    app.post('/api/movies/add/:id', function (req, res) {
        console.log("Received movie title: " + req.body[1]);
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

    /*
        If all other options are exhausted, use this.
        Temp solution. This should be placed last.
    */
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/client/index.html');
    });


};
