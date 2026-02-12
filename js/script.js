let main = document.querySelector('.container-corpo');
let buttonMenu = document.querySelector('.icone-menu');
let buttonClose = document.querySelector('.icone-fechar');
let menu = document.querySelector('.menu-navegacao');

buttonMenu.addEventListener('click', function () {
    menu.style.position = 'fixed';
    menu.style.top = '0';
    menu.style.right = '0';
    menu.style.transition = '0.8s ease-in-out';

    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '0';
    buttonMenu.style.transition = '1.2s ease-in-out';
});

buttonClose.addEventListener('click', function () {
    menu.style.right = '-41%';
    menu.style.transition = '0.8s ease-in-out';
    main.style.opacity = '1';
    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '1';
    buttonMenu.style.transition = '1.2s ease-in-out';

})

let buttonnovidades = document.querySelector('.buttonnovidades')
let produtoNovidades = document.querySelector("#card-novidades")

buttonnovidades.addEventListener,produtoNovidades.addEventListener('click' , () => {
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




