var sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("db/movie_theater.sqlite", sqlite3.OPEN_READWRITE, (err)=>
{
    if (err) return console.error(err.message);
});

// close the database connection
db.close();