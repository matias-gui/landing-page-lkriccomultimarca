let main = document.querySelector('.container-corpo');
let buttonMenu = document.querySelector('.icone-menu');
let buttonClose = document.querySelector('.icone-fechar');
let menu = document.querySelector('.menu-navegacao');

// Menu
if(buttonClose) {
buttonMenu.addEventListener('click',  () => {
    menu.style.clipPath = 'circle(160% at 100% 0%)';
    menu.style.transition = '1s all';



    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '0';
    buttonMenu.style.transition = '1.2s ease-in-out';
});
}
if(buttonClose){
buttonClose.addEventListener('click', () => {
    menu.style.clipPath = 'circle(0% at 100% 0%)';
    main.style.transition = '0.8s ease-in-out';
    buttonMenu.style.opacity = '1';
    buttonMenu.style.transition = '1.2s ease-in-out';

});
}
// Carregar Pagina Novidades
let buttonnovidades = document.querySelector('.buttonnovidades');
if(buttonnovidades){
buttonnovidades.addEventListener('click', () => {
    window.location.href = 'pages/roupasnovidades.html'
});}

// Carregar Roupas Masculina ou Feminina
let buttonmasc = document.querySelector('#buttonmasc');
let buttonfemin = document.querySelector('#buttonfemin');
// Verifica se o botão existe antes de chamar o evento de clique
if(buttonmasc){
buttonmasc.addEventListener('click', () => {
    
    if(buttonmasc.classList.contains("active")) return
     buttonfemin.classList.remove("active");
    buttonmasc.classList.add("active")

    carregarMasc()
   
   
});}
// Verifica se o botão existe antes de chamar o evento de clique
if(buttonfemin){
buttonfemin.addEventListener('click', () => {
    if(buttonfemin.classList.contains("active")) return
    buttonmasc.classList.remove("active");
    buttonfemin.classList.add("active");
   
    carregarFem()
});}
// Só vai carregar a função se o botão existir
if(buttonmasc){
     carregarMasc()
}
 