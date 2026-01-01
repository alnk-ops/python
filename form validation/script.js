function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  document.getElementById('usernameError').innerHTML = "";
  document.getElementById('passwordError').innerHTML = "";
  if (username === "") {
    document.getElementById('usernameError').innerHTML = "Username is required.";
    return false;
  }
  alert("Form submitted successfully!");
    return true;
}