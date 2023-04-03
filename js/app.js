import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.querySelector(".act")
const questionText = document.querySelector(".text")

// Event Listeners ---------


// Funtions AKA Where the magic happens ya heard------

function handleAct(choice) {
  questionText.textContent = gameData.filter(
    data => data.choice === choice
  )[0].text;
}

handleAct("Beginning");