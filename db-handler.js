var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);


/**
 * TODO: Node is asynchronous, so the data is not available to add to a list like this. FIX
 */
function getUsersFromDb() {
    var userList = [];
    db.each("SELECT * FROM Users", function(err, row) {
        userList.push(row.id, row.name, row.email, row.imageUrl);
        console.log("User: " + row.id + " - " + row.name + " - " + row.email + " - " + row.imageUrl);
    });
    console.log("length: " + userList.length);
    console.log("user: " + userList[0]);
    db.close();
}


console.log("Calling getusers");
getUsersFromDb();