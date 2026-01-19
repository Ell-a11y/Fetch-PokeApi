// VARIABLES CONST
const contenedor = document.getElementById("contenedor-pokes");
const select = document.querySelector("select");
const pagSig = document.querySelector("#sigPag");

// Variables LET
let pokemon = null;
let valorSelect = Number(select.value);
let numPagina = valorSelect;

// FUNCIONES ANONIMAS CONST
const mesInfo = function() {
    let poke = this.textContent;
    console.log(poke);
    poke = poke[0];
    console.log(poke);
    window.open(`./html/pokemon.html?id=${poke}`, "Pokemons", "width=400,height=400");
}
const creadorObj = function(obj) {
    const divNew = document.createElement("article");
    const imgNew = document.createElement("img");
    const buttonNew = document.createElement("button");
    buttonNew.textContent = obj.id + ". " + obj.name;
    imgNew.src = obj.sprites.front_default;
    divNew.classList = ("pokemons");
    buttonNew.classList = ("info");
    buttonNew.addEventListener("click", mesInfo);
    contenedor.appendChild(divNew);
    divNew.appendChild(imgNew);
    divNew.appendChild(buttonNew);
}
const genPokes = async function(num, bool) {
    contenedor.textContent = "";
    for(let x = 1; x<=num; x++) {
        await obtenerPoke(x, bool);
    }
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
    if(bool) {
        creadorObj(obj);
    }
}
// AddEventListener
select.addEventListener("change", ()=>genPokes(valorSelect, true));
pagSig.addEventListener("click", ()=>sigPagina(valorSelect, true));

// Funcions automaticas
genPokes(select.value, true);