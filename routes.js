module.exports = function(app,io){

    var sess;

    io.on('connection', function(socket){
        console.log("Server connection.io");
        socket.emit('topology',currentTopo);
    });

    io.on('disconnect', function(socket){
        console.log("client dcd");
    });

    app.get('/home', function(req, res) {

        /*
        res.send(JSON.stringify([
          {
            id: "1",
            title: "Frozen",
            year: "2012"
          },
          {
            id: "2",
            title: "Matrix",
            year: "2002"
          }
        ]));
        */

        //res.send(JSON.stringify({"title": "Frozen", "year": "2012"}));

        res.send(JSON.stringify(
            {
                "movies": [
                    {
                        id: "1",
                        title: "Frozen",
                        year: "2012"
                    },
                    {
                        id: "2",
                        title: "Matrix",
                        year: "2002"
                    }
                ]
            }
        ));

    });

}
