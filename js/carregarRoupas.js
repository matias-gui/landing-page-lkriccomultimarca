let carregarRoupas = document.querySelector('.carregarroupas')

function carregarRoupasMasc(){
fetch('/json/roupamasc.json') // Faz a aquisição do json
.then(response => response.json())
.then(converserJson => {
    try{
      converserJson.roupasMasc.forEach(element => {
        carregarRoupas.innerHTML +=

        `
        <article class = "containercarregarroupas">
            <img src="${element.img}" class = "carregarImg"/>
            <h3>${element.titulo}</h3>
        </article>
        `
        } 
    )} catch(erro){
        console.error(erro);
    }
    setInterval(carrossel, 4000);
});
};
function carregarRoupasFemin(){
    fetch('/json/roupamasc.json')
    .then(response2 => response2.json())
    .then(converserJson2 => {
        try{
            converserJson2.roupasFem.forEach(element => {
                carregarRoupas.innerHTML += `
                <article class="containercarregarroupas"> 
                <img src="${element.img}" class= "carregarImg"/>
                <h3>${element.titulo}</h3>
                </article>
                `
            })
        } catch (erro){
            console.error(erro)
        };
        setInterval(carrossel, 4000)
    });
};


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
