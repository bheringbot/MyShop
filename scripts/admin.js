document.getElementById("formProduto").addEventListener("submit", async (e) => {
  e.preventDefault();

  const form = e.target;
  const produto = {
    nome: form.nome.value,
    preco: form.preco.value,
    imagem: form.imagem.value,
    link: form.link.value,
  };

  await db.collection("produtos").add(produto);
  alert("Produto adicionado com sucesso!");
  form.reset();
});