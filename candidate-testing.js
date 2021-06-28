const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswer = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswer = [""];
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
    candidateName = input.question("What is your name? ")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for(let i = 0; i < question.length; i++ ){
      candidateAnswer[i] = input.question(question[i] )

      console.log(`Your answer was: ${candidateAnswer[i]} \nThe Correct Answer was: ${correctAnswer[i]}.\n`)
  }

    //console.log(input.question(question[i]));

}
  
function gradeQuiz(candidateAnswers) {
    //this section is trying to compare the candidateAnswer and correctAnswer to store it in a new array. This new array will be compared to the questions array to get the percentage of correct answers. 
      let = candidateAnswers = 0;

      for(let i = 0; i < question.length; i++){
        if (`${candidateAnswer[i]}` == `${correctAnswer[i]}`){
         //if(candidateAnswer[i].toUppercase === correctAnswer[i].toUppercase) {
          candidateAnswers +=1;
        }
       // console.log(candidateAnswers)
      }  let grade = (candidateAnswers/question.length)*100;
        
        if (grade >= 80) {
          console.log(`>>> Overall Grade: ${grade}% (${candidateAnswers} of 5 responses Correct) <<< \n>>> Status: PASSED <<<`)
        } else {
          console.log(`>>> Overall Grade: ${grade}% (${candidateAnswers} of 5 responses Correct) <<< \n>>> Status: FAILED <<<`)
        }
      
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
    /*if (correctAnswer == candidateAnswer){
      console.log("Congrats! that is correct.");
    }   else {
          console.log("Sorry, that is not correct.");
    }
    */
  //  console.log(``)


 // console.log("grade")
  

 // return grade;
//}
}
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
    
  //console.log(`Hello, ${candidateName} nice to meet you!\n`);
    console.log(`Candidate Name:  ${candidateName}\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};