
var words=["lion", "cat", "deer", "dog", "wolf", "zebra", "elephant", "monkey"];
var targetWord = words[Math.floor(Math.random()*words.length)];
var answer = [];
for (let i=0; i<targetWord.length; i++)
    {
        answer[i]="_";
    
    }
var remainingGuesses=targetWord.length;

document.getElementById("lives").textContent=targetWord.length;
while(remainingGuesses>0){
    answer=(answer.join(" "));
document.getElementById("hold").textContent=answer;

// documnet.getElementById("hold").innerHTML=answer;
}