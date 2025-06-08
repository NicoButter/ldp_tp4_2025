function concatenar() {
    // Obtener los valores de los campos
    var dia = document.getElementById("dia").value;
    var horario = document.getElementById("horario").value;

    // Validar el día (solo Lunes a Viernes)
    var diasValidos = ["lunes", "martes", "miércoles", "jueves", "viernes"];
    if (!diasValidos.includes(dia.toLowerCase())) {
        alert("Por favor, ingrese un día válido (Lunes, Martes, Miércoles, Jueves o Viernes).");
        return;
    }

    // Validar el formato del horario con una expresión regular (HH:MM-HH:MM)
    var regexHorario = /^([0-1][0-9]|2[0-3]):([0-5][0-9])-([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
    if (!regexHorario.test(horario)) {
        alert("Por favor, ingrese un horario válido en formato HH:MM-HH:MM (e.g., 14:00-16:00 separados por - sin espacio).");
        return;
    }

    // Extraer inicio y fin
    var partes = horario.split("-");
    var inicio = partes[0].split(":");
    var fin = partes[1].split(":");
    var horasInicio = parseInt(inicio[0]);
    var minutosInicio = parseInt(inicio[1]);
    var horasFin = parseInt(fin[0]);
    var minutosFin = parseInt(fin[1]);

    // Validar rango de ambos horarios (10:00 a 23:00)
    if (horasInicio < 10 || horasInicio > 23 || horasFin < 10 || horasFin > 23) {
        alert("Ambos horarios deben estar entre 10:00 y 23:00.");
        return;
    }

    // Convertir a minutos para comparar
    var totalMinutosInicio = horasInicio * 60 + minutosInicio;
    var totalMinutosFin = horasFin * 60 + minutosFin;

    // Validar que la hora de salida sea mayor que la de inicio
    if (totalMinutosFin <= totalMinutosInicio) {
        alert("La hora de salida debe ser mayor que la hora de inicio.");
        return;
    }

    // Concatenar los valores con un espacio
    var resultado = dia + " " + horario;

    // Mostrar el resultado en el tercer campo
    document.getElementById("resultado").value = resultado;
}