var fs = require("fs");
var file = "database.db";
var exists = fs.existsSync(file);
var sqlite3 = require("sqlite3").verbose();



// Create db if it doesn't exist.
if(!exists) {
    console.log("Creating DB file.");
    fs.openSync(file, "w");

    var db = new sqlite3.Database(file);


    console.log("Done creating DB...");

    // Create the required tables.
    console.log("Creating tables..");
    var CreateUserTable = "CREATE TABLE Users (id TEXT PRIMARY KEY UNIQUE, name TEXT, email TEXT, imageUrl TEXT)";
    var CreateMovieTable = "CREATE TABLE Movies (id TEXT PRIMARY KEY, title TEXT, img_url TEXT, year INTEGER, description TEXT)";
    var CreateReviews = "CREATE TABLE Reviews (id INTEGER PRIMARY KEY, userId INTEGER, movieId INTEGER, review TEXT)";

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
    var insertMovie = "INSERT INTO Movies VALUES (?, ?, ?, ?, ?)";
    var insertReview = "INSERT INTO Reviews VALUES(?, ?, ?, ?)";

    // ID, NAME, EMAIL, URL
    var user1 = ['3', 'Bob Arne', 'bob@bobsen.com', 'BOBimageurlhere'];
    var user2 = ['4', 'Lise', 'Lise@mail.com', 'Liseimageurlhere'];

    /**
     * Create movie dummy data
     * id, title, img_url, year, description
     */

    // ID, TITLE, VIEW COUNT
    var movie1 = [1, 'The expendables', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/y2qJoYxOhzyidsA60Mqn29H38Lk.jpg', 2010, "A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent."];
    var movie2 = [2, 'Saw 3', "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0NTEwNTgwNF5BMl5BanBnXkFtZTcwMDM5MTU5Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", 2010, "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror."];
    var movie3 = [3, 'test', 'url', 2010, 'text'];

    var movies = [];
    movies.push([1, 'The expendables', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/y2qJoYxOhzyidsA60Mqn29H38Lk.jpg', 2010, "A CIA operative hires a team of mercenaries to eliminate a Latin dictator and a renegade CIA agent."]);
    movies.push([2, 'Saw 3', "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0NTEwNTgwNF5BMl5BanBnXkFtZTcwMDM5MTU5Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", 2010, "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror."]);
    movies.push([3, 'The Shawshank Redemption', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg', 1994, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'])

    // USERID, MOVIEID, REVIEWTEXT
    var r1 = [1, '3', '1', 'It was a bad movie:('];
    var r2 = [2, '4', '2', 'It ME!'];
    var r3 = [3, '4', '2', 'It wSOME!'];
    var r4 = [4, '4', '3', 'Ias AWESOME!'];
    var r5 = [5, '4', '3', 'SOMEasd!'];
    var r6 = [6, '4', '3', 'SOMEsdas!'];
    var r7 = [7, '4', '3', 'SOME!'];
    var r8 = [8, '4', '3', 'SOM13123E!'];
    var r9 = [9, '4', '3', 'SOM1312132dddE!'];


    var stmt = db.prepare(insertUser);
    stmt.run(user1);
    stmt.run(user2);
    stmt.finalize();

    stmt = db.prepare(insertMovie);
    stmt.run(movie1);
    stmt.run(movie2);
    stmt.run(movie3);
    stmt.finalize();

    stmt = db.prepare(insertReview);
    stmt.run(r1);
    stmt.run(r2);
    stmt.run(r3);
    stmt.run(r4);
    stmt.run(r5);
    stmt.run(r6);
    stmt.run(r7);
    stmt.run(r8);
    stmt.run(r9);
    stmt.finalize();
    console.log("DONE!");

    db.close();
} else{
    console.log('Database already exists!')
}