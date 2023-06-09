const express = require("express");
const app = express();
const port = 8058;
const sqlite3 = require("sqlite3").verbose();
const morgan = require("morgan");
const session = require("express-session");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// setting up the session
app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }, // 24 hours
  })
);

//making a logger that will log the req method, req url, status, content-length, res time and date.
app.use(morgan(":method :url :status :res[content-length] - :response-time ms :date[web]"));

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
app.get("/movie-times", (req, res) => {
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


// POST request to handle user login
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // opens db connection
  const db = new sqlite3.Database("public/db/movie_theater.sqlite", (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
  });

  // query to look for the username from users table
  db.get("SELECT * FROM users WHERE username = ?", [username], async (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }

    // if the user is not found or the password is incorrect it will return an error
    if (!row || row.password !== password) {
      res.status(401).send("Incorrect username or password");
    } else {
      // stores the user information in the session
      req.session.user = {
        id: row.user_id,
        username: row.username,
        email: row.email_address,
        name: row.full_name,
        dateOfBirth: row.date_of_birth,
        creditCard: row.credit_card,
      };
      res.redirect("/user-information.html");
    }
    //closes the db connection
    db.close();
  });
});

// GET request to handle user logout
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal server error");
    } else {
      res.send("Logged out");
    }
  });
});

// POST request to handle user signup
app.post("/signup", async (req, res) => {
  const { name, dateOfBirth, email, username, password } = req.body;

  // opens a db connection
  const db = new sqlite3.Database("public/db/movie_theater.sqlite", (err) => {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }
  });

  // inserts the new user into the database
  const query = `
    INSERT INTO users (full_name, date_of_birth, email_address, username, password)
    VALUES (?, ?, ?, ?, ?)
  `;
  db.run(query, [name, dateOfBirth, email, username, password], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).send("Internal server error");
      return;
    }

    // redirects to the login page 
    res.redirect("/login.html?registered=true");
    //closes the db connection
    db.close();
  });
});

// function to check if the user is logged in
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
}

//making sure that the app is listening to our port(8058).
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
