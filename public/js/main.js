const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const mobileNavigation = document.getElementsByClassName("navigation--mobile")[0];
const moviePoster = document.getElementsByClassName("movie-card__poster");
const movieHeader = document.getElementsByClassName("movie-card__header");

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("is-active");
    mobileNavigation.classList.toggle("transformed");
});

for (let i = 0; i < moviePoster.length; i++) {
    moviePoster[i].addEventListener("mouseover", function(event){
        moviePoster[i].classList.toggle("blur");
        movieHeader[i].classList.toggle("transform");
    }); 
    moviePoster[i].addEventListener("mouseleave", function(event){
        moviePoster[i].classList.toggle("blur"); 
        movieHeader[i].classList.toggle("transform");
    });
}
for (let i = 0; i < moviePoster.length; i++) {
    moviePoster[i].addEventListener("click", (event) => {
        //Getting the ID of the clicked movie so the proper page can be rendered
        let movieId = event.target.id;
        localStorage.setItem("movieId", movieId);
        window.location.href = "movie_description.html";
    })      
};
