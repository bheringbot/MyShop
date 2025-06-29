import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const form = document.getElementById("formProduto");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const produto = {
    nome: form.nome.value,
    preco: form.preco.value,
    link: form.link.value,
    imagem: form.imagem.value,
  };

  await addDoc(collection(db, "produtos"), produto);
  alert("Produto cadastrado com sucesso!");
  form.reset();
});