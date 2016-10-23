var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);

// Create db if it doesn't exist.
if(!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, "w");
}

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database(file);

console.log("Done creating DB...");

// Create the required tables.
console.log("Creating tables..");
var CreateUserTable = "CREATE TABLE Users (id TEXT PRIMARY KEY, name TEXT, email TEXT, imageUrl TEXT)";
var CreateMovieTable = "CREATE TABLE Movies (id TEXT PRIMARY KEY, title TEXT, viewCount INTEGER)";
var CreateReviews = "CREATE TABLE Reviews (" +
    "userId TEXT, " +
    "movieId TEXT, " +
    "review TEXT," +
    "PRIMARY KEY (userId, movieId)," +
    "FOREIGN KEY(movieId) REFERENCES Movies(id)," +
    "FOREIGN KEY(userId) REFERENCES Users(id))";

/**
 * Run the database queries to create tables.
 */
db.serialize(function () {
   // If this is the first run. i.e. create fresh tables
    if(!exists){
        db.run(CreateUserTable);
        db.run(CreateMovieTable);
        db.run(CreateReviews);
    }
});
console.log("Done creating tables..");

/**
 * Create and run queries for dummy users
 */
console.log("Inserting dummy data");
var insertUser = "INSERT INTO Users VALUES (?, ?, ?, ?)";
var insertMovie = "INSERT INTO Movies VALUES (?, ?, ?)";
var insertReview = "INSERT INTO Reviews VALUES(?, ?, ?)";

// ID, NAME, EMAIL, URL
var user1 = ['3', 'Bob Arne', 'bob@bobsen.com', 'BOBimageurlhere'];
var user2 = ['4', 'Lise', 'Lise@mail.com', 'Liseimageurlhere'];

// ID, TITLE, VIEW COUNT
var movie1 = ['imdbtt1', 'The expendables', 10];
var movie2 = ['imdbtt2', 'Saw 3', 5];

// USERID, MOVIEID, REVIEWTEXT
var r1 = ['3', 'imdbtt1', 'It was a bad movie:('];
var r2 = ['4', 'imdbtt2', 'It was AWESOME!'];

var stmt = db.prepare(insertUser);
stmt.run(user1);
stmt.run(user2);
stmt.finalize();

stmt = db.prepare(insertMovie);
stmt.run(movie1);
stmt.run(movie2);
stmt.finalize();

stmt = db.prepare(insertReview);
stmt.run(r1);
stmt.run(r2);
stmt.finalize();
console.log("DONE!");

db.close();


