//closest =>  sobe no DOM até achar o elemento pai 
//dataset => é uma forma de pegar atributos personalizados do HTML usando JavaScript.
document.addEventListener('click', (e) => {
    //e.target => é o elemento que foi clicado
    //verifica se o elemento clicado, tem a class verProduto
    const btn = e.target.closest('.verProduto')
    if(btn){
       const id = btn.dataset.id
       //redireciona o usuário para outra página
       window.location.href = `/pages/products.html?id=${id}`
        
    }
})