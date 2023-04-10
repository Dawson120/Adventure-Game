import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.getElementById("act")
const resetButton = document.getElementById("reset")
const promptText = document.querySelector(".prompt")
const backButton = document.getElementById("back")

// Event Listeners ---------

actButton.addEventListener('click', handleAct)
resetButton.addEventListener('click', resetGame)
backButton.addEventListener('click', goBack)

// Funtions AKA Where the magic happens ya heard------

// The Back Bone Of My Glorious Conquest👇

let currentScene = gameData.beginning
let previousScene = null
resetGame()

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
  previousScene = currentScene
  const nextScene = gameData[currentScene.actions[selectedAction]]
  if (nextScene) {
    currentScene = nextScene
    promptText.textContent = currentScene.text
    updateGame()
    
  } else {
    promptText.textContent = "You're either Dead or in the Backrooms"
  }
  updateGame()
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
  document.body.style.backgroundImage = "url(Assets/Trees1.png)";
  promptText.classList.remove("animate__animated", "animate__wobble")
  promptText.classList.remove("animate__animated", "animate__bounceIn")
  selector.disabled = false
  backButton.disabled = false
  updateGame()
}

function updateGame() {
  selector.innerHTML = ""

  for (const action in currentScene.actions) {
    const option = document.createElement("option")
    option.value = action
    option.textContent = currentScene.actions[action]
    selector.appendChild(option)
  }
  promptText.classList.remove("animate__animated", "animate__wobble")
  promptText.classList.remove("animate__animated", "animate__bounceIn")
}

function gameOver() {
  promptText.textContent = "Seriously?"
  promptText.classList.add("animate__animated", "animate__wobble")
  const sound = new Audio("Sounds/033_Denied_03.wav")
  sound.play()
  selector.disabled = true
  backButton.disabled = true
}
function winCondition() {
  promptText.textContent = "You Won!"
  promptText.classList.add("animate__animated", "animate__bounceIn")
  const sound = new Audio("Sounds/winfantasia-6912.mp3")
  sound.play()
  backButton.disabled = true
  selector.disabled = true
}

function playSound() {
  let sound = currentScene.Sound
  if (sound) {
    sound.play()
  }
}

function setBackground() {
  let background = currentScene.Background
  if (background) {
    document.body.style.backgroundImage = currentScene.Background
  }
  return
}
