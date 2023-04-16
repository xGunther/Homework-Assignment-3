//this file will handle a correct or incorrect signup attempt
document.querySelector(".sign-up-wrapper__form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = document.getElementById("signup-name").value;
  const dateOfBirth = document.getElementById("signup-date-of-birth").value;
  const email = document.getElementById("signup-email").value;
  const creditCard = document.getElementById("signup-credit-card").value;
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  const data = { name, dateOfBirth, email, username, password };

  //sends a POST request with the user data and will check if its ok
  try { 
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    // if the response is ok then the user will be redirected to the login page
    if (response.ok) {
      alert("User registered!");
      window.location.href = "/login.html";
    } else {
      const message = await response.text();
      alert(message);
    } // otherwise an error will be displayed
  } catch (error) {
    alert("Error: " + error.message);
  } 

});
