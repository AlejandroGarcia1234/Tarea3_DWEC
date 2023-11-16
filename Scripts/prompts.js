export function obtenerNombre() {
    let nombre;
    let esTexto;
    do {
      nombre = prompt("Escribe tu nombre:");
      esTexto = /^[A-Za-z]+$/i.test(nombre);
  
      if (!esTexto) {
        nombre = prompt("Tu nombre debe estar compuesto de letras:");
        esTexto = /^[A-Za-z]+$/i.test(nombre);
      }
    } while (!esTexto);
    return nombre;
  }
  
  export function obtenerApellidos() {
    let apellidos;
    let esTexto;
    do {
      apellidos = prompt("Escribe tus apellidos:");
      esTexto = /[a-zA-ZÀ-ÖØ-öø-ÿ\s]+/i.test(apellidos);
  
      if (!esTexto) {
        apellidos = prompt("Tus apellidos deben estar compuestos de letras:");
        esTexto = /[a-zA-ZÀ-ÖØ-öø-ÿ\s]+/i.test(apellidos);
      }
    } while (!esTexto);
    return apellidos;
  }
  
  export function obtenerFechaNacimiento() {
    let fecha;
    let esFecha;
  
    do {
      fecha = prompt("Escribe tu fecha de nacimiento con formato DD/MM/AAAA:");
      esFecha = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])\/[0-9]+$/i.test(fecha);
  
      if (!esFecha) {
        fecha = prompt("Escriba en el formato dicho DD/MM/AAAA:");
        esFecha = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|[1][0-2])\/[0-9]+$/i.test(fecha);
      }
    } while (!esFecha);
    return fecha;
  }

  