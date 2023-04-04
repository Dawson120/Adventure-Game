import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.getElementById("act")
const resetButton = document.getElementById("reset")
const promptText = document.querySelector(".prompt")
// Event Listeners ---------

actButton.addEventListener('click', handleAct)
resetButton.addEventListener('click', resetGame)

// Funtions AKA Where the magic happens ya heard------

// The Back Bone Of My Glorious Conquer👇

let currentScene = gameData.beginning
handleAct()
console.log(selector.value)

function handleAct() {
  const selectedAction = selector.value;
  const nextScene = gameData[currentScene.actions[selectedAction]];
  if (nextScene) {
    currentScene = nextScene;
    promptText.textContent = currentScene.text;
    updateGame();
  } else {
    promptText.textContent = "Huh?";
  }
}

function resetGame() {
  currentScene = gameData.beginning;
  promptText.textContent = currentScene.text;
  updateGame();
}

function updateGame() {
  selector.innerHTML = "";

  for (const action in currentScene.actions) {
    const option = document.createElement("option");
    option.value = action;
    option.textContent = currentScene.actions[action];
    selector.appendChild(option);
  }
}

// function handleAct() {
//   const selectedAction = selector.value
//   const nextScene = gameData[currentScene.actons[selectedAction]]
//   // const data = gameData[currentScene]
//   promptText.textContent = data.text;
//   console.log(currentScene)
//   for (const [actionKey, actionText] of Object.entries(data.actions)){
//     const option = document.createElement("option")
//     option.value = actionKey
//     option.textContent = actionText
//     selector.appendChild(option)
//     }
//   console.log("hello")
// }

// function updateGame() {
//   currentScene = selector.value
//   handleAct()
// }


// function resetGame (){
//   handleAct("beginning")
// }

