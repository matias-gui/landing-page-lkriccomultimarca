let button = document.querySelector('.icone-menu');
let menu = document.querySelector('.menu-navegacao');
let img = document.querySelector('.icone-menu ');

button.addEventListener('click', function() {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
        button.style.position = 'fixed';
        menu.style.position = 'fixed';
        button.style.left = '90%';
        button.style.top = '4%';
        img.src = 'image/menu_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
    } else {
        menu.style.display = 'flex';
        menu.style.left = '80%';
        button.style. position =' absolute';
        button.style.left = '60%';
        button.style.top = '1%';
        button.style.zIndex = '1000';
        img.src = 'image/close_24dp_000000_FILL0_wght400_GRAD0_opsz24.png';
    }   });