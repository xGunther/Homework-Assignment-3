const express = require("express");
const app = express();
const port = 8058;
const sqlite3 = require("sqlite3").verbose();
const morgan = require("morgan");

app.use(morgan(":method :url :status :res[content-length] - :response-time ms :date[web]"));

//loading the index.html file as the home url
app.get("/html", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//loading the static files
app.use(express.static("index.html"));
app.use(express.static("html"));
app.use(express.static("public"));


// Opening a connection to the sqlite file
const db = new sqlite3.Database("public/db/movie_theater.sqlite", err => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the database file.");
  }
});

app.get("/movies-page-1", (req, res) => {
  //getting the movie name and poster for the homepage
  db.all("SELECT movie_id, movie_name, poster FROM movies", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(rows);
  });
});

app.get("/movies-page-2", (req, res) => {
  //getting the movie name and poster for the second homepage
  db.all("SELECT movie_id, movie_name, poster FROM movies LIMIT 10 OFFSET 10", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(rows);
  });
});

app.get("/movie-description-pages", (req, res) => {
  //getting the movie name and poster for the second homepage
  db.all("SELECT movie_name, director, actors, genre, length, release_year, description, trailer FROM movies", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(rows);
  });
});

//making sure that it is listening to the right port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

