const input = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas");


const tareasGuardadas = localStorage.getItem("tareas");
if (tareasGuardadas) {
  lista.innerHTML = tareasGuardadas;
}


btnAgregar.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  crearTarea(input.value);
  input.value = "";
  guardar();
});


function crearTarea(texto) {
  const li = document.createElement("li");

  const check = document.createElement("input");
  check.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = texto;

  
  check.addEventListener("change", () => {
    li.classList.toggle("completada", check.checked);
    guardar();
  });

  li.appendChild(check);
  li.appendChild(span);
  lista.appendChild(li);
}

function guardar() {
  localStorage.setItem("tareas", lista.innerHTML);
}
