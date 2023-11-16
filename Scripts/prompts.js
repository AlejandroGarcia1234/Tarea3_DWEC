export function obtenerNombre() {

    let nombre;
    let valido = false;
  
    while (!valido) {
      // Solicita al usuario que escriba su nombre
      nombre = prompt("Escriba su nombre:");
      // Verifica si el nombre contiene solo letras
      valido = /^[A-Za-z]+$/i.test(nombre);
      // Si no es un texto válido, solicita al usuario que lo escriba nuevamente
      if (!valido) {
        nombre = prompt("Vuelva a escribirlo. Su nombre solo puede contener letras:");
        valido = /^[A-Za-z]+$/i.test(nombre);
      }
    }
  
    return nombre;
  }
  

  export function obtenerApellidos() {
    
    let apellidos;
    let valido = false;
  
    while (!valido) {
      // Solicita al usuario que escriba sus apellidos
      apellidos = prompt("Escriba sus apellidos:");
      // Verifica si los apellidos contienen solo letras y espacios
      valido = /[a-zA-ZÀ-ÖØ-öø-ÿ\s]+/i.test(apellidos);
      // Si no son un texto válido, solicita al usuario que los escriba nuevamente
      if (!valido) {
        apellidos = prompt("Vuelva a escribirlos. Sus apellidos solo pueden contener letras:");
        valido = /[a-zA-ZÀ-ÖØ-öø-ÿ\s]+/i.test(apellidos);
      }
    }
  
    return apellidos;
  }

  
  export function obtenerFechaNacimiento() {

    let fecha;
    let valido = false;
     
    while (!valido) {
      // Solicita al usuario que escriba su fecha de nacimiento en formato DD/MM/AAAA
      fecha = prompt("Escriba su fecha de nacimiento con formato DD/MM/AAAA:");
      // Verifica si la fecha sigue el formato correcto
      valido = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])\/[0-9]+$/i.test(fecha);
      // Si no es una fecha válida, solicita al usuario que la escriba nuevamente
      if (!valido) {
        fecha = prompt("Vuelva a escribir la fecha. Respete el formato DD/MM/AAAA:");
        valido = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])\/[0-9]+$/i.test(fecha);
      }
    }
  
    return fecha;
  }
  
  