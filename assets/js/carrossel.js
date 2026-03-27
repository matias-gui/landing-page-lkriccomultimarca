
const buttonAnterior = document.querySelector('.buttonAnterior');
const buttonProximo = document.querySelector('.buttonProximo');


function carrossel() {
    const mostrarProducts = document.querySelectorAll('.mostrarProducts');
    // Carregar o primeiro elemento
    mostrarProducts[0].classList.add('ativo');

    let index = 0;
    // Quando o button proximo é clicado, acontece um evento.
    buttonProximo.addEventListener('click', () => {
        //Remove a classe ativo
        mostrarProducts[index].classList.remove('ativo');
 
        // Encrementação do index
        index++
        // Se o index passar do tamanho do mostrarProducts, ele volta para o inicio
        if (index >= mostrarProducts.length) {
            index = 0;
        };
        // Adicionar a classe ativo para o proximo elemento
        mostrarProducts[index].classList.add('ativo');
    });

    // Quando o button anterior é clicado, acontece outro evento.
    buttonAnterior.addEventListener('click', () => {
        // Remove a classe ativo
        mostrarProducts[index].classList.remove('ativo')
        // Decrementação do index
        index--
        // Se o index for menor que 0, ou seja, se ele for menor que o tamanho do mostrarProducts, o index vai receber o ultimo elemento
        if (index < 0) {
            index = mostrarProducts.length - 1;
        }
        // Adicionando a classe ativo no elemento
        mostrarProducts[index].classList.add('ativo')
        console.log(index)
    });

    let interval;
    // carrossel altera a cada 3,5s 
    function autoPlay() {
        interval = setInterval(() => {
            buttonProximo.click()
        }, 5000)
    }
    // pausa o carrossel
    function pausarCarrossel() {
        clearInterval(interval)
    }

    const container = document.querySelector('.carregarProducts');
    // quando o mouse estiver sobre o container, o carrossel será pausado
    container.addEventListener('mouseenter', (e) => {
        clearInterval(interval)
        if (!container.contains(e.relatedTarget)) {
            pausarCarrossel()
        }

    });
    // quando o mouse sair do container, o carrossel volta para o automatico
    container.addEventListener('mouseleave', (e) => {
        if (!container.contains(e.relatedTarget)) {
            autoPlay()
        }

    })

};






