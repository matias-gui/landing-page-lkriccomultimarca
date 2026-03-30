//window.location.search => pega tudo que vem depois do ? na URL
//new URLSearchParams() => ferramenta pra ler dados da URL
const params = new URLSearchParams(window.location.search);
console.log(params)
    const id = params.get('id');

fetch('/assets/data/produtos.json')
.then(res => res.json())
.then( dados => {
   const produto = dados.roupasMasc.find( element => element.id == id);
   let imgProduto = document.querySelector('.imgProduto')
   let nomeProduto = document.querySelector('.nomeProduto')
   let precoProduto = document.querySelector('.precoProduto')
   let descricaoProduto = document.querySelector('.descricaoProduto')
   imgProduto.innerHTML = `<img src="${produto.img}">`
   nomeProduto.innerHTML = `${produto.titulo}`
   precoProduto.innerHTML = `${produto.preco}`


   console.log(produto)
})