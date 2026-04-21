// //window.location.search => pega tudo que vem depois do ? na URL
// //new URLSearchParams() => ferramenta pra ler dados da URL
const params = new URLSearchParams(window.location.search);

fetch('/assets/data/produtos.json')
.then(res => res.json())
.then( dados => {
  const id = Number(params.get('id'));

   const produto = dados.roupasMasc.find( element => element.id == id);
   
   let imgProduto = document.querySelector('.imgProduto')
   let nomeProduto = document.querySelector('.nomeProduto')
   let precoProduto = document.querySelector('.precoProduto')
   let descricaoProduto = document.querySelector('.descricaoProduto')
   imgProduto.src = `${produto.img}`
   imgProduto.alt = `${produto.nome}`
   nomeProduto.innerHTML = `${produto.titulo}`
   precoProduto.innerHTML = `${produto.preco}`
   descricaoProduto.innerHTML = `${produto.descricao}`
  
})