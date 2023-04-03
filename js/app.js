import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.getElementById("act")
const text = document.querySelector(".text")

// Event Listeners ---------

actButton.addEventListener('click', handleActButton)

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
  text.textContent = data.text;
  let actionDropdown = "";
    data.actions.forEach(actions => {
      actionDropdown += `<option value="${actions}">${actions}</option>`
    })
  selector.innerHTML = actionDropdown;
  // console.log(actionDropdown)
}


handleAct("Beginning");


function handleActButton() {
  console.log("sanity")
}