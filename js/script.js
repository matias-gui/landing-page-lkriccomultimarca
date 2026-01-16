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

const cardNov = document.querySelector('.card-nov');
let indexAtual = 0;
function mostrarNovidades(index) {
    cardNov.forEach((card, i) => {
        card.style.display = i === index ?  'block' : 'none';
    });
}





const url = 'https://fakestoreapi.com/products?limit=6';
