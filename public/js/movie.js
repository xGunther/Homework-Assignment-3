class Movie{
    constructor(title, genre, year, director, poster, trailer, description, movieLength){
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.director = director;
        this.poster = poster;
        this.trailer = trailer;
        this.description = description;
        this.movieLength = movieLength;
    }
}

function createElements(){
    const movieHeader = document.createElement("h1");
    const movieTrailer = document.createElement("iframe");
    const movieDescription = document.createElement("p");
    const movieData = document.createElement("dl");
    const dataDescription = document.createElement("dd");
    body.appendChild(movieHeader);
    body.appendChild(movieTrailer);
    body.appendChild(movieDescription);
    body.appendChild(movieData);
    body.appendChild(dataDescription);
    body.appendChild(movieHeader);
};