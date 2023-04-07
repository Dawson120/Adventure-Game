
const gameData = {
  beginning: {
    text: "Ready To Start?",
    actions: {
      a: "Yes!",
      lose: "No",
    }
    ,Background: "url(Assets/Trees 1.png)"
  },
  "No": {
    text: "Fine we'll sit here.",
    actions: {
    }
    ,Sound: new Audio ("")
  },
  "Yes!": {
    text: "You are a seasoned monster hunter, well known for your skills and bravery. You are on a journey to track down a terrifying creature that has been causing havoc in the nearby villages. As you travel, you encounter various obstacles and make important decisions that will determine your success in hunting down the monster.",
    actions: {
      a: "Go left down the pathway.",
      b: "Go right down the pathway.",
      c: "Sit and do nothing."
    },
    Sound: new Audio("Sounds/013_Confirm_03.wav")
    ,Background: "url(Assets/Beach.png)"
  },
  "Sit and do nothing.": {
    text: "Great I hope you feel great about yourself. There are monsters out there pillaging and here you are. ",
    actions: {
      lose: "Cry.",
      win: "Reflect."
    }
    ,Sound: new Audio ("Sounds/45_Landing_01.wav")
    ,Background: "url(Assets/Clearing 4.png)"
  },
    "Go left down the pathway.": {
      text: "As you continue left down the pathway you are overwhelmed with the sound of the russtling trees around you. You come upon a barrelled over tree covered in deep scratches. They look fresh....",
      actions: {
        lose: "Screw that I'm going home.",
        b: "Crawl over the tree.",
        c: "Crawl under the tree."
      }
      ,Sound: new Audio ("Sounds/8 Bit Footsteps - Sound Effect.mp3")
      ,Background: "url(Assets/Clearing 4.png)"
    },
    "Crawl over the tree.": {
      text: "You shimmy your way over the tree. As you drop to your feet you are met by a towering creature. It has eyes black as marble and hair matted as wet grass.",
      actions: {
        a: "Discuss the socioeconimal climate of the word with it.",
        b: "KILL!",
        c: "Stare."
      }
      ,Sound: new Audio ("Sounds/30_Jump_03.wav")
    },
    "Crawl under the tree.": {
      text: "You shimmy your way under the tree. As you come to your feet you are met by a towering creature. It has eyes black as marble and hair matted as wet grass.",
      actions: {
        a: "Discuss the socioeconimal climate of the word with it.",
        b: "KILL!",
        c: "Stare."
      }
      ,Sound: new Audio ("Sounds/03_Step_grass_03.wav")
    },
    "Discuss the socioeconimal climate of the word with it.": {
      text: "Turns out that the giant sloth like creature is pretty versed in the going ons of the world. You guys have a pleasant chat and become closer as friends.",
      actions: {
        a: "NOW KILL!",
        b: "Seduce",
      }
      ,Sound: new Audio ("")
    },
    "NOW KILL!": {
      text: "Its dead now.....You're a goddamned monster.",
      actions: {
        lose: "so?",
        win: "Father Forgive Me For I have sinned",
      }
      ,Sound: new Audio ("Sounds/22_Slash_04.wav")
    },
    "KILL!": {
      text: "You effortlessesly cleave through the beast. Almost too easily. Oh well beast is dead.",
      actions: {
        win: "Return Home triumphetly",
      }
      ,Sound: new Audio ("Sounds/22_Slash_04.wav")
    },
    "Stare.": {
      text: "Um hello?",
      actions: {
        a: "Discuss the socioeconimal climate of the word with it.",
        b: "KILL!",
        c: "Stare."
      }
      ,Sound: new Audio ("Sounds/39_Block_03.wav")
    },
    "Go right down the pathway.": {
      text: "There's a sign?",
      actions: {
        a: "Read Sign.",
        b: "Go left down the pathway.",
        c: "Sit and do nothing."
      }
      ,Sound: new Audio ("Sounds/8 Bit Footsteps - Sound Effect.mp3")
    },
    "Read Sign.": {
      text: `"The developer hasnt yet finished this part of the game soooooo......yeah."`,
      actions: {
        a: "Go left down the pathway.",
        b: "Sit and do nothing.",
      }
      ,Sound: new Audio ("Sounds/45_Landing_01.wav")
    },
    "Seduce": {
      text: "It's super effective.",
      actions: {
        a: "Blow Kisses",
        b: "Instill False Sense of Security Upon The Monster",
      }
      ,Sound: new Audio ("Sounds/051_use_item_01.wav")
    },
    "Seduce": {
      text: "It's super effective.",
      actions: {
        a: "Blow Kisses",
        b: "Instill False Sense of Security Upon The Monster",
      }
      ,Sound: new Audio ("Sounds/051_use_item_01.wav")
    },
}
export default gameData