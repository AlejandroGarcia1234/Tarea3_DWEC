export function obtenerNombre() {

    let nombre;
    let esTexto = false;
  
    while (!esTexto) {
      // Solicita al usuario que escriba su nombre
      nombre = prompt("Escriba su nombre:");
      // Verifica si el nombre contiene solo letras
      esTexto = /^[A-Za-z]+$/i.test(nombre);
      // Si no es un texto válido, solicita al usuario que lo escriba nuevamente
      if (!esTexto) {
        nombre = prompt("Vuelva a escribirlo. Su nombre solo puede contener letras:");
        esTexto = /^[A-Za-z]+$/i.test(nombre);
      }
    }
  
    return nombre;
  }
  

  export function obtenerApellidos() {
    
    let apellidos;
    let esTexto = false;
  
    while (!esTexto) {
      // Solicita al usuario que escriba sus apellidos
      apellidos = prompt("Escriba sus apellidos:");
      // Verifica si los apellidos contienen solo letras y espacios
      esTexto = /[a-zA-ZÀ-ÖØ-öø-ÿ\s]+/i.test(apellidos);
      // Si no son un texto válido, solicita al usuario que los escriba nuevamente
      if (!esTexto) {
        apellidos = prompt("Vuelva a escribirlos. Sus apellidos solo pueden contener letras:");
        esTexto = /[a-zA-ZÀ-ÖØ-öø-ÿ\s]+/i.test(apellidos);
      }
    }
  
    return apellidos;
  }

  
  export function obtenerFechaNacimiento() {

    let fecha;
    let esFecha = false;
     
    while (!esFecha) {
      // Solicita al usuario que escriba su fecha de nacimiento en formato DD/MM/AAAA
      fecha = prompt("Escriba su fecha de nacimiento con formato DD/MM/AAAA:");
      // Verifica si la fecha sigue el formato correcto
      esFecha = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])\/[0-9]+$/i.test(fecha);
      // Si no es una fecha válida, solicita al usuario que la escriba nuevamente
      if (!esFecha) {
        fecha = prompt("Vuelva a escribir la fecha. Respete el formato DD/MM/AAAA:");
        esFecha = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])\/[0-9]+$/i.test(fecha);
      }
    }
  
    return fecha;
  }
  
  