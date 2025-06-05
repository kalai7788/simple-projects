// Simple Quiz Score Calculator
const prompt = require("prompt-sync")();

let score = 0;
let question1 =prompt( "Q1: What is the famous temple in Madurai? ")
if (question1.toLowerCase()==="meenakshi temple"){
    score += 1;
    console.log("correct answer");

}
else {
     console.log("Wrong answer");
}
let question2 =prompt( "Q2: What is the famous food in Madurai? ")
if (question2.toLowerCase()==="kari dosa"){
    score += 1;
     console.log("correct answer");

}
else {
     console.log("Wrong answer");
}
let question3 =prompt( "Q3: What is the famous festival in Madurai? ")
if (question3.toLowerCase()==="chithirai thiruvizha"){
    score += 1;
     console.log("correct answer");

}
else {
     console.log("Wrong answer");
}
let question4 =prompt( "Q4: Madurai is also known as  ____? ");
if (question4.toLowerCase()==="temple city"){
    score += 1;
     console.log("correct answer");

}
else {
     console.log("Wrong answer");
}
let question5 =prompt( " Q4: Which river flows through Madurai?  ");
if (question5.toLowerCase()==="vaigai river"){
    score += 1;
     console.log("correct answer");

}
else {
     console.log("Wrong answer");
}

console.log(`Your score is ${score} out of 5`); 

