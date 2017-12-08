var testWeight = 0;
var homeworkWeight = 0;
var quizWeight = 0;
var cpWeight = 0;
var finalWeight = 0;

var testScore = 0;
var homeworkScore = 0;
var quizScore = 0;
var cpScore = 0;
var ecScore = 0;
var finalScore = 0;

var testScores = 0;
var homeworkScores = 0;
var quizScores = 0;
var cpScores = 0;
var ecScores = 0;
var finalScores = 0;

var grade = 0;
var sum = 0;

function myFunction() {
    var x = document.getElementById("subject").selectedIndex;
    var name = document.getElementsByTagName("option")[x].value;
    var URL = "http://cs1371.gatech.edu/getClassInfo/?class=" + name;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = this.responseText,
        obj = JSON.parse(json);
        if (obj.success){
            document.getElementById("testWeight").value = obj.test;
            document.getElementById("homeworkWeight").value = obj.homework;
            document.getElementById("quizWeight").value = obj.quiz;
            document.getElementById("cpWeight").value = obj.class_participation;
            document.getElementById("finalWeight").value = obj.final_exam;
        }
    }
  };
  xhttp.open("GET", URL, true);
  xhttp.send();
}


function getGrade(){
    testWeight = document.getElementById("testWeight").value;
    homeworkWeight = document.getElementById("homeworkWeight").value;
    quizWeight = document.getElementById("quizWeight").value;
    cpWeight = document.getElementById("cpWeight").value;
    finalWeight = document.getElementById("finalWeight").value;

    testScore = document.getElementById("testScore").value.split(",");
    homeworkScore = document.getElementById("homeworkScore").value.split(",");
    quizScore = document.getElementById("quizScore").value.split(",");
    cpScore = document.getElementById("cpScore").value.split(",");
    ecScore = document.getElementById("ecScore").value.split(",");
    finalScore = document.getElementById("finalScore").value.split(",");

    var testF = 0;
    if (testScore != 0){
        for (var i = 0; i < testScore.length; i++) {
        testF += parseInt(testScore[i]);
        }
        testScores = (testF/(testScore.length));
    } else { testScores = 0; }


    var homeworkF = 0;
    if (homeworkScore != 0){
        for (var j = 0; j < homeworkScore.length; j++) {
        homeworkF += parseInt(homeworkScore[j]);
        }
        homeworkScores = (homeworkF/(homeworkScore.length));
    } else { homeworkScores = 0; }


    var quizF = 0;
    if (quizScore != 0){
        for (var k = 0; k < quizScore.length; k++) {
        quizF += parseInt(quizScore[k]);
        }
        var quizScores = (quizF/(quizScore.length));
    } else { quizScores = 0; }


    var cpF = 0;
    if (cpScore != 0){
        for (var l = 0; l < cpScore.length; l++) {
        cpF += parseInt(cpScore[l]);
        }
        var cpScores = (cpF/(cpScore.length));
    } else { cpScores = 0; }


    var ecF = 0;
    if (ecScore != 0) {
        for (var m = 0; m < ecScore.length; m++) {
        ecF += parseInt(ecScore[m]);
        }
        var ecScores = (ecF/(ecScore.length));
    } else { ecScores = 0; }


    sum = (testWeight*1) + (homeworkWeight*1) + (quizWeight*1) + (cpWeight*1) + (finalWeight*1);
    if (sum > 100){
        alert("The weights must add up to 100%");
        clear();
    } else {
        grade = ((finalScore - (((testWeight/100)*testScores)+((homeworkWeight/100)*homeworkScores)+((quizWeight/100)*quizScores)+(ecScores*1)+((cpWeight/100)*cpScores)))/(finalWeight/100)).toFixed(2);
        document.getElementById("out").innerHTML = "You need to get a " + grade + " on your final exam! Good Luck!";
    }
}