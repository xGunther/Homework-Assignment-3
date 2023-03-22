class Movie{
    constructor(title, genre, year, director, poster, trailer, description){
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.director = director;
        this.poster = poster;
        this.trailer = trailer;
        this.description = description;
    }
}

function createElements(){
    const movieHeader = document.createElement("h1");
    const trailer = document.createElement("iframe");
    const paragraphs = document.createElement("p");
    document.appendChild(movieHeader)
    document.createElement("");
};