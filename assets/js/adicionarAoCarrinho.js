let carrinhoItems = JSON.parse(localStorage.getItem('carrinhoItems')) || [];

let buttonCarrinho = document.querySelector('.buttonCarrinho')

function adicionarProduto(item){
     if(!carrinhoItems) return;
     let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
     // Verifica se o carrinho está vazio, se estiver, adiciona o produto diretamente
     if(carrinho.length === 0){
          carrinho.push(item);
          console.log(item);
          localStorage.setItem('carrinho', JSON.stringify(carrinho));
          console.log('Produto adicionado ao carrinho:', item);
     }else{
          // Verifica se o produto já existe no carrinho, se existir, exibe um alerta, caso contrário, adiciona o produto ao carrinho
          const produtoExistente = carrinho.find(produto => produto.id === item.id);
          if(produtoExistente){
           const quantidade = document.querySelector('.quantidade');
           console.log('Produto já existe no carrinho:', item);    
          }else{
               carrinho.push(item);
               localStorage.setItem('carrinho', JSON.stringify(carrinho));
               console.log('Produto adicionado ao carrinho:', item);
          }
     }
  
}


if (buttonCarrinho){     
     buttonCarrinho.addEventListener('click', async () =>{
     const params = new URLSearchParams(window.location.search);
     const response = await fetch('/assets/data/produtos.json')
     const dados = await response.json()

     const todosProdutos = [
          ...dados.roupasMasc,
          ...dados.roupasFem,
          ...dados.roupasNovidades
     ]
     const id = Number(params.get('id'));
     const produto = todosProdutos.find((p) => p.id == id)
     adicionarProduto(produto);
     // Cria uma div para carregar a notificação
     const overlay = document.createElement('div');
     overlay.classList.add('overlay');
     // Cria uma section 
     const sectionNotificacao = document.createElement('section');
     // Adiciona a classe notificacao para estilizar a notificação
     sectionNotificacao.classList.add('notificacao');  
     // Adiciona a mensagem que será exibida na notificação
     sectionNotificacao.innerHTML = `
     <p> Produto adicionado ao carrinho com sucesso!</p>`;
     // Adiciona a section dentro da div de overlay
     overlay.appendChild(sectionNotificacao);
     // Adiciona a div de overlay ao body para exibir a notificação
     document.body.appendChild(overlay);

     // Remove o a notificação após 1 segundo
     setTimeout(()=>{
          document.body.removeChild(overlay);
     }, 3000)

})}
     

