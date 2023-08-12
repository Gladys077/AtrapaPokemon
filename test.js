let img = "img", ejeX=0;

const Pokemon = {
   imagen: img,
   posicionX: ejeX,

  setDatos:  function(){
  img = setearImg();
  ejeX = numeroRandom()+"px";

    },
  
getEjeX: function(){
    alert(ejeX);
},

getImg: function(){
     alert(img);
}
};

function numeroRandom(){
return Math.round(Math.random()*400);
}

function setearImg(){
    return "hola";
}




//iterando todos los botones y agregandoles funcionalidades

function abrirPokebola() {
    let pokemon = document.querySelectorAll("button");
    pokemon.forEach(element => {
        element.addEventListener('click', e => {
            puntero.src = "img/pokeballOpen.png";
            tracker.style.height = "150px";
            tracker.style.width = "150px";
            despaparecer = true;
            cerrarpokebola();
            sumarPokemonCapturados();

        });

    });
}


function cerrarpokebola() {
    let pokemon = document.querySelectorAll("button");
    pokemon.forEach(element => {
        element.addEventListener('mouseout', e => {
            puntero.src = "img/pokeball.png";
            tracker.style.height = "50px";
            tracker.style.width = "50px";
            if (despaparecer) {
                element.style.display = "none"
                despaparecer = false;
            }
        });

    });
}





//colocar los pokemon en el eje x de la pantalla
function moverPokemon() {
    let pokemon = document.querySelectorAll("button");
    pokemon.forEach(element => {
        element.style.position = 'relative';
        element.style.top = '100px';
        element.style.left = '200px';

    }
    )
};