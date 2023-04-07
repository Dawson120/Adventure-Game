import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.getElementById("act")
const resetButton = document.getElementById("reset")
const promptText = document.querySelector(".prompt")
const backButton = document.getElementById("back")
const backGrnd = document.getElementById("body")

// Event Listeners ---------

actButton.addEventListener('click', handleAct)
resetButton.addEventListener('click', resetGame)
backButton.addEventListener('click', goBack)

// Funtions AKA Where the magic happens ya heard------

// The Back Bone Of My Glorious Conquest👇

let currentScene = gameData.beginning
let previousScene = null;
// updateGame(gameData.beginning)

function handleAct() {
  const selectedAction = selector.value;    
  if (selectedAction === 'lose') {
    gameOver()
    return;
  }
  if (selectedAction === 'win') {
    winCondition()
    return;
  }
  previousScene = currentScene;
  const nextScene = gameData[currentScene.actions[selectedAction]];
  if (nextScene) {
    currentScene = nextScene;
    promptText.textContent = currentScene.text;
    updateGame();
    
  } else {
    promptText.textContent = "You're either Dead or in the Backrooms";
  }
  playSound()
  setBackground()
}

function goBack () {
  if (previousScene) {
    currentScene = previousScene;
    promptText.textContent = currentScene.text
    updateGame()
  }
}

function resetGame() {
  currentScene = gameData.beginning;
  promptText.textContent = currentScene.text;
  updateGame();
  setBackground()
  console.log("reset")
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

function gameOver() {
  promptText.textContent = "Seriously?";
  console.log("L");
  const sound = new Audio("Sounds/033_Denied_03.wav");
  sound.play();
}
function winCondition() {
  promptText.textContent = "You Won!";
  console.log("W")
  const sound = new Audio("Sounds/winfantasia-6912.mp3");
  sound.play();
}

function playSound() {
  let sound = currentScene.Sound
  if (sound) {
    sound.play();
  }
}

function setBackground() {
  const backgroundImage = document.querySelector('body');
  backgroundImage.style.backgroundImage = selectedAction.Background;
  console.log('backgrnd')
}