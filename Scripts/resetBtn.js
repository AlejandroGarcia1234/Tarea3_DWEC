import { askNombre, askApellidos, askFecha } from "./userPrompts.js";
import { printSaludo } from "./print.js";
import { openNewWindow } from "./window.js";
export function reset() {
  const button = document.getElementById("reset");

  button.addEventListener("click", () => {
    const nombre = askNombre();
    const apellidos = askApellidos();
    const fecha = askFecha();

    printSaludo(nombre, apellidos, fecha);

    openNewWindow();
  });
}