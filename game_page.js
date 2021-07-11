player1name=localStorage.getItem("player1name");
player2name=localStorage.getItem("player2name");

player1score=0;
player2score=0;

document.getElementById("player1name").innerHTML=player1name+" : ";
document.getElementById("player2name").innerHTML=player2name+" : ";


document.getElementById("player1score").innerHTML=player1score;
document.getElementById("player2score").innerHTML=player2score;


document.getElementById("playerq").innerHTML="QUESTION TURN: "+player1name ;
document.getElementById("playera").innerHTML="ANSWER TURN: "+player2name ;

function send() {
    getword= document.getElementById("word").value
}

function goingtohintpage() {
    window.location="hints.html"
}



function send() {
    getword = document.getElementById("word").value;
    word = getword.toLowerCase();
    console.log("word inlowercase= " + word);

    c1 = word.charAt(1);
    console.log(cl);

    lengthDiv2 = Math.floor(word.length / 2);
    c2 = word.charAt(lengthDiv2);
    console.log(c2);

    lengthminus1 = word.length - 1;
    c3 = word.charAt(lengthminus1);
    console.log(c3);

    remove_charAt1 = word.replace(c1, "*");
    remove_charAt2 = remove_charAt1.replace(c2, "*");
    remove_charAt3 = remove_charAt2.replace(c3, "*");
    console.log(remove_charAt3);

    qword = "<h4 id='word_display'> Q." + remove_charAt3 + "</h4>";
    inputBox = "<br> answer:<input type='text'  id='inputCheckBox'>";
    checkButton = "<br><br> <button class='btn btn-warning'  onclick='check()'> Check</button>";
    row = qword + inputBox + checkButton;

    document.getElementById("output").innerHTML = row;

    document.getElementById("word").value = "";

}
questionturn = "player1";
answerturn = "player2";

function check() {
    getAnswer = document.getElementById("inputCheckBox").value;
    answer = getAnswer.toLowerCase();
    console.log("answer in Lower case" + answer);

    if (answer == word) {
        if (answerturn == "player1") {
            player1score = player1score + 1;
            document.getElementById("player1score").innerHTML = player1score;
        } else {
player2score=player2score+1;
document.getElementById("player2score").innerHTML=player2score;
        }
    }
    if(questionturn=="player1") {
        questionturn="player2";
        document.getElementById("playerq").innerHTML="question turn- "+ player2name;

    }else {
        questionturn="player1";
        document.getElementById("playera").innerHTML="answerturt -"+player1name;

    }
    if(anwerturn=="player1") {
        answerturn="player2";
        document.getElementById("playerq").innerHTML="question turn- "+ player2name;

    }else {
        answerturn="player1";
        document.getElementById("playera").innerHTML="answerturt -"+player1name;
        
    }
    document.getElementById("output").innerHTMLHTML="";
    
}



