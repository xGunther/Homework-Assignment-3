document.querySelector(".sign-up-wrapper__form").addEventListener("submit", async (event) => {
  event.preventDefault();

  const firstName = document.getElementById("signup-first-name").value;
  const lastName = document.getElementById("signup-last-name").value;
  const dateOfBirth = document.getElementById("signup-date-of-birth").value;
  const email = document.getElementById("signup-email").value;
  const username = document.getElementById("signup-username").value;
  const password = document.getElementById("signup-password").value;

  const data = { firstName, lastName, dateOfBirth, email, username, password };

  try {
    const response = await fetch("/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("User registered!");
      window.location.href = "/dashboard.html";
    } else {
      const message = await response.text();
      alert(message);
    }
  } catch (error) {
    alert("Error: " + error.message);
  } 

});
