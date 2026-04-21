
const params = new URLSearchParams(window.location.search);

fetch('/assets/data/novidades.json')
.then(res => res.json())
.then( dados => {
  const id = Number(params.get('id'));

   const produtoNov = dados.roupasNovidades.find( element => element.id === id);
   
   let imgProduto = document.querySelector('.imgProdutoNov')
   let nomeProduto = document.querySelector('.nomeProdutoNov')
   let precoProduto = document.querySelector('.precoProdutoNov')
   let descricaoProduto = document.querySelector('.descricaoProdutoNov')
   imgProduto.src = `${produtoNov.img}`
   imgProduto.alt = `${produtoNov.nome}`
   nomeProduto.innerHTML = `${produtoNov.titulo}`
   precoProduto.innerHTML = `${produtoNov.preco}`
   descricaoProduto.innerHTML = `${produtoNov.descricao}`
})



