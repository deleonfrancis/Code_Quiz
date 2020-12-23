$(document).ready(function () {
    // Create Variables
    // Four Sections of website into Variables.
    var homePage = $("#homePage");
    var quizSection = $("#quizSection");
    var highScoreSection = $("#highScoreSection");
    var studySection = $("#studySection");
    var scoreContainer = $(".scoreContainer");
  
    // Turn three links on website into Variables.
    var logoLink = $("#logoLink");
    var viewHighScoresLink = $("#viewHighScoresLink");
    var viewStudyLink = $("#viewStudyLink");
  
    // "Start" and "Again"
    var startButton = $(".startButton");
  
    // Next Question button.
    var nextQuestionBtn = $("#nextQuestionBtn");
  
  
    var i = 0;
    var currentIndex = -1;
    var correctAnswer;
    var x = 0;
    
    // How long will the timer be.
    var seconds = questions.length * 6;
  
    // Timer
    var timer;
  
    // Submit Button on High Scores page
    var submitInitialsBtn = $("#submitInitialsBtn");
  
    // Webpage Behavior
    // When you click on "Quizme" the homepage appears.
    logoLink.click(function (event) {
      event.preventDefault();
      homePage.removeClass("hidden");
      quizSection.addClass("hidden");
      highScoreSection.addClass("hidden");
      studySection.addClass("hidden");
      scoreContainer.addClass("hidden");
    });
  
    // When you click on the "High Score" High Score appears.
    viewHighScoresLink.click(function (event) {
      event.preventDefault();
      highScoreSection.removeClass("hidden");
      homePage.addClass("hidden");
      quizSection.addClass("hidden");
      studySection.addClass("hidden");
      scoreContainer.addClass("hidden");
    });
  
    // When you click on the "Study" study appears.
    viewStudyLink.click(function (event) {
      event.preventDefault();
      studySection.removeClass("hidden");
      homePage.addClass("hidden");
      quizSection.addClass("hidden");
      highScoreSection.addClass("hidden");
      scoreContainer.addClass("hidden");
    });
  
    // When you click "start" or "again" button the Quiz and Timer starts.
    startButton.click(function (event) {
      event.preventDefault();
      quizSection.removeClass("hidden");
      studySection.addClass("hidden");
      homePage.addClass("hidden");
      highScoreSection.addClass("hidden");
      scoreContainer.addClass("hidden");
      seconds = questions.length * 6; //reset timer
      Questions();
      setTimer();
      
    });

function Questions(){
  currentIndex++;
  var currentQuestion = questions[currentIndex].title; // Questions
  var currentChoices = questions[currentIndex].choices;
  correctAnswer = questions[currentIndex].answer;
  $("#questionNumber").text("Question " + " " + (i + 1));
  $("#question").text(currentQuestion);
  $("#nextQuestionBtn").text("Next Question");
  
  // put choices on the page
  for (x = 0; x < currentChoices.length; x++) {
    var choicesPrint = $("<li>" + currentChoices[x] + "</li>");
    $("#userChoices").append(choicesPrint);
    console.log(currentChoices);
    console.log(choicesPrint);
  
  }
}

$("li").click(isItRight());
    function isItRight(event) {
      event.preventDefault();
      if (choicesPrint = correctAnswer) {
        $(".feedback").text("Correct!") 
         
      }
      else{
        $(".feedback").text("Wrong...")

      }

      
    }






    // Timer
    // Starting the timer function
    function setTimer() {
      timer = setInterval(function () {
        if (seconds < 60) {
          $("#timer").html(seconds);
        }
        if (seconds > 0) {
          seconds--;
        } else {
          clearInterval(timer);
          i = 0;
          timeUp();
        }
      }, 1000);
    }
  
    // When timer is up show ........
    function timeUp() {
      quizSection.addClass("hidden");
      scoreContainer.removeClass("hidden");
      $("#scoreNumber").append(seconds);
      clearInterval();
  
      // when submit button is clicked show High Scores
      submitInitialsBtn.click(function (event) {
        event.preventDefault();
        highScoreSection.removeClass("hidden");
        scoreContainer.addClass("hidden");
      });
    }
  
    // When "Next Question " button move to the next question.
    nextQuestionBtn.click(function (event) {
      event.preventDefault();
  
      if (i < questions.length - 1) {
        i++;
        $("#questionNumber").text("Question " + " " + (i + 1));
        $("#question").text(questions[i].title);
        // $(".choiceA").text(choices[0]);
      }
      // When questions are done High Scores page is revealed.
      else {
        highScoreSection.removeClass("hidden");
        quizSection.addClass("hidden");
      }
    });
  });
  
  