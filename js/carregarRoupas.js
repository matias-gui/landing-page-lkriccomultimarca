let carregarroupasmasc = document.querySelector('.carregarroupasMasc')

fetch('/json/roupamasc.json') // Faz a aquisição do json
.then(response => response.json())
.then(converserJson => {
    try{
      converserJson.roupasMasc.forEach(element => {
        carregarroupasMasc.innerHTML +=

        `
        <article class = "containercarregarroupas">
            <img src="${element.img}" class = "carregarImg"/>
            <h3 class="titulocarregarroupas">${element.titulo}</h3>
        </article>
        `
        } 
    )} catch(erro){
        console.error(erro);
    }
    setInterval(carrossel, 4000);
});
