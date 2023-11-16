export function calcularEdad(fecha) {
    let tiempo = fecha;
    let [day, month, year] = tiempo.split("/");
    let fechaActual = new Date();
    tiempo = fechaActual.getFullYear() - year;
    
    if (month >= fechaActual.getMonth()) {
      if (day > fechaActual.getDate()) {
        tiempo -= 1;
      }
    }
    return tiempo;
  }
  
  export function obtenerEstaciones(fecha) {
    const [day, month, year] = fecha.split("/").map(Number);
    
    // Invertir el orden de día y mes para que sea MM/DD/YYYY
    const formattedDate = `${month}/${day}/${year}`;
    
    const fechaFormateada = new Date(formattedDate);
    
    var temporadaArray = [
      {name: 'Primavera', date: new Date(fechaFormateada.getFullYear(), 2, (fechaFormateada.getFullYear() % 4 === 0) ? 19 : 20).getTime()},
      {name: 'Verano', date: new Date(fechaFormateada.getFullYear(), 5, (fechaFormateada.getFullYear() % 4 === 0) ? 20 : 21).getTime()},
      {name: 'Otoño', date: new Date(fechaFormateada.getFullYear(), 8, (fechaFormateada.getFullYear() % 4 === 0) ? 22 : 23).getTime()},
      {name: 'Invierno', date: new Date(fechaFormateada.getFullYear(), 11, (fechaFormateada.getFullYear() % 4 === 0) ? 20 : 21).getTime()}
    ];
    
    const temporada = temporadaArray.filter(({ date }) => date <= fechaFormateada).slice(-1)[0] || {name: "Invierno"};
    console.log(new Date(fechaFormateada).toLocaleDateString(), temporada.name);
      
    return [temporada.name, fechaFormateada.getFullYear()];
  }
  
 