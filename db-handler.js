var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


/**
 * TODO: Node is asynchronous, so the data is not available to add to a list like this. FIX
 */

function getUsersCallback(users) {
    console.log(users);
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
            getUsersCallback(userList)
        }
    );
    stmt.finalize();
    db.close();
}


function getUser(useranme) {

}
