import gameData from "./options.js"
// Constants--------

const selector = document.querySelector(".selector")
const actButton = document.querySelector(".act")
const text = document.querySelector(".text")

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
  text.textContent = data.text;
  let actionDropdown = "";
    data.actions.forEach(actions => {
      actionDropdown += `<option value="${actions}">${actions}</option>`
    })
  selector.innerHTML = actionDropdown;
  console.log(actionDropdown)
}

handleAct("Beginning");