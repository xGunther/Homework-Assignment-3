var sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("db/movie_theater.sqlite", sqlite3.OPEN_READWRITE, (err)=>
{
    if (err) return console.error(err.message);
});

db.all('SELECT description FROM movies', (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      rows.forEach(row => {
        
      });
    }
  });

db.close();