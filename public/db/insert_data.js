const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('public/db/movie_theater.sqlite');

// define the data to be inserted
const username = 'BubbleBee';
const password = 'G1%312HD!';

// SQL statement to insert the data
const sql = `ALTER TABLE orders DROP COLUMN total_cost `;

// Execute the statement with the data as parameters
db.run(sql, (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Data inserted successfully');
});

// Close the database connection
db.close();