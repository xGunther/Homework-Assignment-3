const movieOptionIndex = document.getElementsByClassName("movie-option");


function fetchMovies() {
  fetch("movies-page-1")
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < movieOptionIndex.length; i++) {
        movieOptionIndex[i].textContent = data[i].movie_name;
      }
    })
    .catch(error => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
});