/* Modo botão. Ele vai disparar uma ação */
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else
  //  html.classList.add('light')
  //  }

  // Trocando de imagem;
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/Tha sorrindo.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Tha seria.png")
  }
}
