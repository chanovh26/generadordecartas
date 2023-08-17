/* Este es el listado de la información de las cartas  */
const listadoCartas = [
    {
        id: 1,
        nombre: "Buzo",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 2,
        nombre: "Pantalon",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },
    {
        id: 3,
        nombre: "Conjunto",
        imagen: "./imagenes/gato-programador.webp",
        descripcion: "",
    },


]


/* Selección de los NODOS HTML (etiquetas/elementos html) */
const contenedorCartas = document.querySelector(".listadoCartas")



/* Función que recorre el listado de las cartas */

function recorrerListado() {
    contenedorCartas.innerHTML = ""
    listadoCartas.forEach(
        (carta) => contenedorCartas.innerHTML += `
    <article class="card">
                <img src="${carta.imagen}" alt="Imagen del proyecto">
                <div class="info">
                  <h2>${carta.nombre}</h2>
                  <p>${carta.descripcion}</p>
                </div>
                </article>
    `
    )
}
recorrerListado() 
    //pedir datos al usuario
function crearCarta() {
    const nombre = prompt("Nombre del desarollador")
    const imagen = prompt("Imagen  del desarrolador")
    const descripcion = prompt("Descripcion del desarrolador")
    //crear un objet con los datos del usuario
    const carta = {nombre,imagen,descripcion}
    //añadir la carta al listado de cartas
    listadoCartas.push(carta)
    //llamado a la funcion recorrer cartas
    recorrerListado()
}
