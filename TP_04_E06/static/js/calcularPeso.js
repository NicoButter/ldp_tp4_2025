function validarAltura(input) {
    var altura = parseFloat(input.value);
    var errorDiv = document.getElementById("altura-error");
    if (isNaN(altura) || altura < 30 || altura > 300 || !Number.isInteger(altura)) {
        input.classList.add("invalid");
        errorDiv.textContent = "Altura inválida (entero entre 30 y 300 cm).";
    } else {
        input.classList.remove("invalid");
        errorDiv.textContent = "";
    }
}

function validarEdad(input) {
    var edad = parseFloat(input.value);
    var errorDiv = document.getElementById("edad-error");
    if (isNaN(edad) || edad < 1 || edad > 110 || !Number.isInteger(edad)) {
        input.classList.add("invalid");
        errorDiv.textContent = "Edad inválida (entero entre 1 y 110 años).";
    } else {
        input.classList.remove("invalid");
        errorDiv.textContent = "";
    }
}

function validarSexo(input) {
    var sexo = input.value.toUpperCase();
    var errorDiv = document.getElementById("sexo-error");
    if (sexo !== "M" && sexo !== "F") {
        input.classList.add("invalid");
        errorDiv.textContent = "Sexo inválido (solo M o F).";
    } else {
        input.classList.remove("invalid");
        errorDiv.textContent = "";
    }
}

function validarPeso(input) {
    var peso = parseFloat(input.value);
    var errorDiv = document.getElementById("peso-error");
    if (isNaN(peso) || peso < 0.5 || peso > 350) {
        input.classList.add("invalid");
        errorDiv.textContent = "Peso inválido (número entre 0.5 y 350 kg).";
    } else {
        input.classList.remove("invalid");
        errorDiv.textContent = "";
    }
}

function calcularPeso() {
    var altura = parseFloat(document.getElementById("altura").value);
    var edad = parseFloat(document.getElementById("edad").value);
    var sexo = document.getElementById("sexo").value.toUpperCase();
    var peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || altura < 30 || altura > 300 || !Number.isInteger(altura)) {
        alert("Por favor, ingrese una altura válida (entero entre 30 y 300 cm).");
        return;
    }
    if (isNaN(edad) || edad < 1 || edad > 110 || !Number.isInteger(edad)) {
        alert("Por favor, ingrese una edad válida (entero entre 1 y 110 años).");
        return;
    }
    if (sexo !== "M" && sexo !== "F") {
        alert("Por favor, ingrese un sexo válido (M o F).");
        return;
    }
    if (isNaN(peso) || peso < 0.5 || peso > 350) {
        alert("Por favor, ingrese un peso válido (número entre 0.5 y 350 kg).");
        return;
    }

    var pesoReferencia;
    if (sexo === "F") {
        pesoReferencia = peso * 0.9;
    } else {
        pesoReferencia = 50 + ((altura - 150) / 4) * 3 + (edad - 20) / 4;
    }

    document.getElementById("resultado").value = pesoReferencia.toFixed(1);
}
