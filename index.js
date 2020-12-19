var readlineSync = require("readline-sync");
const chalk = require("chalk"); 
var score= 0;

var log = console.log;

log(chalk.yellow("Hey Kuldeep Here  it's a quize about me \n "));
var userAnswer = readlineSync.question(chalk.bgRed("To Play Please Type Your Name  "));

log(('Welcome'+ "  " +chalk.underline.green(userAnswer) + '!'))


var q0 = {
  question: "What is My Full Name?  \n",
  answer: "Kuldeep Singh Rathore" 
}
var q1 = {
  question: "Where I am Located? \n",
  answer: "Jodhpur"
}
var q2= {
  question: "Do I like Anime or Manga? \n",
  answer:"yes"
}
var q3 = {
  question:"Do I Really Want to Become A Programmer? \n",
  answer: "yes"

}
var  q4 = {
  question: "SuperHero Character I like the Most is \n ",
  answer: "Batman"
}
var q5 = {
  question: "which food i like the most \n",
  answer:"Home made food"
}

var questionList = [q0,q1,q2,q3,q4, q5];

function quiz(arrayOfQuestions){
for(let i=0; i<arrayOfQuestions.length; i++){
  var currentQuestion = arrayOfQuestions[i];
  var currentAnswer = arrayOfQuestions[i].answer;
  var userAnswers =readlineSync.question(chalk.bgRed(currentQuestion.question));
 
if(userAnswers.toLowerCase() === currentAnswer.toLowerCase() ){
 score++;
 log(chalk.yellow('Score is: ' + score));
}else{
  score--;
 log(chalk.yellow('Score is: ' + score));

}
}
}

quiz(questionList);
  log(chalk.red.bold("You Scored: ")+ chalk.bgGreen.black(score ));


