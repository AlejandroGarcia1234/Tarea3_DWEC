export function calcularEdad(fechaNacimiento) {
    // Convierte la fecha de nacimiento en un array separado por día, mes y año
    const [dia, mes, anio] = fechaNacimiento.split("/");
    const fechaActual = new Date();
    let edad = fechaActual.getFullYear() - anio;
  
    if (mes >= fechaActual.getMonth() + 1) { 
      if (dia > fechaActual.getDate()) {
        // Reduce la edad si el día de nacimiento es mayor al día actual
        edad--;
      }
    }
  
    return edad;
  }

  
  export function obtenerEstaciones(fecha) {
    // Convierte la fecha en un array separado por día, mes y año y los convierte a números
    const [dia, mes, anio] = fecha.split("/").map(Number);
    // Crea una fecha formateada en el formato MM/DD/AAAA
    const fechaFormateada = new Date(`${mes}/${dia}/${anio}`);
    // Define un array con las estaciones del año y sus fechas
    const temporadaArray = [
      { name: 'Primavera', date: new Date(anio, 2, (anio % 4 === 0) ? 19 : 20).getTime() },
      { name: 'Verano', date: new Date(anio, 5, (anio % 4 === 0) ? 20 : 21).getTime() },
      { name: 'Otoño', date: new Date(anio, 8, (anio % 4 === 0) ? 22 : 23).getTime() },
      { name: 'Invierno', date: new Date(anio, 11, (anio % 4 === 0) ? 20 : 21).getTime() }
    ];
  
    // Filtra y devuelve la estación correspondiente a la fecha proporcionada
    const temporada = temporadaArray.filter(({ date }) => date <= fechaFormateada.getTime()).slice(-1)[0] || { name: "Invierno" };
    console.log(fechaFormateada.toLocaleDateString(), temporada.name);
  
    return [temporada.name, anio];
  }
  
 