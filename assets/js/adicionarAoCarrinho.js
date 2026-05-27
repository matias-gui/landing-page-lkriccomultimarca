let carrinhoItems = JSON.parse(localStorage.getItem('carrinhoItems')) || [];

let buttonCarrinho = document.querySelector('.buttonCarrinho')

function adicionarProduto(item){
     if(!carrinhoItems) return;
     let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
     carrinho.push(item);
     localStorage.setItem('carrinho', JSON.stringify(carrinho));
     console.log('Produto adicionado ao carrinho:', item);
     console.log(carrinho)
  
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
     

