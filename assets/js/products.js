// O fetch => busca o arquivo
//.json() =>  transforma o json em objeto  
// data.roupasMasc => acessa o produto 
// forEach => percorre o produtos

let carregarProducts = document.querySelector('.carregarProducts');

function carregarMasc() {
  let html = '';

  fetch("/assets/data/produtos.json")
    .then(response => response.json())
    .then(dados => {
      dados.roupasMasc.forEach(element => {
        html += `
        <article class="mostrarProducts">
        <img src="${element.img}">
        <p class="title">${element.titulo} </p>
        <p>${element.preco}</p>
        <button class="verProduto" data-id="${element.id}"> Ver Produto</button>
        </article>
      `;
      });
      carregarProducts.innerHTML = html;
      carrossel();
});
};


function carregarFem() {
  let index = '';
  fetch("/assets/data/produtos.json")
    .then(response => response.json())
    .then(dados => {
      dados.roupasFem.forEach(element => {
        index += `
        <article class="mostrarProducts">
        <img src="${element.img}">
        <p class="title">${element.titulo} </p>
        <p>${element.preco}</p>
        <button class="verProduto" data-id="${element.id}"> Ver Produto</button>
        </article>
      `;
       
      });
       carregarProducts.innerHTML = index;
       carrossel();
});

}

