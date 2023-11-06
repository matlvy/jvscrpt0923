
const input1 = document.querySelector("#email")
input1.addEventListener("input", (e) => {
    console.log(e.target.value)
    if (e.target.value === "") {
        console.log("Validation failed")
    }
})
const input2 = document.querySelector("#password")
input2.addEventListener("input", (e) => {
    console.log(e.target.value)
    if (e.target.value === "") {
        console.log("Validation failed")
    }
})
const formulario = document.querySelector("form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")

formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e) {
    e.preventDefault()
    console.log(`email : ${email.value}`)
    console.log(`password: ${password.value}`)
}
const boton = document.querySelector("button")
button.addEventListener("click", function () {
    console.log(button.textContent)
})
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


for (let film of films) {
    let list = document.createElement("div")
    list.innerHTML = `
        <h3>Titulo: ${film.Pelicula}</h3>
        <h4>Precio: ${film.Precio}</h4>
        <h4>Rating: ${film.Rating}</h4>
                `
    document.body.appendChild(list)
}
films.map((f) => { console.log(f) })

let filter1 = films.filter((f) => f.Genero === "Sci-Fi")
console.log(filter1)

let filter2 = films.filter((f) => f.Rating >= 9)
console.log(filter2)

let buscar = films.find((f) => f.Precio < 2000)
console.log(buscar)

let initial_stock = [500]
let cart = []

console.log(cart)
console.log(cart.length)

let current_stock = initial_stock.reduce((s, accum) => { return accum - cart.length }, 0)
console.log(current_stock)

const catalog = document.querySelector(".catalog")
console.log(catalog)

console.log(films)

const filmsstr = JSON.stringify(films)
console.log(filmsstr)
localStorage.setItem("film", filmsstr)

const filmsls = localStorage.getItem("film")
console.log(filmsls)
console.log(JSON.parse(filmsls))

function itemstostr() {

    const cartstr = JSON.stringify(cart)
    console.log(cartstr)
    localStorage.setItem("cart", cartstr)

    const cartls = localStorage.getItem("cart")
    console.log(cartls)
    console.log(JSON.parse(cartls))
}

const myImage = new Image(200, 200);
myImage.src = 'https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png';
document.body.appendChild(myImage);

function cartlength() {
    let items = document.createElement("div")
    items.innerHTML =
        `
<button type="button" class="btn btn-danger">${cart.length}</button> 
     `
    document.body.appendChild(myImage)
    document.body.appendChild(items)
    document.body.append("Usted ha decidido comprar:")
}

function resumencompra() {

    let total = cart.reduce((a, b) => { return a + b.Precio }, 0)

    for (let film of cart) {
        let purchased = document.createElement("div")
        purchased.innerHTML = `           
    <h3>Titulo: ${film.Pelicula}<h3>
    <h4> Precio: ${film.Precio}</h4> 
             `
        document.body.appendChild(purchased)
    }
    document.body.append("El monto total de su compra es $", total)
}

const inputid1 = document.querySelector("#buttonid1")
inputid1.addEventListener("click", () => {
    cart.push(id1)
    itemstostr()
    cartlength()
    resumencompra()
})
const inputid2 = document.querySelector("#buttonid2")
inputid2.addEventListener("click", () => {
    cart.push(id2)
    itemstostr()
    cartlength()
    resumencompra()
})
{
    const inputid3 = document.querySelector("#buttonid3")
    inputid3.addEventListener("click", () => {
        cart.push(id3)
        itemstostr()
        cartlength()
        resumencompra()
    })
} {
    const inputid4 = document.querySelector("#buttonid4")
    inputid4.addEventListener("click", () => {
        cart.push(id4)
        itemstostr()
        cartlength()
        resumencompra()
    })
} {
    const inputid5 = document.querySelector("#buttonid5")
    inputid5.addEventListener("click", () => {
        cart.push(id5)
        itemstostr()
        cartlength()
        resumencompra()
    })
} {
    const inputid6 = document.querySelector("#buttonid6")
    inputid6.addEventListener("click", () => {
        cart.push(id6)
        itemstostr()
        cartlength()
        resumencompra()
    })
} {
    const inputid7 = document.querySelector("#buttonid7")
    inputid7.addEventListener("click", () => {
        cart.push(id7)
        itemstostr()
        cartlength()
        resumencompra()
    })
} {
    const inputid8 = document.querySelector("#buttonid8")
    inputid8.addEventListener("click", () => {
        cart.push(id8)
        itemstostr()
        cartlength()
        resumencompra()
    })
} {
    const inputid9 = document.querySelector("#buttonid9")
    inputid9.addEventListener("click", () => {
        cart.push(id9)
        itemstostr()
        cartlength()
        resumencompra()
    })
} {
    const inputid10 = document.querySelector("#buttonid10")
    inputid10.addEventListener("click", () => {
        cart.push(id10)
        itemstostr()
        cartlength()
        resumencompra()
    })
}
{
    const inputid11 = document.querySelector("#buttonid11")
    inputid11.addEventListener("click", () => {
        cart.push(id11)
        itemstostr()
        cartlength()
        resumencompra()
    })
}
{
    const inputid12 = document.querySelector("#buttonid12")
    inputid12.addEventListener("click", () => {
        localStorage.removeItem("cart")
        document.body.append("Carrito vaciado.")
    })
}