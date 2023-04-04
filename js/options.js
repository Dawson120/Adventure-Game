

// const gameData = [
//   {choice: "Beginning", 
//   text: "Would You Like To Play?", 
//   actions: ["[Yes]", "[No]"]},
//   {choice: "[Yes]", 
//   text: "They tell you to buzz off", 
//   actions: [" "," "]},
// ]


const gameData = {
  beginning: {
    text: "Ready To Start?",
    actions: {
      a: "Yes",
      b: "No",
    }
  },
  Yes: {
    text: "blah two",
    actions: {
      a: "Deez",
      b: "Deez",
      c: "Deez"
    }
  },
  No: {
    text: "blah two",
    actions: {
      a: " ",
      b: " ",
      c: " "
    }
  },
}
export default gameData