import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.getElementById("act")
const text = document.querySelector(".text")
const resetButton = document.getElementById("reset")

// Event Listeners ---------

actButton.addEventListener('click', updateGame)
resetButton.addEventListener('click', resetGame)

// Funtions AKA Where the magic happens ya heard------

// The Back Bone Of My Glorious Conquer👇
function handleAct(choice) {
  const data  = gameData.find(data => data.choice === choice)
  // console.log(data)
  text.textContent = data.text;
  let actionDropdown = "";
    data.actions.forEach(actions => {
      actionDropdown += `<option value="${actions}">${actions}</option>`
    })
  selector.innerHTML = actionDropdown;
  // console.log(actionDropdown)
}


// function handleActButton() {
//   // console.log("sanity")
//   // console.log(selector.value)
//   // gameData.choice === selector.value
//   if selector.value ==
//   handleAct();
// }

function updateGame() {
  // if (selector.value === "no.") {
  //   console.log("L")
  // } else {
  //   console.log("gg")
  // }
  handleAct(selector.value)
}

handleAct("Beginning");

function resetGame (){
  handleAct("Beginning")
}