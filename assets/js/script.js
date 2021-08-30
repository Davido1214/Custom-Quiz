var clickBtn = document.querySelector("#btn")
var score = 0

// When a user fails this will run and tell them their score
function quizFail() {

    var fail = document.createElement("div")
    fail.innerHTML = ("<p class = 'qDesign quiz prompt' >You Failed and got a score of " + score + " Out of 5</P>")
    document.getElementById("add-question3").appendChild(fail)
}
// this runs the first question 
//each quizRun function controls a different question
function quizRun() {

    var createQuestion = document.createElement("div")
    var createAnswer = document.createElement("div")
    var createResponse1 = document.createElement("label")
    var createResponse2 = document.createElement("label")

    var questions = [
        "Is Javascript the same as Java? "
    ]
  
    var answer = [
        "for(i=0;i < questions.length;i++)"
    ]
  
    var response = [
        "yes",
        "no",
        "yes"
    ]

    questions.forEach(element => {
        createQuestion.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ questions[0] + "</p>")
        document.getElementById("add-question2").appendChild(createQuestion)
       });
    
    //    answer.forEach(element => {
    //     createAnswer.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ answer[0] + "</p>")
    //     document.getElementById("add-question2").appendChild(createAnswer)
    //    });
    
       response.forEach(element => {
           createResponse1.setAttribute('class',' checkbox submit')
        createResponse1.innerHTML = ("<input id='radBtn' name='flexRadioDefault' class = '' type='radio'>Yes</input>")
        document.getElementById("add-question2").appendChild(createResponse1)
    
       });
    
       response.forEach(element => {
        createResponse2.setAttribute('class','checkbox submit')
        createResponse2.innerHTML = ("<input id = 'radBtn2' name = 'flexRadioDefault' class = '' type='radio'>No</input>")
        document.getElementById("add-question2").appendChild(createResponse2)
       });
       
       var radioBtn = document.querySelector("#radBtn")
       var radioBtn2 = document.querySelector("#radBtn2")

       radioBtn.addEventListener("click",function(){
        document.getElementById("add-question2").style.display = "none"
        quizFail()
       });

       radioBtn2.addEventListener("click",function(){
        score++
        quizQuestions()
        
    });
       return
};

function quizRun1() {

    var createQuestion = document.createElement("div")
    var createAnswer = document.createElement("div")
    var createResponse1 = document.createElement("label")
    var createResponse2 = document.createElement("label")

    var questions = [
        "what is this typically called?"
    ]
  
    var answer = [
        "for i=0;i<10;i++"
    ]
  
    var response = [
        "yes",
        "no",
        "yes"
    ]

    questions.forEach(element => {
        createQuestion.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ questions[0] + "</p>")
        document.getElementById("add-question2").appendChild(createQuestion)
       });
    
       answer.forEach(element => {
        createAnswer.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ answer[0] + "</p>")
        document.getElementById("add-question2").appendChild(createAnswer)
       });
    
       response.forEach(element => {
           createResponse1.setAttribute('class',' checkbox submit')
        createResponse1.innerHTML = ("<input id='radBtnsec' name='false' type='radio'>For Loop</input>")
        document.getElementById("add-question2").appendChild(createResponse1)
    
       });
    
       response.forEach(element => {
        createResponse2.setAttribute('class','checkbox submit')
        createResponse2.innerHTML = ("<input id = 'radBtnsec2' name = 'false'  type='radio'>Random Nonsense</input>")
        document.getElementById("add-question2").appendChild(createResponse2)
       });
       
       var radioBtnSec = document.querySelector("#radBtnsec")
       var radioBtnSec2 = document.querySelector("#radBtnsec2")


       radioBtnSec.addEventListener("click",function(){
           score++
           quizQuestions()
       })

       radioBtnSec2.addEventListener("click",function(){
        document.getElementById("add-question2").style.display = "none"
        quizFail()
    })

       return
};

function quizRun2() {

    var createQuestion = document.createElement("div")
    var createAnswer = document.createElement("div")
    var createResponse1 = document.createElement("label")
    var createResponse2 = document.createElement("label")

    var questions = [
        "Is this a for loop?"
    ]
  
    var answer = [
        "for(i=0;i < questions.length;) {}"
    ]
  
    var response = [
        "yes",
        "no",
        "yes"
    ]

    questions.forEach(element => {
        createQuestion.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ questions[0] + "</p>")
        document.getElementById("add-question2").appendChild(createQuestion)
       });
    
       answer.forEach(element => {
        createAnswer.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ answer[0] + "</p>")
        document.getElementById("add-question2").appendChild(createAnswer)
       });
    
       response.forEach(element => {
           createResponse1.setAttribute('class',' checkbox submit')
        createResponse1.innerHTML = ("<input id='third' name='flexRadioDefault' class = '' type='radio'>Yes</input>")
        document.getElementById("add-question2").appendChild(createResponse1)
    
       });
    
       response.forEach(element => {
        createResponse2.setAttribute('class','checkbox submit')
        createResponse2.innerHTML = ("<input id = 'third2' name = 'flexRadioDefault' class = '' type='radio'>No</input>")
        document.getElementById("add-question2").appendChild(createResponse2)
       });
       
       var third = document.querySelector("#third")
       var third2 = document.querySelector("#third2")

       third.addEventListener("click",function(){
           score++
           quizQuestions()
       });

       third2.addEventListener("click",function(){
        document.getElementById("add-question2").style.display = "none"
        quizFail()
    });
       return
};

function quizRun3() {

    var createQuestion = document.createElement("div")
    var createAnswer = document.createElement("div")
    var createResponse1 = document.createElement("label")
    var createResponse2 = document.createElement("label")

    var questions = [
        "what is 9*9"
    ]
  
    var answer = [
        "for(i=0;i < questions.length;i++)"
    ]
  
    var response = [
        "yes",
        "no",
        "yes"
    ]

    questions.forEach(element => {
        createQuestion.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ questions[0] + "</p>")
        document.getElementById("add-question2").appendChild(createQuestion)
       });
    
       answer.forEach(element => {
        createAnswer.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ answer[0] + "</p>")
        document.getElementById("add-question2").appendChild(createAnswer)
       });
    
       response.forEach(element => {
           createResponse1.setAttribute('class',' checkbox submit')
        createResponse1.innerHTML = ("<input id='fourth' name='flexRadioDefault' class = '' type='radio'>81</input>")
        document.getElementById("add-question2").appendChild(createResponse1)
    
       });
    
       response.forEach(element => {
        createResponse2.setAttribute('class','checkbox submit')
        createResponse2.innerHTML = ("<input id = 'fourth2' name = 'flexRadioDefault' class = '' type='radio'>88</input>")
        document.getElementById("add-question2").appendChild(createResponse2)
       });
       
       var fourth = document.querySelector("#fourth")
       var fourth2 = document.querySelector("#fourth2")

       fourth.addEventListener("click",function(){
           score++
           console.log(score)
           quizQuestions()
       });

       fourth2.addEventListener("click",function(){
        document.getElementById("add-question2").style.display = "none"
        quizFail()
    });
       return
};

function quizRun4() {

    var createQuestion = document.createElement("div")
    var createAnswer = document.createElement("div")
    var createResponse1 = document.createElement("label")
    var createResponse2 = document.createElement("label")

    var questions = [
        "Will I get 100% on this assignment "
    ]
  
    var answer = [
        "for(i=0;i < questions.length;i++)"
    ]
  
    var response = [
        "yes",
        "no",
        "yes"
    ]

    questions.forEach(element => {
        createQuestion.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ questions[0] + "</p>")
        document.getElementById("add-question2").appendChild(createQuestion)
       });
    
    //    answer.forEach(element => {
    //     createAnswer.innerHTML = ("<p class= 'qDesign quiz prompt'>"+ answer[0] + "</p>")
    //     document.getElementById("add-question2").appendChild(createAnswer)
    //    });
    
       response.forEach(element => {
           createResponse1.setAttribute('class',' checkbox submit')
        createResponse1.innerHTML = ("<input id='fth' name='flexRadioDefault' class = '' type='radio'>Yes</input>")
        document.getElementById("add-question2").appendChild(createResponse1)
    
       });
    
       response.forEach(element => {
        createResponse2.setAttribute('class','checkbox submit')
        createResponse2.innerHTML = ("<input id = 'fth2' name = 'flexRadioDefault' class = '' type='radio'>No</input>")
        document.getElementById("add-question2").appendChild(createResponse2)
       });
       
       var fth = document.querySelector("#fth")
       var fth2 = document.querySelector("#fth2")

       fth.addEventListener("click",function(){
        document.getElementById("add-question2").style.display = "none"
        quizFail()
       });

       fth2.addEventListener("click",function(){
        score++
        quizQuestions()
    });
       return
};

//this determines if the user moves on to the next question or not
function quizQuestions() {
    if(score == 0){
        quizRun()
    }
    else if (score == 1)
        quizRun1()
    else if (score == 2){
        quizRun2()
    }
    else if (score == 3){
        quizRun3()
    }
    else if (score == 4){
        quizRun4()
    }
    else if (score == 5){
        congradulations()
    }
    
};
// this will run when a user gets all the questions right
function congradulations(){
    var  gameUser = window.prompt("What is your name!")
    var win = document.createElement("div")
    win.innerHTML = ("<p class = 'qDesign quiz prompt'>Congrats Your score is "+ score)
    document.getElementById("add-question2").style.display = "none"
    document.getElementById("add-question3").appendChild(win)
    localStorage.setItem("scoreboard",score)
    localStorage.setItem("name",gameUser)
    var namedisplay = localStorage.getItem("name")
    var scoreDisplay = localStorage.getItem("scoreboard")
    
    window.alert("the new highscore is "+ scoreDisplay + " by the user of " + namedisplay)
    
}
    
//this calls the main function that controls all the question functions along with the lose or win function
function generateQuiz() {
    clickBtn.style.display = "none"
    quizQuestions()
}


clickBtn.addEventListener("click",generateQuiz)