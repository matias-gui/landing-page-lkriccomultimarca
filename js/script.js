let main = document.querySelector('.container-corpo');
let buttonMenu = document.querySelector('.icone-menu');
let buttonClose = document.querySelector('.icone-fechar');
let menu = document.querySelector('.menu-navegacao');
let body = document.body

buttonMenu.addEventListener('click', function () {
    menu.style.position = 'fixed';
    menu.style.right = '0';
    menu.style.transition = '0.8s ease-in-out';
    menu.style.width = '100%';
    body.style.overflow = 'hidden';


    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '0';
    buttonMenu.style.transition = '1.2s ease-in-out';
});

buttonClose.addEventListener('click', function () {
    body.style.overflowY = 'auto';
    menu.style.right = '-100%';
    menu.style.transition = '0.8s ease-in-out';
    main.style.opacity = '1';
    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '1';
    buttonMenu.style.transition = '1.2s ease-in-out';

});

let buttonnovidades = document.querySelector('.buttonnovidades')
buttonnovidades.addEventListener('click' , () => {
    window.location.href = '/roupasnovidades.html'
})

// Texto que vai ser digitado na tela
const text = "Confira as Novidades"
let digitartext = document.querySelector('.digitartext')
let index = 0
function escreverh2 (){
    if(index < text.length){
        digitartext.innerHTML += text.charAt(index);
        index++;
        setTimeout (escreverh2, 200);
    }else{
        setTimeout(limparh2, 1000)
    }
}

function limparh2(){
    const textAtual = digitartext.innerHTML
    if(textAtual.length > 0){
        digitartext.innerHTML = textAtual.slice(0, -1);
           setTimeout(limparh2, 100)
    }else if(textAtual.length === 0){
        index = 0
        setTimeout(escreverh2, 200)
    }

}
escreverh2()



let buttonmasc = document.querySelector('#buttonmasc')
let buttonfemin = document.querySelector('#buttonfemin')
let carregarroupasMasc = document.querySelector('.carregarroupasMasc')
buttonmasc.addEventListener('click', () => {    
     buttonmasc.classList.add("active");
     buttonfemin.classList.remove("active");
})

buttonfemin.addEventListener('click', () => {
   buttonmasc.classList.remove("active");
   buttonfemin.classList.add("active");

   
})






