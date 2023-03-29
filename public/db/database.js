const moviePosterIndex = document.getElementsByClassName("movie-card__poster");
const movieHeaderIndex  = document.getElementsByClassName("movie-card__header");
const posterArray = Array.from(moviePosterIndex);
const headerArray = Array.from(movieHeaderIndex);

function fetchMovies() {
  fetch("movies-page-1")
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < posterArray.length; i++) {
        moviePosterIndex[i].setAttribute('src', data[i].poster);
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