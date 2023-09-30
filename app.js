
const tipo_producto_1 = "notebook"
const marca_producto_1 = "dell"
let precio_producto_1 = 600000
const forma_de_pago_1 = "cuotas"
const forma_de_pago_2 = "contado"
let cantidad_cuotas = 12
const valor_cuota = precio_producto_1 / cantidad_cuotas

let marca_producto_seleccionada = prompt("Que marca de notebook desea comprar?")
if (marca_producto_seleccionada == marca_producto_1) {
    alert("Felicitaciones: ha decidido comprar la nueva " + tipo_producto_1 + " " + marca_producto_1 + ".")
    let forma_de_pago_seleccionada = prompt("Ingrese forma de pago")
    if (forma_de_pago_seleccionada == forma_de_pago_1) {
        alert("A continuacion, procederemos al calculo de sus cuotas")
        for (let i = 1; i <= 12; i++) {
            console.log(`${precio_producto_1} / ${i} = ${valor_cuota}`);
        }
    } else if (forma_de_pago_seleccionada == forma_de_pago_2) {
        console.log("La compra sera abonada al contado.");
    }
    else { console.log("Debe ingresar una opcion para continuar."); }
}
else if (marca_producto_seleccionada != "") { alert("Lo sentimos. El producto que buscas no se encuentra disponible") }
else { alert("Atencion! Debes ingresar una opcion para continuar.") }