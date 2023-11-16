export function abrirNuevaVentana() {
    // Crear botón para abrir nueva ventana
    const botonVentana = document.createElement('button');
    botonVentana.innerText = "Abrir ventana";
    document.body.appendChild(botonVentana);
  
    botonVentana.addEventListener("click", () => {
      window.location.href = "./newWindow.html";
    });
    // Crear botón para reiniciar
    const botonReiniciar = document.createElement('button');
    botonReiniciar.innerText = "Reiniciar";
    document.body.appendChild(botonReiniciar);
  
    botonReiniciar.addEventListener("click", () => {
      window.location.href = "./index.html";
    });
  }