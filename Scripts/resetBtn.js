import { askNombre, askApellidos, askFecha } from "./prompts.js";
import { printSaludo } from "./data.js";
import { newWindow } from "./windowBtn.js";
export function reset() {
  const button = document.getElementById("reset");

  button.addEventListener("click", () => {
    const nombre = askNombre();
    const apellidos = askApellidos();
    const fecha = askFecha();

    printSaludo(nombre, apellidos, fecha);

    newWindow();
  });
}