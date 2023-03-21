const { title } = require("process");

var sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("db/movie_theater.sqlite", sqlite3.OPEN_READWRITE, (err)=>
{
    if (err) return console.error(err.message);
});

db.all('SELECT movie_name FROM movies', (err, rows) => {
    if (err) {
      console.error(err.message);
    } else {
      rows.forEach(row => {
        console.log(movie_name)
      });
    }
  });

db.close();

class Movie{
    constructor(title, genre, year, directors, poster, trailer){
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.directors = directors;
        this.writer = writer;
        this.stars = stars;
        this.poster = poster;
        this.trailer = trailer;
        this.plot = plot;
    }
}