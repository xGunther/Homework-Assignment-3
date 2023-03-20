const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
const mobileNavigation = document.getElementsByClassName("navigation--mobile")[0];
const loginLink = document.getElementsByClassName("login-link")[0];
const loginIcon = document.getElementsByClassName("login-icon")[0];
const loginScreen = document.getElementsByClassName("login-wrapper")[0];
const signUpLink = document.getElementsByClassName("sign-up-link")[0];
const signUpScreen = document.getElementsByClassName("sign-up-wrapper")[0];

hamburgerMenu.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("is-active");
    mobileNavigation.classList.toggle("transformed");
});

loginLink.addEventListener("click", function(event){
    loginLink.classList.toggle("is-active");
    loginScreen.classList.toggle("transformed");
    event.preventDefault();
});

loginIcon.addEventListener("click", function(){
    loginIcon.classList.toggle("is-active");
    loginScreen.classList.toggle("transformed");
});

signUpLink.addEventListener("click", function(event){
    signUpLink.classList.toggle("is-active");
    signUpScreen.classList.toggle("transformed");
    event.preventDefault();
});
