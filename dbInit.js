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
    var CreateReviews = "CREATE TABLE Reviews (" +
        "userId TEXT, " +
        "movieId TEXT, " +
        "review TEXT," +
        "title TEXT," +
        "rating TEXT," +
        "date DATETIME, " +
        "PRIMARY KEY (userId, movieId, date)," +
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
    var insertMovie = "INSERT INTO Movies VALUES (?, ?, ?, ?, ?)";
    var insertReview = "INSERT INTO Reviews VALUES(?, ?, ?, ?, ?, ?)";

    // ID, NAME, EMAIL, URL
    var user1 = ['3', 'Bob Arne', 'bob@bobsen.com', 'BOBimageurlhere'];
    var user2 = ['4', 'Lise', 'Lise@mail.com', 'Liseimageurlhere'];
    var user3 = ['5', 'Per', 'Per@mail.com', 'Perimageurlhere'];
    var user4 = ['6', 'Ole', 'Ole@mail.com', 'Oleimageurlhere'];
    var user5 = ['7', 'Birger', 'Birger@mail.com', 'Birgerimageurlhere'];

    /**
     * Create movie dummy data
     * id, title, img_url, year, description
     */

    // ID, TITLE, VIEW COUNT
    var movie1 = [1, 'WALL·E', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg', 2008, "In the distant future, a small waste-collecting robot inadvertently embarks on a space journey that will ultimately decide the fate of mankind."];
    var movie2 = [2, 'Saw 3', "https://images-na.ssl-images-amazon.com/images/M/MV5BMjI0NTEwNTgwNF5BMl5BanBnXkFtZTcwMDM5MTU5Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg", 2010, "As a deadly battle rages over Jigsaw's brutal legacy, a group of Jigsaw survivors gathers to seek the support of self-help guru and fellow survivor Bobby Dagen, a man whose own dark secrets unleash a new wave of terror."];
    var movie3 = [3, 'Frozen', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SY1000_CR0,0,674,1000_AL_.jpg', 2013, 'When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister, Anna, teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.'];
    var movie4 = [4, 'Inception', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', 2010, 'A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.'];

    var movie5 = [5, 'The Matrix Reloaded', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjA0NDM5MDY2OF5BMl5BanBnXkFtZTcwNzg5OTEzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg', 2003, 'Neo and the rebel leaders estimate that they have 72 hours until 250,000 probes discover Zion and destroy it and its inhabitants. During this, Neo must decide how he can save Trinity from a dark fate in his dreams.'];
    var movie6 = [6, 'The Matrix Revolutions', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNjc4NTQzOV5BMl5BanBnXkFtZTcwNDYzMTQyMQ@@._V1_.jpg', 2003, 'The human city of Zion defends itself against the massive invasion of the machines as Neo fights to end the war at another front while also opposing the rogue Agent Smith.'];

    var movie7 = [7, 'The Dark Knight', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg', 2008, 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.'];
    var movie8 = [8, 'Goodfellas', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNThjMzczMjctZmIwOC00NTQ4LWJhZWItZDdhNTk5ZTdiMWFlXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,669,1000_AL_.jpg', 1990, 'Henry Hill and his friends work their way up through the mob hierarchy.'];

    var movie9 = [9, 'The Shawshank Redemption', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg', 1994, 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'];

    var movie10 = [10, 'Fight Club', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNGM2NjQxZTAtMmU5My00YTk5LWFmOWMtYjZlYzk4YzMwNjFlXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg', 1999, 'An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soap maker, forming an underground fight club that evolves into something much, much more.'];
    var movie11 = [11, 'Transformers', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDg1NTU2OWEtM2UzYi00ZWRmLWEwMTktZWNjYWQ1NWM1OThjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg', 2007, 'An ancient struggle between two Cybertronian races, the heroic Autobots and the evil Decepticons, comes to Earth, with a clue to the ultimate power held by a teenager.'];
    var movie12 = [12, 'Transformers: Age of Extinction', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjEwNTg1MTA5Nl5BMl5BanBnXkFtZTgwOTg2OTM4MTE@._V1_SY1000_CR0,0,640,1000_AL_.jpg', 2014, 'Autobots must escape sight from a bounty hunter who has taken control of the human serendipity: Unexpectedly, Optimus Prime and his remaining gang turn to a mechanic, his daughter, and her back street racing boyfriend for help.'];

    var movie13 = [13, 'Star Wars: Episode IV - A New Hope', 'https://images-na.ssl-images-amazon.com/images/M/MV5BZGEzZTExMDEtNjg4OC00NjQxLTk5NTUtNjRkNjA3MmYwZjg1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,633,1000_AL_.jpg', 1977, 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a wookiee and two droids to save the galaxy from the Empires world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader.'];
    var movie14 = [14, 'Star Wars: The Force Awakens', 'https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SY1000_CR0,0,677,1000_AL_.jpg', 2015, 'Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.'];
    var movie15 = [15, 'Star Wars: Episode VIII', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNmQ2NjVmYjItOTI1Zi00MWY5LWE4MDEtZDc0NWY5YTc5MWVhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_SY1000_CR0,0,666,1000_AL_.jpg', 2017, 'Having taken her first steps into a larger world in Star Wars: The Force Awakens (2015), Rey continues her epic journey with Finn, Poe and Luke Skywalker in the next chapter of the saga.'];
    var movie16 = [16, 'Alien', 'https://images-na.ssl-images-amazon.com/images/M/MV5BNDNhN2IxZWItNGEwYS00ZDNhLThiM2UtODU3NWJlZjBkYjQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,681,1000_AL_.jpg', 1979, 'After a space merchant vessel perceives an unknown transmission as distress call, their landing on the source moon finds one of the crew attacked by a mysterious lifeform. Continuing their journey back to Earth with the attacked crew having recovered and the critter deceased, they soon realize that its life cycle has merely begun.'];

    var movie17 = [17, 'Star Wars: Episode V - The Empire Strikes Back', 'https://images-na.ssl-images-amazon.com/images/M/MV5BYmViY2M2MTYtY2MzOS00YjQ1LWIzYmEtOTBiNjhlMGM0NjZjXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,644,1000_AL_.jpg', 1980, 'After the rebels have been brutally overpowered by the Empire on their newly established base, Luke Skywalker takes advanced Jedi training with Master Yoda, while his friends are pursued by Darth Vader as part of his plan to capture Luke.'];
    var movie18 = [18, 'Star Wars: Episode VI - Return of the Jedi', 'https://images-na.ssl-images-amazon.com/images/M/MV5BODllZjg2YjUtNWEzNy00ZGY2LTgyZmQtYTkxNDYyOWM3OTUyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SY1000_CR0,0,637,1000_AL_.jpg', 1983, 'After rescuing Han Solo from the palace of Jabba the Hutt, the rebels attempt to destroy the second Death Star, while Luke struggles to make Vader return from the dark side of the Force.'];
    var movie19 = [19, 'Minority Report', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDgzNDk3ZDctYTUxMC00MDQzLWI1MTctMmQxYWE0MGUzYzIxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SY1000_CR0,0,675,1000_AL_.jpg', 2002, 'In a future where a special police unit is able to arrest murderers before they commit their crimes, an officer from that unit is himself accused of a future murder.'];
    var movie20 = [20, 'Interstellar', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SY1000_CR0,0,640,1000_AL_.jpg', 2014, 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.'];


    // USERID, MOVIEID, REVIEWTEXT
    var r1 = ['3', '1', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 'Bad!', '1', '2015-08-10 14:52:00'];
    var r2 = ['4', '2', 'It was AWESOME!', 'Awesome!', '5', '2016-11-03 16:32:00'];
    var r3 = ['5', '1', 'It was ok', 'OK film', '3', '2013-11-03 16:32:00'];
    var r4 = ['6', '1', 'It was not bad', 'Awesome!', '4', '2011-11-03 16:32:00'];
    var r5 = ['7', '1', 'I liked it a lot!', 'Good movie', '3', '2009-03-28 13:22:00'];

    var r6 = ['3', '5', 'Not a good movie to be honest', 'Not good', '1', '2008-08-03 16:32:00'];
    var r7 = ['4', '5', 'Perfect movie and perfect plot. Everything was perfect, except the acting', 'Nice!', '2', '2001-01-26 08:03:00'];
    var r8 = ['5', '6', 'Awful awful awful bad bad bad!', 'Awful and bad!', '1', '2015-09-20 23:36:20'];
    var r9 = ['5', '14', 'Awful awful awful bad bad bad!', 'Awful and bad!', '3', '2015-09-20 23:37:25'];
    var r10 = ['5', '8', 'Awful awful awful bad bad bad!', 'Awful and bad!', '2', '2015-09-20 23:38:55'];


    var stmt = db.prepare(insertUser);
    stmt.run(user1);
    stmt.run(user2);
    stmt.run(user3);
    stmt.run(user4);
    stmt.run(user5);
    stmt.finalize();

    stmt = db.prepare(insertMovie);
    stmt.run(movie1);
    stmt.run(movie2);
    stmt.run(movie3);
    stmt.run(movie4);
    stmt.run(movie5);
    stmt.run(movie6);
    stmt.run(movie7);
    stmt.run(movie8);
    stmt.run(movie9);
    stmt.run(movie10);
    stmt.run(movie11);
    stmt.run(movie12);
    stmt.run(movie13);
    stmt.run(movie14);
    stmt.run(movie15);
    stmt.run(movie16);
    stmt.run(movie17);
    stmt.run(movie18);
    stmt.run(movie19);
    stmt.run(movie20);

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
    stmt.run(r10);

    stmt.finalize();
    console.log("DONE!");

    db.close();
} else{
    console.log('Database already exists!')
}