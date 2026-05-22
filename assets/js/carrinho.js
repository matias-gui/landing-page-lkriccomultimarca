const carrinho = document.querySelector('.iconeCarrinho')



carrinho.addEventListener('click', () =>{
    window.location.href = '/pages/carrinho.html';
    renderizarCarrinho();
    console.log('clicou')
})

function renderizarCarrinho(){
        // Recupera os itens do carrinho do localStorage
        let carrinhoItems = localStorage.getItem('carrinho');
        // Seleciona o container onde os itens do carrinho serão exibidos
        const carrinhoContainer = document.querySelector('.carrinho-container');
        carrinhoItems.forEach(element => {
            carrinhoContainer.innerHTML += `
            <div class="item-carrinho">
                <img src="${element.imagem}" alt="${element.nome}">
                <div class="detalhes-item">
                    <h3>${element.nome}</h3>
                    <p>R$ ${element.preco}</p>
                </div>
            </div>    `
            console.log(carrinhoItems)
        });
}


