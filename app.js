/* 
let movie=prompt("What movie are you going to watch?")
switch(movie){
    case "the dark knight":
        console.log("you 're going to watch The dark knight")
        break
        case "titanic":
            console.log("you 're going to watch Titanic")
        break
        case "The Avengers":
            console.log("you 're going to watch The Avengers")
        break
        default:
            console.log("You are going to watch another alternative")
            break
}

Backticks=Alt96 `${variable}`  

movie=prompt("What movie are you going to watch?")

switch(movie){
    case "batman":
        console.log(`you 're going to watch ${movie}`)
        break
        case "avatar":
            console.log(`you 're going to watch ${movie}`)
        break
        case "The Avengers":
            console.log(`you 're going to watch ${movie}`)
        break
        default:
            console.log(`you 're going to watch ${movie}`)
            break
        }  
        let i=0
        while(i<=10){console.log(i)
        i++
    } 
    let number=parseInt(prompt("Tell us a number please"))
    for (let i=1; i<=10; i++){
        let product=number*i
        console.log(`${number}*${i}=${product}`)
    }
    */
const tipo_producto_1 = "Notebook"
const marca_producto_1 = "Dell"

let marca_producto_seleccionado = prompt("Que marca de notebook desea comprar?")
if (marca_producto_seleccionado == marca_producto_1) { alert("Felicitaciones! Has decidido comprar la nueva " + tipo_producto_1 + " " + marca_producto_1) }
else if (marca_producto_seleccionado != "") { alert("Lo sentimos. El producto que buscas no se encuentra disponible") }
else { alert("Atencion! Debes ingresar una opcion para continuar.") }

let precio_producto_1 = "$600000"
