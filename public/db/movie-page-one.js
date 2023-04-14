const moviePosterIndex = document.getElementsByClassName("movie-card__poster");
const movieHeaderIndex  = document.getElementsByClassName("movie-card__header");
const posterArray = Array.from(moviePosterIndex);

//Fetching data that has been sent to the movies-page-1 endpoint.
function fetchMovies() {
  fetch("movies-page-1")
    .then(response => response.json())
    .then(data => {
      //Using a for loop to add the poster, movie ID's and movie names to the ten posters on the first page.
      for (let i = 0; i < posterArray.length; i++) {
        moviePosterIndex[i].setAttribute("src", data[i].poster);
        moviePosterIndex[i].setAttribute("id", data[i].movie_id);
        moviePosterIndex[i].setAttribute("alt", "Poster of the movie " + data[i].movie_name);
        movieHeaderIndex[i].textContent = data[i].movie_name;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
});