const params = new URLSearchParams(window.location.search);
const idPokemon = params.get("id");

const obtenerPoke = async function(id, bool) {
    const tmp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const obj = await tmp.json();
    creadorCarta(obj);
}

const creadorCarta = function(obj) {
    const card = document.getElementById("contenedor-card");
    const cardImg = document.createElement("img");
    cardImg.src = obj.sprites.front_default;
    console.log(card);
    card.appendChild(cardImg);
}
obtenerPoke(idPokemon);