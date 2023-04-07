const express = require("express");
const app = express();
const port = 8058;
const sqlite3 = require("sqlite3").verbose();
const morgan = require("morgan");

//making a logger that will log the req method, req url, status, content-length, res time and date.
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :date[web]"));

//loading the index.html file as the home url.
app.get("/html", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//loading the static files.
app.use(express.static("index.html"));
app.use(express.static("html"));
app.use(express.static("public"));

//getting the movies-page-1 endpoint and sending the queried data in json to this endpoint.
app.get("/movies-page-1", (req, res) => {
  //opening the database connection.
  const db = new sqlite3.Database("public/db/movie_theater.sqlite", err => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Connected to the database file.");
  });
  //querying the movie ID's, movie names and posters from the movie table.
  db.all("SELECT movie_id, movie_name, poster FROM movies", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(rows);
    //closing the database connection.
    db.close(err => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Database connection is closed.");
      }
    });
  });
});

//getting the movies-page-2 endpoint and sending the queried data in json to this endpoint.
app.get("/movies-page-2", (req, res) => {
  //opening the database connection.
  const db = new sqlite3.Database("public/db/movie_theater.sqlite", err => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Connected to the database file.");
  });
  //querying the movie ID's, movie names and posters from the movie table.
  db.all("SELECT movie_id, movie_name, poster FROM movies LIMIT 10 OFFSET 10", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(rows);
    //closing the database connection.
    db.close(err => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Database connection is closed.");
      }
    });
  });
});

//getting the movie-description-pages endpoint and sending the queried data in json to this endpoint.
app.get("/movie-description-pages", (req, res) => {
  //opening the database connection.
  const db = new sqlite3.Database("public/db/movie_theater.sqlite", err => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Connected to the database file.");
  });
  //querying the movie name, director, actor, genre, length, release year, description and trailer from the movie table.
  db.all("SELECT movie_name, director, actors, genre, length, release_year, description, trailer FROM movies", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(rows);
    //closing the database connection.
    db.close(err => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Database connection is closed.");
      }
    });
  });
});

//getting the movie_times endpoint and sending the queried data in json to this endpoint.
app.get("/movie_times", (req, res) => {
  //opening the database connection.
  const db = new sqlite3.Database("public/db/movie_theater.sqlite", err => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    console.log("Connected to the database file.");
  });
  //querying the movie times from the movie table.
  db.all("SELECT time_one, time_two FROM movies", (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
    res.json(rows);
    //closing the database connection.
    db.close(err => {
      if (err) {
        console.error(err.message);
      } else {
        console.log("Database connection is closed.");
      }
    });
  });
});

//making sure that the app is listening to our port(8058).
app.listen(port, () => {
  console.log(`App listening on ${port}`)
});
