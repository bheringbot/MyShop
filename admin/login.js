document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // admin/login.js
firebase.auth().signInWithEmailAndPassword(email, senha)
  .then(() => {
    localStorage.setItem("autenticado", "sim");
    // Você está em admin/, portanto:
    window.location.href = "painel.html";
  })
  .catch((err) => alert("Erro: " + err.message));