const movieOptionIndex = document.getElementsByClassName("movie-option");
const movieTimeOneValue = document.getElementById("movie-time-one").value;
const movieTimeTwoValue = document.getElementById("movie-time-two").value;
const movieTimeOne = document.getElementById("movie-time-one");
const movieTimeTwo = document.getElementById("movie-time-two");
const movieOption = document.getElementsByClassName("movie-option");
const movieSelect = document.getElementById("movie");

function fetchMovies() {
  fetch("movies-page-1")
    .then(response => response.json())
    .then(data => {
      //put all the movies in the select element.
      for (let i = 0; i < movieOptionIndex.length; i++) {
        movieOptionIndex[i].textContent = data[i].movie_name;
      };        
    })
    .catch(error => {
      console.error(error);
    });
};

function fetchTimes(){
  fetch("movie-times")
    .then(response => response.json())
    .then(data => {
        //Get the selected movie option value
        selectedOption = movieSelect.value - 1;
        //Check which movie has been clicked and show the corresponding times for that movie.
            movieTimeOne.textContent = data[selectedOption].time_one;
            movieTimeTwo.textContent = data[selectedOption].time_two;
    })
  .catch(error => {
    console.error(error);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  fetchMovies();
});

movieSelect.addEventListener("change", (event) =>{
  fetchTimes();
});
