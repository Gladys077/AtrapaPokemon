

const utilPokemon = {
    aleatorea: function (entrada) {
        let numero = Math.round(Math.random() * entrada);
        return numero;
    },
    recargarPagina: function(){
        location.reload();
     }
}