
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  if (email === "admin@admin.com" && senha === "123456") {
    alert("Login bem-sucedido!");
    // Aqui pode redirecionar para dashboard.html ou painel real
  } else {
    alert("Credenciais inválidas");
  }
});
