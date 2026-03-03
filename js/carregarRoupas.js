let carregarRoupas = document.querySelector('.carregarroupas')
fetch('/json/roupamasc.json') // Faz a aquisição do json
.then(response => response.json())
.then(converserJson => {
    try{
      converserJson.roupasMasc.forEach(element => {
        carregarRoupas.innerHTML += `
        <article class = "containercarregarroupas">
            <img src = "${element.img}">
            <h3>${element.titulo}</h3>
            <p>${element.preco}</p>
            <p>${element.cor}</p>
        </article>
        `
        } 
    )} catch(erro){
        console.error(erro);
    }
    setInterval(carrossel, 3000);
});

let count = 0;
function carrossel(){
 let containercarregarroupas = document.querySelectorAll(".containercarregarroupas");

    if(count >= containercarregarroupas.length -1){
        count = 0;
    }else{
        count++ ;
    }

    moverCarrossel();
}

function moverCarrossel(){
    carregarRoupas.style.transform =  `translateX(-${count * 100}%)`;
}
