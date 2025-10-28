'use strict';

let numbers = [];

for(let i = 0; i<5; i++){
    const num = Number(prompt(`Enter number ${i+1}: `));
    if(num != ""){
        console.log("Added number " + num + " into an array");
        numbers.push(num);
    }
}

console.log(numbers);

const checkNum = Number(prompt("Enter a number to check if numbers contains that: "));

if(numbers.includes(checkNum)){
    console.log(`Numbers array contains ${checkNum}`);
    document.getElementById('check').innerHTML = `Numbers array contains ${checkNum}.`;
}
else{
    console.log(`Numbers array doesnt contain ${checkNum}`);
    document.getElementById('check').innerHTML = `Numbers array doesnt contain ${checkNum}.`;
}

const lastNumInArray = numbers.length -1;
numbers.pop(lastNumInArray);
console.log("Updated Numbers: " + numbers);


numbers.sort();
console.log("Sorted Numbers: " + numbers);
document.getElementById('sorted').innerHTML = `Sorted Numbers ${numbers}.`;