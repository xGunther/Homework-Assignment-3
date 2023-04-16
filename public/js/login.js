//this file will handle a correct or incorrect login attempt
document.querySelector(".login-wrapper__form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const data = { username, password };
  
    //sends a POST request with the user credentials and will check if its good
    try { 
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      //if its good the user will be directed to the user-information page
      if (response.ok) {
        alert("Logged in!");
        window.location.href = "/user-information.html"; 
        const message = await response.text();
        alert(message);
      } // otherwise an error will be displayed
    } catch (error) {
      alert("Error: " + error.message);
    }

    
  });
  