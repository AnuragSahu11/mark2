const PromptSync = require("prompt-sync");
const prompt = PromptSync();
let score = 0
const questions = [
  {
    question: "Total number of special titans in the series? ",
    answer: "9",
  },
  {
    question: "What is the name of Eren's special titan? ",
    answer: "Attack titan",
  },
  {
    question: "How many layers of walls are there? ",
    answer: "3",
  },
  {
    question: "Which is the biggest special titan? ",
    answer: "colossal titan",
  },
  {
    question: "Who holds the power of armour titan? ",
    answer: "Reiner",
  },
];

function initialize(){
    console.log('Welcome to the Attack on Titan quiz: ')
    let name = prompt('Please enter ypur name: ').toUpperCase()
    if (parseInt(name) || name === "") {
        console.log("Please enter valid detail");
        console.log("................");
        initialize();
      } else {
        question(name);
      }
    }

function question(text){
    console.log(`Lets start the quiz ${text}`)
    questions.forEach(item => {
        let ans = prompt(item.question)
        if(item.answer.toUpperCase() === ans.toUpperCase()){
            console.log('Correct answer')
            score++
        }
    })
}

function showScores(int){
    console.log(`Your score is ${int}`)
}



    initialize();
    showScores(score)
