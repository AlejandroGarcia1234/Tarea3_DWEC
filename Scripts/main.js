import { askNombre, askApellidos, askFecha } from "./prompts.js";
import { printSaludo } from "./data.js";
import { newWindow } from "./windowBtn.js";
import { reset } from "./resetBtn.js";

document.addEventListener("DOMContentLoaded", () => {
  const nombre = askNombre();
  const apellidos = askApellidos();
  const fecha = askFecha();


  printSaludo(nombre, apellidos, fecha);

  newWindow();

  reset();
});