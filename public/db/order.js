const movieOptionIndex = document.getElementsByClassName("movie-option");
const movieTimeOne = document.getElementById("movie-time-one");
const movieTimeTwo = document.getElementById("movie-time-two");
const movieSelect = document.getElementById("movie");

function fetchMovies() {
  fetch("movies-page-1")
    .then(response => response.json())
    .then(data => {
      //put all the movies in the select element.
      for (let i = 0; i < movieOptionIndex.length; i++) {
        movieOptionIndex[i].textContent = data[i].movie_name;
      }       
    })
    .catch(error => {
      console.error(error);
    });
}

function fetchTimes(){
  fetch("movie-times")
    .then(response => response.json())
    .then(data => {
        //Get the selected movie option value
        let selectedOption = movieSelect.value - 1;
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

movieSelect.addEventListener("change", () => {
  fetchTimes();
});

document.getElementById("sign-up-wrapper__form").addEventListener("confirm-button", async (event) => {
  event.preventDefault();

  const ticketAmount = document.getElementById("ticket-quantity").value;
  const movie = document.getElementById("movie-option").value;

  const data = { ticketAmount, movie };

  try {
    const response = await fetch("/order", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Succesfully ordered!");
      window.location.href = "/dashboard.html";
    } else {
      const message = await response.text();
      alert(message);
    }
  } catch (error) {
    alert("Error: " + error.message);
  } 

});