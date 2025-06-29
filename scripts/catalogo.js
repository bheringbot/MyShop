// scripts/catalogo.js
const container = document.getElementById("produtos");

db.collection("produtos").get()
  .then((snapshot) => {
    container.innerHTML = "";
    snapshot.forEach((doc) => {
      const p = doc.data();
      container.innerHTML += `
        <div class="card">
          <img src="${p.imagem}" alt="${p.nome}" style="width:100%">
          <h2>${p.nome}</h2>
          <p>R$ ${p.preco}</p>
          <a href="${p.link}" target="_blank">Comprar</a>
        </div>
      `;
    });
  })
  .catch((erro) => console.error("Erro ao carregar produtos:", erro));