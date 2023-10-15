
function welcome() {
    let name = prompt("Ingrese su nombre")
    alert("Hola " + name + "! A continuacion, debera ingresar al sitio para continuar")
    let email = prompt("Ingrese su email")
    let password = prompt("Ingrese su contraseña")
    alert("Bienvenido a nuestro ecommerce " + name + "!")
}
welcome()

const films = [
    id1 = { Pelicula: "Titanic", Genero: "Drama", Fecha: 1997, Rating: 7.9, Precio: 1000 },
    id2 = { Pelicula: "Avatar", Genero: "Aventura", Fecha: 2009, Rating: 7.9, Precio: 2000 },
    id3 = { Pelicula: "The Terminator", Genero: "Accion", Fecha: 1984, Rating: 8.1, Precio: 2000 },
    id4 = { Pelicula: "Back to the Future", Genero: "Aventura", Fecha: 1985, Rating: 8.5, Precio: 1500 },
    id5 = { Pelicula: "The Dark Knight", Genero: "Accion", Fecha: 2008, Rating: 9, Precio: 2500 },
    id6 = { Pelicula: "Inception", Genero: "Sci-Fi", Fecha: 2010, Rating: 8.8, Precio: 2000 },
    id7 = { Pelicula: "Matrix", Genero: "Sci-Fi", Fecha: 1999, Rating: 8.7, Precio: 2000 },
    id8 = { Pelicula: "Jurassic Park", Genero: "Accion", Fecha: 1993, Rating: 8.2, Precio: 2000 },
    id9 = { Pelicula: "The Godfather", Genero: "Crimen", Fecha: 1972, Rating: 9.2, Precio: 2000 },
    id10 = { Pelicula: "Halloween", Genero: "Thriller", Fecha: 1978, Rating: 7.7, Precio: 1000 },
]
console.log(films)
for (const film of films)
    console.log((film.Pelicula), (film.Fecha), (film.Genero), (film.Rating),)
films.pop()
films.push(id11 = { Pelicula: "Star Wars", Genero: "Sci-Fi", Fecha: 1977, Rating: 8.6, Precio: 2000 })

films.map((f) => { console.log(f) })

let filter1 = films.filter((f) => f.Genero === "Sci-Fi")
console.log(filter1)

let filter2 = films.filter((f) => f.Rating >= 9)
console.log(filter2)

let buscar = films.find((f) => f.Precio < 2000)
console.log(buscar)

let cart = []

cart.push(id1, id2)
console.log(cart)
let purchased = cart.reduce((accum, f) => { return accum + f.Precio }, 0)
console.log(purchased)

const catalog = document.querySelector(".catalog")
console.log(catalog)

for (let film of films) {
    let list = document.createElement("div")
    list.innerHTML = `
        <h3>Titulo: ${film.Pelicula}</h3>
        <h4>Precio: ${film.Precio}</h4>
        <h4>Rating: ${film.Rating}</h4>
        <button type="submit" class="btn btn-success">Agregar al carrito</button>
        `
    document.body.appendChild(list)
}