'use strict';

const numbers = [];
const evenNumbers = [];

//let i = 1;
let userInput;
do{
    userInput = prompt("Enter a number (or 'done' to finish: ");

    if(userInput === null || userInput.toLowerCase() == 'done'){
        break;
    }
    
    if(userInput != 'done' && userInput != ''){
        numbers.push(Number(userInput));
        //i++;
    }
    
}while(userInput != 'done');


for(let n of numbers){
    if(n % 2 == 0){
        evenNumbers.push(n);
    }
}

if(evenNumbers.length != 0){
    document.getElementById('evenNumbers').innerHTML = `Even Numbers: ${evenNumbers}`;
}
else{
    document.getElementById('evenNumbers').innerHTML = `Even Numbers: None`;
}