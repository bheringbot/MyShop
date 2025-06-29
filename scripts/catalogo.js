import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const container = document.getElementById('produtos');

async function carregarProdutos() {
  const snap = await getDocs(collection(db, "produtos"));
  container.innerHTML = "";

  snap.forEach(doc => {
    const p = doc.data();
    container.innerHTML += `
      <div class="bg-white rounded-xl p-4 shadow">
        <img src="${p.imagem}" class="w-full h-40 object-cover rounded-lg">
        <h2 class="text-lg font-bold mt-2">${p.nome}</h2>
        <p class="text-gray-600">${p.preco}</p>
        <a href="${p.link}" target="_blank" class="text-blue-500 underline">Comprar</a>
      </div>
    `;
  });
}

carregarProdutos();