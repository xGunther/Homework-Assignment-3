const moviePosterIndex2 = document.getElementsByClassName("movie-card__poster");
const movieHeaderIndex2  = document.getElementsByClassName("movie-card__header");
const posterArray = Array.from(moviePosterIndex2);
const headerArray = Array.from(movieHeaderIndex2);

function fetchMovies() {
  fetch("/movies-page-2")
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < posterArray.length; i++) {
        moviePosterIndex2[i].setAttribute('src', data[i].poster);
        movieHeaderIndex2[i].textContent = data[i].movie_name;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
});