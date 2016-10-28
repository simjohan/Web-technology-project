var http = require('http');

module.exports = function(app,io){

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
    /*
    app.get('/home/api/user', function (req, res) {
        if (req.method == 'POST'){
            console.log("IS POST!")
        }
        else if (req.method == 'GET'){
            var data = JSON.stringify({
                name: 'bob bobsen',
                email: 'bob@email.com'
            });

            var options = {
                host: '',
                port: 3000,
                path: '/home/api/user',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': Buffer.byteLength(data)
                }
            };

            var req = http.request(options, function(res) {
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    console.log("body: " + chunk);
                });
            });
            req.write(data);
            req.end();
        }
        else {
            console.log("Not a POST REQUEST!");
            console.log(req.method)
        }
    });*/
    
    app.post('/home/api/user', function (req, res) {
        console.log("Received data: " + req.body.name);
        console.log("req: " + req);
        console.log("res: " + res);
        var id = req.body.id;
        var name = req.body.name;
        var email = req.body.email;
        var imgurl = req.body.imgurl;
        console.log("req-BODY: " + req.body);
        console.log("res-BODY: " + res.body);
    });



};
