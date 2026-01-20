// Variables CONST
const params = new URLSearchParams(window.location.search);
const idPokemon = params.get("id");
const card = document.getElementById("contenedor-card");
const cardH1 = document.createElement("h1");
const cardImg = document.createElement("img");

let mesa = [];
let mesaCont = [];

const obtenerPoke = async function(id, bool) {
    const tmp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const obj = await tmp.json();
    creadorCarta(obj);
}
const tabla = function(obj){
    // const table = document.createElement("table");
    // mesaCont=["Especie", obj.species.name, "Estadisticas", obj]
    // for(let x = 0; x < 7; x++) {
    //     if(x =! 3) {
    //         mesa[x] = document.createElement("td");
    //         mesaCont[x] = mesaCont[x];
    //     } else {
    //         mesa[x] = document.createElement("tr");
    //     }
    // }
    // card.appendChild(table);
}
const creadorCarta = function(obj) {
    cardH1.textContent = obj.id +". "+ obj.name;
    cardImg.src = obj.sprites.front_default;
    console.log(obj);
    card.appendChild(cardH1);
    card.append(cardImg);
    card.append(cardH1);
    tabla(obj); 
}
obtenerPoke(idPokemon);
