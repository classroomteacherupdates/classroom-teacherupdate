
function simulateLogin() {
  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;
  console.log("Captured Username:", username);
  console.log("Captured Password:", password);
  localStorage.setItem('teacher_login', JSON.stringify({ username, password }));
  console.log("Stored to localStorage:", localStorage.getItem("teacher_login"));
  window.location.href = "https://classroom.google.com/";
}

window.onload = function() {
  const role = new URLSearchParams(window.location.search).get('role');
  if (role === 'teacher') {
    document.getElementById("updateModal").style.display = "flex";
  }
};
