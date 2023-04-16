Group: Group 58
Authors: Kevin Hu(7548680), Ingmar janson(0010499), Gun Chen(2818531) 
Link to webpage: http://webtech.science.uu.nl/group58/
Website explanation:
The user starts at the index.html page where you can view the movies that are being played at our movie theater, when hovering over the movie posters you will see the headings with the movie name. On mobile this header and a blur effect is not visible as we made a different design for mobile. From this index page you can login or go to the second page of movies. If you want to login you can enter your username and password. If you don't have an account you can choose to signup. After signing up you should be redirected to the login page. After loging in you are redirected to the user information page, which does not display something at this moment. When clicking on a movie on the index.html page you are being sent to the movie description of that page where you can see the name, trailer, description and credits. Furthermore you can click on buy tickets. Now that you're at the order page you can select a movie, ticket quantity, date and time. This page sadly doesn't work, but the rendering of the times out of the database does.

File structure explanation:
The application consists of a few folders. Firstly we have the html folder, where all the html files are located. Secondly we have the public folder. The JS, DB, CSS and images files are located in this folder. Lastly we have the app.js, this js file holds all the funtionality for the serverside of our application.

Database explanation:
Our database consists of three tables: the movies table, the users table and the orders table. The columns that have been used can be seen at the bottom of the file. 


Registered users:
1. username: CosmicCharm 
   password: 4wJ8y#sT
2. username: PixelPenguin 
   password: bE3@xvK9
3. username: StarrySkyler
   password: zT7!uJm4
4. username: ElectricEmu
   password: fC6#bPd5
5. username: BubbleBee
   password: G1%312HD!

We used the following statements to create our sqlite database:

    CREATE TABLE movies(
    movie_id INTEGER PRIMARY KEY, 
    movie_name TEXT NOT NULL, 
    release_year INTEGER NOT NULL,
    director TEXT NOT NULL,
    genre TEXT NOT NULL,
    description TEXT NOT NULL,
    poster TEXT NOT NULL,
    actors TEXT NOT NULL,
    trailer TEXT NOT NULL,
    length TEXT NOT NULL,
    time_one TEXT NOT NULL,
    time_two TEXT NOT NULL
    );

    CREATE TABLE users(
    user_id INTEGER PRIMARY KEY, 
    username TEXT NOT NULL, 
    email_address TEXT NOT NULL, 
    password TEXT NOT NULL, 
    date_of_birth TEXT NOT NULL,
    full_name TEXT NOT NULL,
    credit_card INTEGER NOT NULL
    );

    CREATE TABLE orders(
    order_id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    movie_id INTEGER NOT NULL,
    ticket_quantity INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(movie_id) REFERENCES movies(movie_id)
    );
