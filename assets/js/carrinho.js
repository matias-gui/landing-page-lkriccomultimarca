const carrinho = document.querySelector('.iconeCarrinho')

carrinho.addEventListener('click', () =>{
    window.location.href = '/pages/carrinho.html';
})
 renderizarCarrinho();

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
                <img src="${element.img}" alt="${element.img}">
                <div class="detalhesItem">
                    <h3>${element.titulo}</h3>
                    <p>${element.preco}</p>
                </div>
                <div class="buttonsItens"> 
                    <button class="quantidade"> 1 un. </button>
                    <button class="removerItem"><img src="/assets/images/icons8-delete.svg"></button>
                </div>
            </div>    `
        });
}

