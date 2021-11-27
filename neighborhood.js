const randomBtn = document.querySelector("#random-btn")
const crookedHam = document.querySelector("#crooked-ham")
const cantwell = document.querySelector("#cantwell")
const twoStones = document.querySelector("#two-stones")
const metroPub = document.querySelector("#metro")
const sushiYama = document.querySelector("#sushi-yama")
const carusos = document.querySelector("#carusos")
const restArray = [crookedHam, cantwell, twoStones, metroPub, sushiYama, carusos]

randomBtn.addEventListener("click", () => {
    const random = Math.floor(Math.random() * restArray.length)
    window.open(restArray[random])
})
