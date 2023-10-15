
/*
function welcome() {
    let fullname = prompt("Ingrese su nombre completo")
    alert("Hola " + fullname + "! A continuacion, debera ingresar al sitio para continuar")
    let username = prompt("Ingrese su usuario")
    let email = prompt("Ingrese su email")
    alert("Bienvenido a nuestro ecommerce " + username + "!")
}
welcome()
*/
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

let filtrar = films.filter((f) => f.Genero === "Sci-Fi")
console.log(filtrar)

let buscar = films.find((f) => f.Precio < 2000)
console.log(buscar)

let cart = []

cart.push(id1, id2)
console.log(cart)
let purchased = cart.reduce((accum, f) => { return accum + f.Precio }, 0)
console.log(purchased)
