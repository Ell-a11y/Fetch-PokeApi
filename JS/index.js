// VARIABLES CONST
const contenedor = document.getElementById("contenedor-pokes");
const select = document.querySelector("select");
const pagSig = document.querySelector("#sigPag");
const pagAnt = document.querySelector("#antPag");
// Variables LET
let pokemon = null;
let numPagina = 1;

// FUNCIONES ANONIMAS CONST
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
const genPokes = async function() {
    contenedor.textContent = "";
    for(let x = numPagina; x<Number(select.value)+numPagina; x++) {
        await obtenerPoke(x);
    }
}
const sigPagina = async function(num) {
    contenedor.textContent = "";
    numPagina = Number(numPagina)+Number(num);
    for(let x = numPagina; x<numPagina+num; x++) {
        await obtenerPoke(x);
    }
}
const antPagina = async function(num) {
    contenedor.textContent = "";
    if(numPagina > Number(select.value) || Number(numPagina)-Number(num) >= 1) {
        console.log(numPagina)
        for(let x = numPagina-num; x<numPagina; x++) {
            await obtenerPoke(x);
        }
        numPagina = Number(numPagina)-Number(num);
    } else {
        for(let x = 1; x <= num; x++) {
            await obtenerPoke(x);
        }
    }
}

// Promesas FETCH
const obtenerPoke = async function(id) {
    const tmp = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const obj = await tmp.json();
    creadorObj(obj);
}
// AddEventListener
select.addEventListener("change", genPokes);
pagSig.addEventListener("click", ()=>sigPagina(Number(select.value)));
pagAnt.addEventListener("click", ()=>antPagina(Number(select.value)));

// Funcions automaticas
genPokes(select.value, false);