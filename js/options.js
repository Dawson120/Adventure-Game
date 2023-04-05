

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
      a: "Yes!",
      b: "No",
    }
  },
  "No": {
    text: "Fine we'll sit here.",
    actions: {
      a: "",
    }
  },
  "Yes!": {
    text: "You are a seasoned monster hunter, well known for your skills and bravery. You are on a journey to track down a terrifying creature that has been causing havoc in the nearby villages. As you travel, you encounter various obstacles and make important decisions that will determine your success in hunting down the monster.",
    actions: {
      a: "Continue Left.",
      b: "Continue Right.",
      c: "Sit and do nothing."
    }
  },
    "Continue Left.": {
      text: "text",
      actions: {
        a: " ",
        b: " ",
        c: " "
      }
    },
    "Continue Right.": {
      text: "You go right lol",
      actions: {
        a: " ",
        b: " ",
        c: " "
      }
    },
    "Sit and do nothing.": {
      text: "Great I hope you feel great about yourself. There're mosters out there pillaging and here you are. ",
      actions: {
        lose: "Cry.",
      }
    },
    "Blank": {
      text: "text",
      actions: {
        a: " ",
        b: " ",
        c: " "
      }
    },
    "Blank": {
      text: "text",
      actions: {
        a: " ",
        b: " ",
        c: " "
      }
    },
    "Blank": {
      text: "text",
      actions: {
        a: " ",
        b: " ",
        c: " "
      }
    },
    "Blank": {
      text: "text",
      actions: {
        a: " ",
        b: " ",
        c: " "
      }
    },
}
export default gameData