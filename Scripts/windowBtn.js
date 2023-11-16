export function openNewWindow() {
    const button = document.getElementById("newWindow");
  
    button.addEventListener("click", () => {
      const windowFeatures = "location=yes,resizable=no,width=1000,height=800";
      const newWindow = window.open(
        "Templates/exteriorWindow.html",
        "Segunda Parte tarea - Ignacio Carmona González",
        windowFeatures
      );
  
      // La página tiene que cargar porque si no el URl es "About:blank"
      newWindow.addEventListener("load", () => {
        newWindow.document.write(`
          <title>Ventana Exterior</title>
          <h3>Ejemplo de ventana nueva</h3>
          <p> <strong>URL Completa:</strong> ${newWindow.location.href} </p>
          <p><strong>Protocolo utilizado:</strong> ${newWindow.location.protocol} </p>
          <iframe src="https://http.cat/" style="height:800px;width:600px;" title="Iframe Example"></iframe>
          <br>
          <button id="cerrarVentana">Cerrar Ventana</button>
          `);
  
        const cerrarVentanaButton =
          newWindow.document.getElementById("cerrarVentana");
          cerrarVentanaButton.addEventListener("click", () => {
          newWindow.close();
        });
      });
    });
  }