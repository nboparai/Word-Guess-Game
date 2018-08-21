var words=["lion", "cat", "deer", "dog", "wolf", "zebra", "elephant", "monkey"];
var targetWord = words[Math.floor(Math.random()*words.length)];
var answer = [];
for (let i = 0; i < targetWord.length; i++) {
    answer.push("_");
    
}
var remainingGuesses;
remainingGuesses=targetWord.length;
var totalLives = document.getElementById("lives");
var placeholder =document.getElementById("hold");
totalLives.textContent="Guesses remianing"+ remainingGuesses;
placeholder.textContent=answer.join(" ");


function letterChosen(letter) {  

console.log(letter);
for (let j = 0; j < remainingGuesses; j++) {
    if (letter=targetWord[j]) {
        answer[j]=letterChosen;
        remainingGuesses--;
        alert("you got it right")
    } else{ alert("try another letter")}
        
    }
var userText = document.getElementById("user-text");
document.onkeyup=function(event){
        userText.textContent= event.key;
        console.log(userText);
    
    
}
letterChosen(userText);
}