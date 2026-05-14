let carrinhoItems = JSON.parse(localStorage.getItem('carrinhoItems')) || [];

let buttonCarrinho = document.querySelector('.buttonCarrinho')

function adicionarProduto(item){
     if(!carrinho) return;
     carrinhoItems.push(item);
     localStorage.setItem('carrinho', JSON.stringify(carrinhoItems));
     console.log('Produto adicionado ao carrinho:', item);
  
}

if (buttonCarrinho){     
     buttonCarrinho.addEventListener('click', () =>{
     const params = new URLSearchParams(window.location.search);
     const id = Number(params.get('id'));
     adicionarProduto(id) 
     })
}


//buttonCarrinho.addEventListener('click', () => {
  //   window.location.href = '/pages/carrinho.html'
//})

