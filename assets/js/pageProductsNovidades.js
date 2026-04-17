let cardNov = document.querySelectorAll('.card-nov')

const params = new URLSearchParams(window.location.search)

const id = params.get('id')

const produto = cardNov.find(element => element.id === id)
let imgProduto = document.querySelector('.imgProduto')
let nomeProduto = document.querySelector('.nomeProduto')
let precoProduto = document.querySelector('.precoProduto')
let descricaoProduto = document.querySelector('.descricaoProduto')
imgProduto.src = `${produto.img}`
imgProduto.alt = `${produto.nome}`
nomeProduto.innerHTML = `${produto.titulo}`
precoProduto.innerHTML = `${produto.preco}`