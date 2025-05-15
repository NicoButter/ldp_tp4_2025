document.addEventListener("DOMContentLoaded", function() {
    var botonEnviar = document.getElementById("enviar");
    if (botonEnviar) {
        botonEnviar.addEventListener("click", calcularTotal);
    } else {
        console.error("El botón con id 'enviar' no se encontró.");
    }
});

function calcularTotal() {
    var precio = parseFloat(document.getElementById("precio").value);
    var cantidad = parseFloat(document.getElementById("cantidad").value);

    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, ingrese un precio válido (número positivo).");
        return;
    }
    if (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
        alert("Por favor, ingrese una cantidad válida (entero positivo).");
        return;
    }

    var total = precio * cantidad;

    document.getElementById("total").value = total.toFixed(2);
}
