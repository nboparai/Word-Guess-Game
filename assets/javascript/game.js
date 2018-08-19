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
        alert("your got it right")
    } else{ alert("try another letter")}
        
    }
document.onkeyup=function(event){
    if (event.keyCode>=97 && event.keyCode<=122){
        letterChosen(event.key);
    }
}
}