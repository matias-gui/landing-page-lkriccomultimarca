const url = "https://fakestoreapi.com/products/category/men's%20clothing"
let carregarRoupasmasc = document.querySelector('.carregarRoupasmasc')
async function chamarApi() {
    const res = await fetch(url);

    

    if(res.status === 200){
        const apires = await res.json();
        apires.forEach(element  => {
            carregarRoupasmasc.innerHTML += `
             <article class="cardroupas">
                <img src=" ${element.image}" alt="" class="imgcard">
                <p class="titulo"> ${element.title}</p>
                <p class="preco">R$ ${element.price}</p>
            </article>
            `
        });   

    }
}
chamarApi();

let buttonVoltar = document.querySelector('.buttonVoltar')
buttonVoltar.addEventListener('click' , () => {
    window.location.href = '/index.html'
})




