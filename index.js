var readline = require("readline-sync");
var score=0;
var userAnswer = readline.question("Hey! I am Shubham. What's your name? \n");
console.log("Hi " + userAnswer + ", Welcome to DO YOU KNOW SHUBHAM !");

var questionOne = {
  question: "What's my full name?\n",
  answer: "Shubham Khuntia",
}

var questionTwo = {
  question: "Where did I do my B.Tech from? \n",
  answer: "KIIT University",
}


var questionThree = {
  question: "Which B.Tech batch do I belong to? \n",
  answer: "2023",
}

var questionFour = {
  question: "Am I Male? \n",
  answer: "Yes",
}

var questionFive = {
  question: "Am I Not Female? \n",
  answer: "Yes",
}
function play(question, answer){
  var quizAnswer = readline.question(question);
  if(quizAnswer.toUpperCase()===answer.toUpperCase()){
    score=score+1;
    console.log("That's cool dude !!\n");
  } else {
    console.log("OOPS, You lost me here !");
    console.log("Answer : " + answer + "\n");
  } 
}
var arr = [questionOne, questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<5;i++){
  play(arr[i].question,arr[i].answer);
}
console.log("Current score", score);
if(score==5){
  console.log("Woo, You rocked it . You scored full!")
} else {
  console.log("You can try again. Visit my linkedn to know more about me : https://www.linkedin.com/in/shubhamkhuntia/");
}