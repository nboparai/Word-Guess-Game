var words=["lion", "cat", "deer", "dog", "wolf", "zebra", "elephant", "monkey"];
var targetWord = words[Math.floor(Math.random()*words.length)];
var answer = [];
for (let i = 0; i < targetWord.length; i++) {
    answer.push("_");
    
}
var remainingGuesses;
remainingGuesses=targetWord.length;
document.getElementById("lives").textContent=remainingGuesses;
document.getElementById("hold").textContent=answer.join(" ");


function letterChosen(letter) {  

console.log(letter);
for (let j = 0; j < remainingGuesses; j++) {
    if (letter=targetWord[j]) {
        answer[j]=letterChosen;
        remainingGuesses--;
    } 
        
    }
document.onkeyup=function(event){
    if (event.keyCode>=65 && event.keyCode<=99){
        letterChosen(event.key);
    }
}
}