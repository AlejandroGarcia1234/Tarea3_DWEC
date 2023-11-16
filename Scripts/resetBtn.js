import { obtenerNombre, obtenerApellidos, obtenerFechaNacimiento } from "./prompts.js";
import { mostrarSaludo } from "./data.js";
import { abrirNuevaVentana } from "./windowBtn.js";

export function reiniciar() {
  const botonReiniciar = document.getElementById("reset");

  botonReiniciar.addEventListener("click", () => {
    const nombre = obtenerNombre();
    const apellidos = obtenerApellidos();
    const fechaNacimiento = obtenerFechaNacimiento();

    mostrarSaludo(nombre, apellidos, fechaNacimiento);

    abrirNuevaVentana();
  });
}