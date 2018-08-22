var words=["lion", "cat", "deer", "dog", "wolf", "zebra", "elephant", "monkey"];
var targetWord = words[Math.floor(Math.random()*words.length)];
console.log(targetWord);
var wordArr = targetWord.split("");
console.log("wordArr", wordArr);
var answer = [];
var incorrect=[];
for (let i = 0; i < targetWord.length; i++) {
    answer.push("_");
    
}


var phincorrect=document.getElementById("incorrectWordbank")
var totalLives = document.getElementById("lives");
var placeholder =document.getElementById("hold");
totalLives.textContent="Total Guesses"+" "+ targetWord.length;
placeholder.textContent=answer.join(" ");

var userText = document.getElementById("user-text");
document.onkeyup=function(event){
    
        // if (event.keycode>=97 && event.keycode<=122) {
            userText.textContent =event.key;
            
            
            console.log(userText.textContent);
            letterChosen(userText.textContent);
            
        }
    // }
    function letterChosen(letter) {  
        
        console.log("letter", letter);
        
        for (let j = 0; j < targetWord.length; j++) {
         
          
            if (letter==targetWord[j]) {
                answer[j]=letter;
                placeholder.textContent=answer.join(" ");
                console.log("answer", answer[j]);
                console.log("whole array", answer);

            } else{
                
                incorrect.push=letter;
                
                phincorrect.textContent= "wrong guesses" + " "+incorrect;
                }
                
            }
    
        }
