const input = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");

// 🔹 Cargar tareas guardadas
const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas) {
  lista.innerHTML = tareasGuardadas;
}

// 🔹 Agregar nueva tarea
btnAgregar.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  crearTarea(input.value);
  input.value = "";
  guardar();
});

// 🔹 Crear una tarea con checkbox
function crearTarea(texto) {
  const li = document.createElement("li");

  const check = document.createElement("input");
  check.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = texto;

  // Cuando se marque o desmarque el checkbox
  check.addEventListener("change", () => {
    li.classList.toggle("completada", check.checked);
    guardar();
  });

  li.appendChild(check);
  li.appendChild(span);
  lista.appendChild(li);
}

// 🔹 Guardar lista completa en localStorage
function guardar() {
  localStorage.setItem("tareas", lista.innerHTML);
}
