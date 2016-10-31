var http = require('http');

module.exports = function(app,io){
    var dbHandler = require('./dbHandler');

    var sess;



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
                    {id: req.params.movieId, title: "Neutral", rating: "1", user: "A", text: "This is a test."},
                    {id: req.params.movieId, title: "Good", rating: "8", user: "B", text: "This is a test."},
                    {id: req.params.movieId, title: "lol", rating: "3", user: "AC", text: "This is a test."},
                    {id: req.params.movieId, title: "Awful", rating: "4", user: "C", text: "This is a test."},
                    {id: req.params.movieId, title: "Nice", rating: "7", user: "BB", text: "This is a test."},
                    {id: req.params.movieId, title: "Yolo", rating: "2", user: "Z", text: "This is a test."},
                    {id: req.params.movieId, title: "G-man", rating: "6", user: "AA", text: "This is a test. "},
                ]
            }
        ));
    });

    app.get('/api/specific-movie/:movieId', function(req, res) {
        // Insert DB logic here to handle the movieID, just sending example movie now.
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
        console.log("Received data name: " + req.body[1]);
        console.log("req: " + req);
        console.log("res: " + res);
        var id = req.body[0];
        var name = req.body[1];
        var email = req.body[2];
        var imgurl = req.body[3];
        console.log("req-BODY: " + req.body);
        dbHandler.insertUser(id, name, email, imgurl);

    });

    /*
        If all other options are exhausted, use this.
        Temp solution. This should be placed last.
    */
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/client/index.html');
    });


};
