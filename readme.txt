Group: Group 58
Authors: Kevin Hu(7548680), Ingmar janson(0010499), Gun Chen(2818531) 
Link to webpage: http://webtech.science.uu.nl/group58/
Website and file structure explanation:

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
   password: hG2$xN9

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
    total_cost INTEGER NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(user_id),
    FOREIGN KEY(movie_id) REFERENCES movies(movie_id)
    );
