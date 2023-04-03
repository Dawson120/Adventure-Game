import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.querySelector(".act")
const questionText = document.querySelector(".text")

// Event Listeners ---------


// Funtions AKA Where the magic happens ya heard------

// function handleAct(choice) {
//   questionText.textContent = gameData.filter(
//     data => data.choice === choice
//   )[0].text;
//   selector.innerHTML = gameData.filter(
//     data => data.choice === choice)[0].actions.map(
      // create map funtion to hold action array
//     )
// }

function handleAct(choice) {
  const data  = gameData.find(data => data.choice === choice)
  // console.log(data)
}

handleAct("Beginning");