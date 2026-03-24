
const buttonAnterior = document.querySelector('.buttonAnterior');
const buttonProximo = document.querySelector('.buttonProximo');


function carrossel(){
  const mostrarProducts = document.querySelectorAll('.mostrarProducts');

  if(mostrarProducts.length > 0){
     mostrarProducts[1].classList.add('ativo');

    let ativo = document.querySelectorAll('.ativo')
    console.log(ativo)
  }
   
};


let index = 0;

// Quando o button proximo é clicado, acontece um evento.
 buttonProximo.addEventListener('click', ()=> {
    if(index >= 5){
        index = 0;
    }
    index++
    console.log(index)
})

// Quando o button anterior é clicado, acontece outro evento.
buttonAnterior.addEventListener('click', ()=> {
    if(index <= 0){
        index = 5;
    }
    index--
    console.log(index)
})

