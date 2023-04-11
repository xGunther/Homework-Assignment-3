document.querySelector(".login-wrapper__form").addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const data = { username, password };
  
    try {
      const response = await fetch("/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        alert("Logged in!");
        window.location.href = ""; // redirects to x page after succesfull login
      } else {
        const message = await response.text();
        alert(message);
      }
    } catch (error) {
      alert("Error: " + error.message);
    }

  });
  