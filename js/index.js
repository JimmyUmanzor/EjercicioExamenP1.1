function calcular() {
    let str1 = document.getElementById("valor1").value
    let str2 = document.getElementById("valor2").value
    let str3 = document.getElementById("valor3").value
    let str4 = document.getElementById("valor4").value
    let str5 = document.getElementById("valor5").value
    
    let num1 = parseFloat(str1) || 0
    let num2 = parseFloat(str2) || 0
    let num3 = parseFloat(str3) || 0
    let num4 = parseFloat(str4) || 0
    let num5 = parseFloat(str5) || 0

    let porcentaje = 0
    let subTotal = num1+num2+num3+num4+num5
    let total = 0


    if (subTotal <= 0) {
        warning("No hay valores a calcular")
    } else {
        if (subTotal >= 0 && subTotal <= 999.99) {
            porcentaje = 0
            mensajeDescuento = "No Aplica Descuento"
        } else if (subTotal >= 1000.00 && subTotal <= 4999.99) {
            porcentaje = subTotal * 0.10
            mensajeDescuento = "10% Descuento"
        } else if (subTotal >= 5000.00 && subTotal <= 8999.99) {
            porcentaje = subTotal * 0.20
            mensajeDescuento = "20% Descuento"
        } else if (subTotal >= 9000.00 && subTotal <= 12999.99) {
            porcentaje = subTotal * 0.30
            mensajeDescuento = "30% Descuento"
        } else if (subTotal >= 13000) {
            porcentaje = subTotal * 0.40
            mensajeDescuento = "40% Descuento"
        }

        total = subTotal - porcentaje;
        document.getElementById("subTotal").value = subTotal.toFixed(2)
        document.getElementById("descuento").value = porcentaje.toFixed(2)
        document.getElementById("mensajeDescuento").value = mensajeDescuento
        document.getElementById("total").value = total.toFixed(2)
    }
}

function limpiar() {
    document.getElementById("valor1").value = ""
    document.getElementById("valor2").value = ""
    document.getElementById("valor3").value = ""
    document.getElementById("valor4").value = ""
    document.getElementById("valor5").value = ""
    document.getElementById("subTotal").value = ""
    document.getElementById("descuento").value = "0"
    document.getElementById("mensajeDescuento").value = "Descuento 0%"
    document.getElementById("total").value = ""
}

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Ups...",
        text: mensaje
    });
}
