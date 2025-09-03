// select the random number
let randomnum=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userinput=document.querySelector('#guessField');
const guessslot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi');
const startover=document.querySelector('.resultParas');

const p=document.createElement('p');
// keep track of the guesses  
let prevGuess=[];//array of all  prev guesses 
let numguess=1;// max attempts 10;
let playgame=true;

if(playgame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userinput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('enter the valid number ')
  }
  else if(guess<1){
    alert("enter the number greater than 1 ")
  }
  else if(guess>100){
    alert("enter the number smaller than 100 ")
  }
  else{
    prevGuess.push(guess);
  
  if(numguess===10){
    displayGuess(guess);
    displayMessage(`game over .random number was${randomnum}`);
    EndGame();
  }
  else{
    displayGuess(guess);
    checkGuess(guess);
  }
}
}
function checkGuess(guess){
  if(guess===randomnum){
    displayMessage(`you guessed it right`)
    EndGame();
  }
  else if(guess<randomnum){
    displayMessage(`your guess is too LOW`);
  }
  else if(guess>randomnum){
    displayMessage(`your guess is too HIGH`);
 }
}
function displayGuess(guess){
  userinput.value='';
  guessslot.innerHTML+=`${guess}, `;
  numguess++;
  remaining.innerHTML=`${10-  (numguess-1)}`;
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function EndGame(){
  userinput.setAttribute('disabled','');
  if(!document.querySelector('#newgame')){
  p.classList.add('button');
  p.innerHTML=`<h2 id='newgame'>start new game</h2>`;
  startover.appendChild(p);
  }
  playgame=false;
  NewGame();
}
function NewGame(){
  const newGameButton =document.querySelector('#newgame');
  newGameButton.addEventListener('click',function(){
   randomnum=parseInt(Math.random()*100+1);
   prevGuess=[];
   numguess=1;
   guessslot.innerHTML='';
   remaining.innerHTML="10";
   lowOrHi.innerHTML='';
   userinput.removeAttribute('disabled','');
   startover.removeChild(p);
   playgame=true;


});
}


