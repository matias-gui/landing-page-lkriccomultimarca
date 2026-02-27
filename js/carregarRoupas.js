let carregarRoupas = document.querySelector('.carregarroupas')

fetch('/json/roupamasc.json') // Faz a aquisição do json
.then(response => response.json())
.then(converserJson => {
    converserJson.roupasMasc.forEach(element => {
        carregarRoupas.innerHTML += `
        <article class="containercarregarroupas">
        <img src="${element.img}" alt="" class ="carregarroupasimg"/>
        <h2 class="carregarroupastitulo">${element.titulo}</h2>
        <p class="carregarroupapreco">${element.preco}</p>
        <p class="carregarroupacor">${element.cor}</p>
        <article/>
        `
    });
})
