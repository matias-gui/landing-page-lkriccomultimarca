let carNov = document.querySelector('.card-secao');
fetch('/assets/data/novidades.json')
.then(res => res.json())
.then(dados => {
    let html = '';
    dados.roupasNovidades.forEach(element => {
        html+= `
        <article class="carregarNovidades">
        <img src="${element.img}">
        <p class="title">${element.titulo} </p>
        <p>${element.preco}</p>
        <button class="verProdutoNovidades" data-id="${element.id}"> Ver Produto</button>
        </article>
       `
    });
    carNov.innerHTML = html
})

