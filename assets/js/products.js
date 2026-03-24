// O fetch => busca o arquivo
//.json() =>  transforma o json em objeto  
// data.roupasMasc => acessa o produto 
// forEach => percorre o produtos

let carregarProducts = document.querySelector('.carregarProducts');
let html = '';
fetch("/assets/data/produtos.json") 
.then( response => response.json()) 
.then( dados => (
    dados.roupasMasc.forEach( element => {
      html+= `
        <article class="mostrarProducts">
        <img src="${element.img}">
        <p class="title">${element.titulo} </p>
        <p>${element.preco}</p>
        <button> Ver Produto</button>
        </article>
      `;
        carregarProducts.innerHTML = html
        
}),carrossel()
)
);


