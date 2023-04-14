const moviePosterIndex2 = document.getElementsByClassName("movie-card__poster");
const movieHeaderIndex2  = document.getElementsByClassName("movie-card__header");
const posterArray = Array.from(moviePosterIndex2);

//Fetching data that has been sent to the movies-page-2 endpoint.
function fetchMovies() {
  fetch("movies-page-2")
    .then(response => response.json())
    .then(data => {
      //Using a for loop to add the poster, movie ID's and movie names to the ten posters on the second page.
      for (let i = 0; i < posterArray.length; i++) {
        moviePosterIndex2[i].setAttribute("src", data[i].poster);
        moviePosterIndex2[i].setAttribute("id", data[i].movie_id);
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