'use strict';

const fruits = ["apple", "banana", "orange", "grape", "kiwi"];


console.log(fruits);

for(let i = 0; i< fruits.length; i++){
    console.log(fruits[i]);
}

//lenghtOfArray
const arraySize = fruits.length;
document.getElementById('lenghtOfArray').innerHTML = `Lenght of the array fruits: ${arraySize}`;


console.log("Element at index 2: " + fruits[2]);

const lastIndexInArray = fruits.length - 1;

console.log("Last element in fruits: " + fruits[lastIndexInArray]);



const vegetables = [];

const v1 = String(prompt("Enter the first vegetable: "));
vegetables.push(v1);
const v2 = String(prompt("Enter the second vegetable: "));
vegetables.push(v2);
const v3 = String(prompt("Enter the third vegetable: "));
vegetables.push(v3);

console.log("Vegetables: " + vegetables);
console.log("Length of array Vegetables: " + vegetables.length);