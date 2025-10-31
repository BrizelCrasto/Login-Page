function validateForm() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please fill out all fields.");
    return false;
  }

  alert("Login successful (demo only)!");
  return false; // prevent page reload for demo
}
