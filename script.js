$(document).ready(function() {
// Create Variables
    // Four Sections of website into Variables.
    var homePage = $("#homePage");
    var quizSection = $("#quizSection");
    var highScoreSection = $("#highScoreSection");
    var studySection = $("#studySection");

    // Turn three links on website into Variables.
    var logoLink = $("#logoLink");
    var viewHighScoresLink = $("#viewHighScoresLink");
    var viewStudyLink = $("#viewStudyLink");

    // "Start" and "Again"
    var startButton = $(".startButton");

    // Next Question button.
    var nextQuestionBtn =$("#nextQuestionBtn");

// Webpage Behavior  
    // When you click on "Quizme" the homepage appears.
    logoLink.click(function(event) {
        event.preventDefault();
        homePage.removeClass("hidden");
        quizSection.addClass("hidden");
        highScoreSection.addClass("hidden");
        studySection.addClass("hidden");      
    })  

    // When you click on the "High Score" High Score appears.
    viewHighScoresLink.click(function (event) {
        event.preventDefault();
        highScoreSection.removeClass("hidden");
        homePage.addClass("hidden");
        quizSection.addClass("hidden");
        studySection.addClass("hidden");   
    })

    // When you click on the "Study" study appears.
    viewStudyLink.click(function (event) {
        event.preventDefault();
        studySection.removeClass("hidden");
        homePage.addClass("hidden");
        quizSection.addClass("hidden");
        highScoreSection.addClass("hidden");   
    });

    // When you click "start" or "again" button the Quiz and Timer starts.
        startButton.click(function (event) {
        event.preventDefault();
        quizSection.removeClass("hidden");        
        studySection.addClass("hidden");
        homePage.addClass("hidden");
        highScoreSection.addClass("hidden");
        i=0;    
    });

//  Put the Questions on the Screen
    var i=0;
    console.log(questions[i]);

    // When "Next Question " button move to the next question.
    nextQuestionBtn.click(function(event) {
        event.preventDefault();

        if (i < (questions.length - 1)) {
            i++;
            $("#questionNumber").text("Question " + " " + [i + 1]);
            $("#question").text(questions[i][title]);       
        }
        // When questions are done High Scores page is revealed.
        else{
            highScoreSection.removeClass("hidden");
            quizSection.addClass("hidden");
        }
           
    })

    
    





  });