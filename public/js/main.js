//this file handles events for the main movie pages and general elements, like the hamburger menu
const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const mobileNavigation = document.getElementsByClassName("navigation--mobile")[0];
const moviePoster = document.getElementsByClassName("movie-card__poster");
const movieHeader = document.getElementsByClassName("movie-card__header");
let i;

//adding classes to the hamburger menu to transform it to a cross when clicked.
hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("is-active");
    mobileNavigation.classList.toggle("transformed");
});

//addding a blur effect to each poster when entering with your mouse, if the mouse leaves the blur goes away.
for (let i = 0; i < moviePoster.length; i++) {
    moviePoster[i].addEventListener("mouseover", () => {
        moviePoster[i].classList.toggle("blur");
        movieHeader[i].classList.toggle("transform");
    }); 
    moviePoster[i].addEventListener("mouseleave", () => {
        moviePoster[i].classList.toggle("blur"); 
        movieHeader[i].classList.toggle("transform");
    });
}

//adding an evenlistener to each poster. When the poster is clicked the id of the poster is saved in the url of the movie description page so it can load the right movie.
for (let i = 0; i < moviePoster.length; i++) {
    moviePoster[i].addEventListener("click", (event) => {
        //Getting the ID of the clicked movie so the proper page can be rendered
        let movieId = event.target.id;
        window.location.href = "movie_description.html?id=" + movieId;
    });    
}
