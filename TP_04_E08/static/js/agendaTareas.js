document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente cargado, asignando eventos..."); 
    var botonAgregar = document.getElementById("agregar");
    if (botonAgregar) {
        console.log("Botón 'agregar' encontrado, asignando evento click."); 
        botonAgregar.addEventListener("click", agregarTarea);
    } else {
        console.error("Error: El botón con id 'agregar' no se encontró.");
    }
});

function agregarTarea() {
    console.log("Función agregarTarea ejecutada."); 
    var tareaInput = document.getElementById("tarea");
    var tareaTexto = tareaInput.value.trim();

    if (tareaTexto === "") {
        alert("Por favor, ingrese una tarea válida (no vacía).");
        console.log("Tarea vacía detectada."); 
        return;
    }

    var taskList = document.getElementById("lista-tareas");
    var taskItem = document.createElement("div");
    taskItem.className = "task-item";

    var taskText = document.createElement("span");
    taskText.textContent = tareaTexto;
    taskItem.appendChild(taskText);

    var deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", function() {
        console.log("Eliminando tarea: " + tareaTexto);
        taskList.removeChild(taskItem);
    });
    taskItem.appendChild(deleteButton);

    taskList.appendChild(taskItem);
    console.log("Tarea añadida: " + tareaTexto);

    tareaInput.value = "";
    tareaInput.focus();
}
