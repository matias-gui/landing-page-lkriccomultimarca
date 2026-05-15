let carrinhoItems = JSON.parse(localStorage.getItem('carrinhoItems')) || [];

let buttonCarrinho = document.querySelector('.buttonCarrinho')

function adicionarProduto(item){
     if(!carrinhoItems) return;
     let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
     carrinho.push(item);
     localStorage.setItem('carrinho', JSON.stringify(carrinho));
     console.log('Produto adicionado ao carrinho:', item);
    // window.location.href = '/pages/carrinho.html'
  
}


if (buttonCarrinho){     
     buttonCarrinho.addEventListener('click', async () =>{
     const params = new URLSearchParams(window.location.search);
     const response = await fetch('/assets/data/produtos.json')
     const dados = await response.json()

     const todosProdutos = [
          ...dados.roupasMasc,
          ...dados.roupasFem
     ]
     const id = Number(params.get('id'));
     const produto = todosProdutos.find((p) => p.id == id)
     adicionarProduto(produto);
     })
}
     

