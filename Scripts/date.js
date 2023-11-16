export function tiempo(fecha) {
    let tiempo = fecha;
  
    let [day, month, year] = tiempo.split("/");
    let fechaA = new Date();
  
    tiempo = fechaA.getFullYear() - year;
  
    if (month >= fechaA.getMonth()) {
      if (day > fechaA.getDate()) {
        tiempo -= 1;
      }
    }
    return tiempo;
  }
  export function estaciones(fecha) {
    const [day, month, year] = fecha.split("/").map(Number);
  
    // Invertir el orden de día y mes para que sea MM/DD/YYYY
    const formattedDate = `${month}/${day}/${year}`;
  
    const d = new Date(formattedDate);
  
  var seasonArray = [
      {name: 'Primavera', date: new Date(d.getFullYear(),2,(d.getFullYear() % 4 === 0) ? 19 : 20).getTime()},
      {name: 'Verano', date: new Date(d.getFullYear(),5,(d.getFullYear() % 4 === 0) ? 20 : 21).getTime()},
      {name: 'Otoño', date: new Date(d.getFullYear(),8,(d.getFullYear() % 4 === 0) ? 22 : 23).getTime()},
      {name: 'Invierno', date: new Date(d.getFullYear(),11,(d.getFullYear() % 4 === 0) ? 20 : 21).getTime()}
  ];
  
  const season = seasonArray.filter(({ date }) => date <= d).slice(-1)[0] || {name: "Invierno"}
  console.log(new Date(d).toLocaleDateString(), season.name); 
  
    
    return [season.name, d.getFullYear()];
  }