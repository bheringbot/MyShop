document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  firebase.auth().signInWithEmailAndPassword(email, senha)
  .then((userCredential) => {
    // Login bem-sucedido
    localStorage.setItem("autenticado", "sim");
    window.location.href = "admin/painel.html"; // Redireciona
  })
  .catch((error) => {
    alert("Erro: " + error.message);
  });