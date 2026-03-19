let main = document.querySelector('.container-corpo');
let buttonMenu = document.querySelector('.icone-menu');
let buttonClose = document.querySelector('.icone-fechar');
let menu = document.querySelector('.menu-navegacao');

// Menu
buttonMenu.addEventListener('click', function () {
    menu.style.clipPath = 'circle(160% at 100% 0%)';
    menu.style.transition = '1s all';
    


    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '0';
    buttonMenu.style.transition = '1.2s ease-in-out';
});

buttonClose.addEventListener('click', function () {
    menu.style.clipPath ='circle(0% at 100% 0%)';
    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '1';
    buttonMenu.style.transition = '1.2s ease-in-out';

});

// Carregar Pagina Novidades
let buttonnovidades = document.querySelector('.buttonnovidades');
buttonnovidades.addEventListener('click' , () => {
    window.location.href = '/pages/roupasnovidades.html'
});

// Carregar Roupas Masculina ou Feminina
let buttonmasc = document.querySelector('#buttonmasc');
let buttonfemin = document.querySelector('#buttonfemin');
buttonmasc.addEventListener('click', () => {    
     buttonmasc.classList.add("active");
     buttonfemin.classList.remove("active");
});
buttonfemin.addEventListener('click', () => {
   buttonmasc.classList.remove("active");
   buttonfemin.classList.add("active");
});
