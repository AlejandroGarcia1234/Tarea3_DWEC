export function newWindow() {

    const ventanaBtn = document.createElement('button')
    ventanaBtn.innerText = "Abrir ventana"
    document.body.appendChild(ventanaBtn)

    ventanaBtn.addEventListener("click", () => {
        window.location.href = "./newWindow.html"
    })


    const reiniciarBtn = document.createElement('button')
    reiniciarBtn.innerText = "Reiniciar"
    document.body.appendChild(reiniciarBtn)

    reiniciarBtn.addEventListener("click", () => {
        window.location.href = "./index.html"
    })
  }