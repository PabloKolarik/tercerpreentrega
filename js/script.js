let pokemon = [
    {
        id: 1,
        nombre: "Bulbasaur",
        tipo: "planta",
        numevo: 3,
        color: "verde",
        precio: 10,
        img: "./img/001.png",
        stock: 3


    },
    {
        id: 2,
        nombre: "Ivysaur",
        tipo: "planta",
        numevo: 3,
        color: "azul",
        precio: 20,
        img: "./img/002.png",
        stock: 3
    },
    {
        id: 3,
        nombre: "Venasaur",
        tipo: "planta",
        numevo: 3,
        color: "verde",
        precio: 30,
        img: "./img/003.png",
        stock: 3
    },
    {
        id: 4,
        nombre: "Charmander",
        tipo: "fuego",
        numevo: 3,
        color: "naranja",
        precio: 10,
        img: "./img/004.png",
        stock: 3
    },
    {
        id: 5,
        nombre: "Charmeleon",
        tipo: "fuego",
        numevo: 3,
        color: "rojo",
        precio: 20,
        img: "./img/005.png",
        stock: 3

    },
    {
        id: 6,
        nombre: "Charizard",
        tipo: "fuego",
        numevo: 3,
        color: "naranja",
        precio: 30,
        img: "./img/006.png",
        stock: 3
    },
    {
        id: 7,
        nombre: "Squirtle",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 10,
        img: "./img/007.png",
        stock: 3
    },
    {
        id: 8,
        nombre: "Wartortle",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 20,
        img: "./img/008.png",
        stock: 3
    },
    {
        id: 9,
        nombre: "Blastoise",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 30,
        img: "./img/009.png",
        stock: 3
    },
    {
        id: 10,
        nombre: "Caterpie",
        tipo: "bicho",
        numevo: 3,
        color: "verde",
        precio: 10,
        img: "./img/010.png",
        stock: 3
    },
    {
        id: 11,
        nombre: "Metapod",
        tipo: "bicho",
        numevo: 3,
        color: "verde",
        precio: 20,
        img: "./img/011.png",
        stock: 3
    },
    {
        id: 12,
        nombre: "Butterfree",
        tipo: "bicho",
        numevo: 3,
        color: "violeta",
        precio: 30,
        img: "./img/012.png",
        stock: 3
    },
    {
        id: 13,
        nombre: "Weedle",
        tipo: "bicho",
        numevo: 3,
        color: "marron",
        precio: 10,
        img: "./img/013.png",
        stock: 3
    },
    {
        id: 14,
        nombre: "Kakuna",
        tipo: "bicho",
        numevo: 3,
        color: "marron",
        precio: 20,
        img: "./img/014.png",
        stock: 3
    },
    {
        id: 15,
        nombre: "Beedrill",
        tipo: "bicho",
        numevo: 3,
        color: "amarillo",
        precio: 30,
        img: "./img/015.png",
        stock: 3
    },
    {
        id: 16,
        nombre: "Pidgey",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 10,
        img: "./img/016.png",
        stock: 3
    },
    {
        id: 17,
        nombre: "Pidgeotto",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 20,
        img: "./img/017.png",
        stock: 3
    },
    {
        id: 18,
        nombre: "Pidgeot",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 30,
        img: "./img/018.png",
        stock: 3
    },
    {
        id: 19,
        nombre: "Rattata",
        tipo: "normal",
        numevo: 2,
        color: "violeta",
        precio: 10,
        img: "./img/019.png",
        stock: 3
    },
    {
        id: 20,
        nombre: "Raticate",
        tipo: "normal",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/020.png",
        stock: 3
    },
    {
        id: 21,
        nombre: "Spearow",
        tipo: "normal",
        numevo: 2,
        color: "rojo",
        precio: 10,
        img: "./img/021.png",
        stock: 3
    },
    {
        id: 22,
        nombre: "Fearow",
        tipo: "normal",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/022.png",
        stock: 3
    },
    {
        id: 23,
        nombre: "Ekans",
        tipo: "veneno",
        numevo: 2,
        color: "violeta",
        precio: 10,
        img: "./img/023.png",
        stock: 3
    },
    {
        id: 24,
        nombre: "Arbok",
        tipo: "veneno",
        numevo: 2,
        color: "violeta",
        precio: 20,
        img: "./img/024.png",
        stock: 3
    },
    {
        id: 25,
        nombre: "Pikachu",
        tipo: "electrico",
        numevo: 2,
        color: "amarillo",
        precio: 10,
        img: "./img/025.png",
        stock: 3
    },
    {
        id: 26,
        nombre: "Raichu",
        tipo: "electrico",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/026.png",
        stock: 3
    },
    {
        id: 27,
        nombre: "Sandshrew",
        tipo: "tierra",
        numevo: 2,
        color: "marron",
        precio: 10,
        img: "./img/027.png",
        stock: 3
    },
    {
        id: 28,
        nombre: "Sandslash",
        tipo: "tierra",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/028.png",
        stock: 3

    },


]




let chango = []



let contenedor = document.getElementById("pokemonCard")
cargaPokemon(pokemon)

let carroMuestra= document.getElementById("chango")





let buscador = document.getElementById("buscador")

buscador.addEventListener("input", filtroNombre)

function filtroNombre() {
    let arrayPokemon = pokemon.filter(pokemon => pokemon.nombre.toLowerCase().includes(buscador.value.toLowerCase()))
    cargaPokemon(arrayPokemon)
}


function cargaPokemon(arrayPokemon) {
    let contenedor = document.getElementById("pokemonCard")
    contenedor.innerHTML = ""
    arrayPokemon.forEach(pokemon => {
        let tarjetaPokemon = document.createElement("div")
        tarjetaPokemon.className = "tarjetaPokemon col-10 col-md-5 col-lg-4 col-xl-4 col-xxl-3"

        tarjetaPokemon.innerHTML = `
    <h2 class=tituloCard>${pokemon.nombre}</h2>
    <img src=${pokemon.img}>
    <p>tipo ${pokemon.tipo}</p>
    <p>color principal: ${pokemon.color}</p>
    <p>Valor: ${pokemon.precio}</p>
    <p>stock: ${pokemon.stock}</p>
    <button id=${pokemon.id} class="boton"> Agregar al carrito </button>
    
    `
        contenedor.appendChild(tarjetaPokemon)

        let boton = document.getElementById(pokemon.id)
        boton.addEventListener("click", agregarAlCarro)
    })
}










function agregarAlCarro(e) {

    let pokemonBuscado = pokemon.find(pokemon => pokemon.id === Number(e.target.id))



    if (chango.some(pokemon => pokemon.id == pokemonBuscado.id)) {
        let pos = chango.findIndex(pokemon => pokemon.id == pokemonBuscado.id)
        chango[pos].stock++
        chango[pos].subtotal = chango[pos].precio * chango[pos].stock
    } else {
        chango.push({
            id: pokemonBuscado.id,
            nombre: pokemonBuscado.nombre,
            precio: pokemonBuscado.precio,
            stock: pokemonBuscado.stock,
            subtotal: pokemonBuscado.precio,
            
        })
    }
    localStorage.setItem("chango", JSON.stringify(chango))
    cargaCarro(chango)
} 
    
    

function cargaCarro(arrayPokemon) {
    carroMuestra.innerHTML = ""
    arrayPokemon.forEach(pokemon => {
        carroMuestra.innerHTML += `<h3> ${pokemon.nombre} ${pokemon.precio} ${pokemon.subtotal}</h3>`

    })

}

if (localStorage.getItem("chango")) {
    chango = JSON.parse(localStorage.getItem("chango"));
    cargaCarro(chango);
    
}


function comprar() {
    alert("Ya tenes tus pokemon!");
    localStorage.removeItem("chango");
    chango = [];
    cargaCarro(chango);
    
}

let btnComprar = document.getElementById("comprar");
btnComprar.addEventListener("click", comprar);





