let tracker = document.querySelector('.tracker');
let puntero = document.querySelector('#pokebola');
let despaparecer = true;

// boton para recargar la pagina
document.querySelector('input').addEventListener("click", utilPokemon.recargarPagina);

//evento del raton
document.body.addEventListener('mousemove', e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
})

//evento tactil
document.body.addEventListener('touchmove', e => {
    tracker.style.left = `${e.clientX}px`;
    tracker.style.top = `${e.clientY}px`;
})

//contador de pokemon
function sumarPokemonCapturados() {
    let contador = parseInt(document.querySelector('span').innerHTML);
    document.querySelector('span').innerText = contador + 1;
}

//agrega pokemon en la pantalla
function agregarPokemon() {
    const pantalla = document.querySelector('.pantalla');

    //creando img
    const imgPokemon = document.createElement('img');
    imgPokemon.src = "img/poke" + utilPokemon.aleatoria(10) + ".png";

    //creando btn
    const btnPokemon = document.createElement('button');
    btnPokemon.style.position = 'absolute';
    btnPokemon.style.top = utilPokemon.aleatoria(400) + 'px';
    btnPokemon.style.left = utilPokemon.aleatoria(400) + 'px';

    //Generar nuevas posiciones aleatorias cada 3 segundos
    setInterval(() => {
        const maxX = window.innerWidth - 110;
        const maxY = window.innerHeight - 110;
        btnPokemon.style.top = utilPokemon.aleatoria(maxY) + 'px';
        btnPokemon.style.left = utilPokemon.aleatoria(maxY) + 'px';
    }, 3000);

    // Generar posiciones aleatorias dentro del viewport
    const maxX = window.innerWidth - 110; // Restamos el tamaño del botón
    const maxY = window.innerHeight - 110; // Restamos el tamaño del botón
    btnPokemon.style.top = utilPokemon.aleatoria(maxY) + 'px';
    btnPokemon.style.left = utilPokemon.aleatoria(maxX) + 'px';

    btnPokemon.addEventListener('click', e => {
        puntero.src = "img/pokeballOpen.png";
        tracker.style.height = "150px";
        tracker.style.width = "150px";
        tracker.style.overflow = "visible";
        despaparecer = true;
    });

    btnPokemon.addEventListener('mouseout', e => {
        puntero.src = "img/pokeball.png";
        tracker.style.height = "50px";
        tracker.style.width = "50px";
        if (despaparecer) {
            btnPokemon.style.display = "none"
            despaparecer = false;
            sumarPokemonCapturados();
        }
    });

    btnPokemon.appendChild(imgPokemon);
    pantalla.appendChild(btnPokemon);
}

// agrega los pokemon cada 2 segundos
let i = 0;
const agregarPokes = setInterval(() => {
    agregarPokemon();
    i++;

    if (i === 10) {
        clearInterval(agregarPokes);
    }
}, 2000);







