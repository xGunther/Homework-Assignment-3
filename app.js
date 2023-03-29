const express = require("express");
const app = express();
const port = 8058;
const mime = require("mime");
const sqlite3 = require("sqlite3").verbose();


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
  db.all("SELECT movie_name, poster FROM movies", (err, rows) => {
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
  db.all("SELECT movie_name, poster FROM movies LIMIT 10 OFFSET 10", (err, rows) => {
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

