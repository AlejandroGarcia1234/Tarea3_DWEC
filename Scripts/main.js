import { obtenerNombre, obtenerApellidos, obtenerFechaNacimiento } from "./prompts.js";
import { mostrarSaludo } from "./data.js";
import { abrirNuevaVentana } from "./windowBtn.js";
import { reiniciar } from "./resetBtn.js";

document.addEventListener("DOMContentLoaded", () => {
  const nombre = obtenerNombre();
  const apellidos = obtenerApellidos();
  const fechaNacimiento = obtenerFechaNacimiento();

  mostrarSaludo(nombre, apellidos, fechaNacimiento);

  abrirNuevaVentana();

  reiniciar();
});
