const input1 = document.querySelector("#email")
input1.addEventListener("input", (e) => {
    console.log(e.target.value)
    if (e.target.value === "") {
        Swal.fire("Algo salio mal");
    }
})
const input2 = document.querySelector("#password")
input2.addEventListener("input", (e) => {
    console.log(e.target.value)
    if (e.target.value === "") {
        Swal.fire("Algo salio mal");
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
    Swal.fire("Ingreso exitoso.");
})

async function cargarCatalogo() {
    try {
        fetch('./data.json')
            .then(res => res.json())
            .then((data) => {
                data.forEach((post) => {
                    const catalog = document.querySelector(".catalog")
                    const li = document.createElement("li")
                    li.innerHTML = `
                <h3>Pelicula:${post.Pelicula}</h3>
                <h4>Genero: ${post.Genero}</h4>
                <h4>Fecha:${post.Fecha}</h4>
                <h4>Rating:${post.Rating}</h4>
                <h4>Precio:$${post.Precio}</h4>
                <img src="${post.img}" alt="" width="300" height="500" />
                <button type="button" id=${post.button} class="btn btn-warning">Comprar ${post.Pelicula}</button>  
                                  `
                    catalog.appendChild(li)
                })
            })
    } catch (error) { console.error("Error al cargar los productos") }
}
cargarCatalogo()

fetch('./data.json')
    .then(res => res.json())
    .then((films) => {
        let filter1 = films.filter((f) => f.Genero === "Sci-Fi")
        let filter2 = films.filter((f) => f.Rating >= 9)
        let buscar = films.find((f) => f.Precio < 2000)
        let initial_stock = [500]
        let cart = []
        let current_stock = initial_stock.reduce((s, accum) => { return accum - cart.length }, 0)
        const catalog = document.querySelector(".catalog")

        const filmsstr = JSON.stringify(films)
        localStorage.setItem("film", filmsstr)
        const filmsls = localStorage.getItem("film")
        function itemstostr() {
            const cartstr = JSON.stringify(cart)
            localStorage.setItem("cart", cartstr)
            const cartls = localStorage.getItem("cart")
        }

        const myImage = new Image(200, 200);
        myImage.src = 'https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_640.png';
        document.body.appendChild(myImage);

        function cartlength() {
            let items = document.createElement("div")
            items.innerHTML =
                `
     <button type="button" class="btn btn-info">${cart.length}</button> 
     `
            document.body.appendChild(myImage)
            document.body.appendChild(items)
        }

        function resumencompra() {
            let total = cart.reduce((a, b) => { return a + b.Precio }, 0)
            for (let film of cart) {
                Swal.fire({
                    title: "Has agregado al carrito: " + `          
            "${film.Pelicula}"`
                        + " cuyo precio es $"
                        + ` ${film.Precio}
            `,
                    text: "El total de la compra es $ " + total,
                    icon: "info",
                });
            }
        }

        const inputid1 = document.querySelector("#buttonid1")
        inputid1.addEventListener("click", () => {
            cart.push(films[0])
            itemstostr()
            cartlength()
            resumencompra()
        })
        const inputid2 = document.querySelector("#buttonid2")
        inputid2.addEventListener("click", () => {
            cart.push(films[1])
            itemstostr()
            cartlength()
            resumencompra()
        })
        {
            const inputid3 = document.querySelector("#buttonid3")
            inputid3.addEventListener("click", () => {
                cart.push(films[2])
                itemstostr()
                cartlength()
                resumencompra()
            })
        } {
            const inputid4 = document.querySelector("#buttonid4")
            inputid4.addEventListener("click", () => {
                cart.push(films[3])
                itemstostr()
                cartlength()
                resumencompra()
            })
        } {
            const inputid5 = document.querySelector("#buttonid5")
            inputid5.addEventListener("click", () => {
                cart.push(films[4])
                itemstostr()
                cartlength()
                resumencompra()
            })
        } {
            const inputid6 = document.querySelector("#buttonid6")
            inputid6.addEventListener("click", () => {
                cart.push(films[5])
                itemstostr()
                cartlength()
                resumencompra()
            })
        } {
            const inputid7 = document.querySelector("#buttonid7")
            inputid7.addEventListener("click", () => {
                cart.push(films[6])
                itemstostr()
                cartlength()
                resumencompra()
            })
        } {
            const inputid8 = document.querySelector("#buttonid8")
            inputid8.addEventListener("click", () => {
                cart.push(films[7])
                itemstostr()
                cartlength()
                resumencompra()
            })
        } {
            const inputid9 = document.querySelector("#buttonid9")
            inputid9.addEventListener("click", () => {
                cart.push(films[8])
                itemstostr()
                cartlength()
                resumencompra()
            })
        } {
            const inputid10 = document.querySelector("#buttonid10")
            inputid10.addEventListener("click", () => {
                cart.push(films[9])
                itemstostr()
                cartlength()
                resumencompra()
            })
        }
        {
            const inputid11 = document.querySelector("#buttonid11")
            inputid11.addEventListener("click", () => {
                cart.push(films[10])
                itemstostr()
                cartlength()
                resumencompra()
            })
        }
        {
            const inputid12 = document.querySelector("#buttonid12")
            inputid12.addEventListener("click", () => {
                localStorage.removeItem("cart")
                Swal.fire({
                    title: "Esta seguro de vaciar su carrito?",
                    text: "La accion no se podra revertir.",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Si, deseo vaciar mi carrito!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire({
                            title: "Vaciado!",
                            text: "Su carrito ha sido vaciado.",
                            icon: "success"
                        });
                    }
                });
            })
        }
    })