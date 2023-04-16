//this file handles the movie description page where the movie information can be seen. It displays the name, trailer, description and credits.
let movieIdPlusOne;
let i;
let movieId = new URL(window.location).searchParams.get("id");

//Fetching data that has been sent to the movie-description-page endpoint.
function fetchMovieDescriptions() {
    fetch("movie-description-pages")
        .then(response => response.json())
        .then(data => {
            //looping through the value j, if the value j is the same as the clicked movie the variable i will be lowered by one.
            for (let j = 0; j < 20; j++) {
                if (j == movieId) {
                    i = movieId - 1;
                    movieIdPlusOne = i + 1;
                    break;
                }
            }
            /*the variable i has been properly handled by the previous for loop to only perform the for loop for the movie that has been clicked on the homepage.
            Furthermore, DOM methods are used to render the right movie description page for the clicked movie.*/
            for (i; i < movieIdPlusOne; i++) {
                const movieData = [
                    {term: "Director", definition: data[i].director},
                    {term: "Actors", definition: data[i].actors},
                    {term: "Release Year", definition: data[i].release_year},
                    {term: "Genre", definition: data[i].genre},
                    {term: "Length", definition: data[i].length}
                ];
    
                const titleWrapper = document.createElement("div");
                const creditsWrapper = document.createElement("div");
                const descriptionWrapper = document.createElement("div");
                const movieTrailer = document.createElement("iframe");
                const movieHeader = document.createElement("h1");
                const buyTicketsButton = document.createElement("button");
                const creditsHeader = document.createElement("h2");
                const movieDataList = document.createElement("dl");
                const descriptionHeader = document.createElement("h2");
                const movieDescription = document.createElement("p");
                document.body.appendChild(movieTrailer);
                document.body.appendChild(titleWrapper); 
                document.body.appendChild(creditsWrapper); 
                document.body.appendChild(descriptionWrapper); 
                titleWrapper.appendChild(movieHeader);
                titleWrapper.appendChild(buyTicketsButton);
                creditsWrapper.appendChild(creditsHeader);
                creditsWrapper.appendChild(movieDataList);
                descriptionWrapper.appendChild(descriptionHeader);
                descriptionWrapper.appendChild(movieDescription);
        
                movieHeader.textContent = data[i].movie_name;
                creditsHeader.textContent = "Credits";
                movieTrailer.setAttribute("src", data[i].trailer);
                movieDescription.textContent = data[i].description;
                buyTicketsButton.textContent = "Buy Tickets!";
                buyTicketsButton.classList.add("buy-button");
                movieTrailer.classList.add("trailer");
                titleWrapper.classList.add("title-wrapper");
                movieHeader.classList.add("title-wrapper__heading");
                creditsWrapper.classList.add("credits-wrapper");
                movieDataList.classList.add("movie-details");
                creditsHeader.classList.add("credits-wrapper__heading");
                descriptionWrapper.classList.add("description-wrapper");
                descriptionHeader.classList.add("description-wrapper__heading");
                movieDescription.classList.add("movie-description");
                // Add event listener to the buyButton element
                buyTicketsButton.addEventListener("click", function(){
                window.location.href = "order.html";
                });
                
                movieData.forEach(data => {
                    const dataDescriptionTerm = document.createElement("dt");
                    dataDescriptionTerm.textContent = data.term;
        
                    const dataDescriptionDefinition = document.createElement("dd");
                    dataDescriptionDefinition.textContent = data.definition;
        
                    movieDataList.appendChild(dataDescriptionTerm);
                    movieDataList.appendChild(dataDescriptionDefinition);
                });
            }
        })
        .catch(err => {
            console.error(err);
        });
            
}
//fetching movie descriptions
document.addEventListener("DOMContentLoaded", () => {
        fetchMovieDescriptions();
});

