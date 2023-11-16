import { askNombre, askApellidos, askFecha } from "./userPrompts.js";
import { printSaludo } from "./print.js";
import { openNewWindow } from "./window.js";
import { reset } from "./resetButton.js";

document.addEventListener("DOMContentLoaded", () => {
  const nombre = askNombre();
  const apellidos = askApellidos();
  const fecha = askFecha();


  printSaludo(nombre, apellidos, fecha);

  openNewWindow();

  reset();
});