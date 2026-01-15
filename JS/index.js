// VARIABLES CONST
const contenedor = document.getElementById("contenedor-pokes");
const select = document.querySelector("select");
const pagSig = document.querySelector("#sigPag");
const button = document.getElementById("Shiny");
// Variables LET
let pokemon = null;
let shiny = true;
let valorSelect = Number(select.value);
let numPagina = valorSelect;

// FUNCIONES ANONIMAS CONST
const creadorObj = function(obj, bool) {
    const divNew = document.createElement("article");
    const imgNew = document.createElement("img");
    const pNew = document.createElement("p");
    pNew.textContent = obj.id + ". " + obj.name;
    imgNew.src = obj.sprites.front_default;
    if(!bool) {
        imgNew.src = obj.sprites.front_shiny;
    }
    divNew.classList = ("pokemons");
    contenedor.appendChild(divNew);
    divNew.appendChild(imgNew);
    divNew.appendChild(pNew);
}
const genPokes = async function(num, bool) {
    contenedor.textContent = "";
    for(let x = 1; x<=num; x++) {
        await obtenerPoke(x, bool);
    }
}
const convShiny = function(num, bool) {
    shiny = !shiny;
    genPokes(num, bool);
}
const sigPagina = async function(num, bool) {
    contenedor.textContent = "";
    for(let x = 1; x<=num; x++) {
        numPagina++;
        await obtenerPoke(numPagina, bool);
    }

}

// Promesas FETCH
const obtenerPoke = async function(id, bool) {
    const tmp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const obj = await tmp.json();
    creadorObj(obj, bool);
}
// AddEventListener
select.addEventListener("change", ()=>genPokes(valorSelect, shiny));
button.addEventListener("click", ()=>convShiny(valorSelect, shiny));
pagSig.addEventListener("click", ()=>sigPagina(valorSelect, shiny));

// Funcions automaticas
genPokes(select.value, shiny);