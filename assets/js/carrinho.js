const carrinho = document.querySelector('.iconeCarrinho')

carrinho.addEventListener('click', () =>{
      renderizarCarrinho()
})

function renderizarCarrinho(){
        // Recupera os itens do carrinho do localStorage
        let carrinhoItems = localStorage.getItem('carrinho');
        carrinhoItems = JSON.parse(carrinhoItems) || [];
        // Seleciona o container onde os itens do carrinho serão exibidos
        console.log(carrinhoItems)
        const carrinhoContainer = document.querySelector('.pageCarrinho');
        carrinhoItems.forEach(element => {
            carrinhoContainer.innerHTML += `
            <div class="item-carrinho">
                <img src="${element.imagem}" alt="${element.nome}">
                <div class="detalhes-item">
                    <h3>${element.nome}</h3>
                    <p>R$ ${element.preco}</p>
                </div>
            </div>    `
        });
}

