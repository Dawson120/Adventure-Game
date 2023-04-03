import gameData from options.js
// Constants--------

const selector = document.querySelector(".Selector")
const actButton = document.querySelector(".act")
const questionText = document.querySelector(".Text")

// Event Listeners ---------


// Funtions AKA Where the magic happens ya heard------

function handleAct() {
  selector.textContent = gameData.text
}

handleAct();