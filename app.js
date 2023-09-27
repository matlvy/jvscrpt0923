/* let nombre = "Coderhouse"
console.log(nombre)
let edad = 25
console.log(edad)

let numero1 = 20
let numero2 = 30
console.log(numero1 + numero2)
alert(numero1 + numero2) 

let primerValor = parseInt(prompt("Ingrese el primer valor"))
let segundoValor = parseInt(prompt("Ingrese el segundo valor"))
alert(+primerValor + segundoValor)

let primerValor = parseInt(prompt("Ingrese el primer valor"))
let segundoValor = parseInt(prompt("Ingrese el segundo valor"))
alert(+primerValor + segundoValor)

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
alert("Usted se llama: " + nombre + " " + apellido) 

let calificacion = 5
if (calificacion >= 6) { console.log('aprobado') }
else if (calificacion < 6) { console.log('reprobado') }  

let nombre = prompt("Ingrese nombre")
let apellido = prompt("Ingrese apellido")
/*const apellido = "levy"

if ((nombre == "brad") && (apellido == "pitt")) { alert("You are a Hollywood star!"); }
if ((nombre == "matias") && (apellido == "levy")) { alert("you're a genius!"); }
else if ((nombre != "") && (apellido != "")) { alert("Su nombre completo es: " + nombre + " " + apellido); }
else { alert("Debe ingresar su nombre y apellido para continuar en el sitio.") } 

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
    } */

    let number=parseInt(prompt("Tell us a number please"))
    for (let i=1; i<=10; i++){
        let product=number*i
        console.log(`${number}*${i}=${product}`)
    }
    