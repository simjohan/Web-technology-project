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

/*
 * TODO: Make prepared statement for security reasons.
 */
function getUsersFromDb(query) {
    var userList = {};

    db.each(

        "SELECT * FROM Users WHERE name LIKE '%"+query+"%'",
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

    db.close();
}

function getUser(useranme) {

}
