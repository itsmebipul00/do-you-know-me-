var readlineSync = require('readline-sync')

var score= 0
var highscores= [
  {
    name: 'Bipul',
    score: 2
  },
  {
    name: 'Tunav',
    score: 3
  }
]

var questions= [
  {
    question: 'What is my age? ',
    answer: '20'
  },
  {
    question: 'Where do I live? ',
    answer: 'Banglore'
  },
  {
    question: 'What is my favorite sport? ',
    answer: 'Cricket'
  }
]

function welcome(){
  var userName= readlineSync.question('What is your name? ')
  console.log('Welcome '+ userName)
  console.log('Lets play DO YOU KNOW ME? ')
}
welcome()

function game(){
  for(var i=0; i<questions.length; i++){
    play(questions[i].question, questions[i].answer)
  }
}
game()

function play(question, correctAns){
  var userAns= readlineSync.question(question)
  if(userAns===correctAns){
    console.log('Correct Answer')
    score++
  }else{
    console.log('Incorrect Answer')
  }
  console.log('Current score: ', score)
  console.log('************************')
}


function showScore(){
  console.log('Total Score: ', score)
  console.log('If your score is higher than the highscore DM me. Highscores:')
  highscores.map(score => console.log(score.name +": "+ score.score))
}
showScore()


