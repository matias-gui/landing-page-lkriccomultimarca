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
let carregarroupas = document.querySelector('.carregarroupas')
buttonmasc.addEventListener('click', () => {
     buttonmasc.classList.add("active")
     buttonfemin.classList.remove("active")
   
})

buttonfemin.addEventListener('click', () => {
   buttonmasc.classList.remove("active")
   buttonfemin.classList.add("active")
   
})

let backgroundNovidades = document.querySelector('#card-novidades')
let url1 = '/image/keagan-henman-XYtuOYfIg_M-unsplash.jpg'
let url2 = '/image/toa-heftiba-fPWQGM8quQQ-unsplash.jpg'
let atual = true
function trocarBackground(){
         if(atual){
        backgroundNovidades.style.background = `url(${url1})`}
        else{
         backgroundNovidades.style.background = `url(${url2})`
    }
        atual =!atual 
        backgroundNovidades.style.backgroundSize = 'cover'
        backgroundNovidades.style.animation = 'trocarBackground 2s infinite';
}
setInterval((
    trocarBackground
),5000)






