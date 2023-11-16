import { tiempo, estaciones } from "./time.js";
export function printSaludo(nombre, apellidos, fecha) {

    let nombreCompleto = nombre + " " + apellidos;
    const [estacion, year,] = estaciones(fecha);
    document.open();
    document.write(
    `
    <link rel="stylesheet" href="/Styles/index.css">

    <h1>Práctica 3 - Dwec</h1>
    <hr>
    Buenos días, <strong>${nombre}</strong>.
    <br>
    Tu nombre completo (${nombreCompleto}) tiene <strong>${nombreCompleto.length}</strong> caracteres, incluidos espacios.
    <br>
    La <strong>primera letra "A"</strong> de tu nombre está en la posición <strong>${nombreCompleto.toLowerCase().indexOf('a') + 1}</strong>.
    <br>
    La <strong>última letra "A"</strong> de tu nombre está en la posición <strong>${nombreCompleto.toLowerCase().lastIndexOf('a') + 1}</strong>.
    <br>
    Tu nombre <strong>menos las tres primeras letras</strong> es <strong>${nombreCompleto.slice(3)}</strong>.
    <br>
    Tu nombre todo en <strong>MAYÚSCULAS</strong> es <strong>${nombreCompleto.toUpperCase()}</strong>.
    <br>
    Tu <strong>edad</strong> es <strong>${tiempo(fecha)}</strong> años.
    <br>
    Naciste un feliz día de <strong>${estacion}</strong> del año <strong>${year}</strong>
    <br>
    El <strong>coseno de 180</strong> es <strong>${Math.floor(Math.cos(180))}</strong>
    <br>
    El número mayor de <strong>(34, 67, 23, 75, 35, 19)</strong> es <strong>${Math.max(34, 67, 23, 75, 35, 19)}</strong>
    <br>
    Ejemplo de número aleatorio entre 0 y 100: <strong>${Math.floor(Math.random() * 101)}</strong>
    <br><br>
    <button type="button" id= "newWindow">Abrir Ventana</button>
    <button type="button" id="reset">Reiniciar</button>
    `);
document.close();

}