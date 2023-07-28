function toggleMode() {
  const html = document.documentElement

  // acionar variaveis dark e light
  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem de perfil
  if (html.classList.contains("light")) {
    // se tiver lightmode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Retrato do autor do site, fundo degrade, vestido com jaqueta preta e óculos de sol"
    )
  } else {
    // se tiver darkmode, manter imagem original
    img.setAttribute("src", "./assets/avatar-dark.png")
    img.setAttribute(
      "alt",
      "Retrato do autor do site, fundo amarelo, vestido camiseta preta e óculos de grau"
    )
  }
}
