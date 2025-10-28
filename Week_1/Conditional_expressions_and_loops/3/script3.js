'use strict';

const side1 = parseFloat(prompt("Enter the length of first side of a triangle: "));
const side2 = parseFloat(prompt("Enter the length of second side of a triangle: "));
const side3 = parseFloat(prompt("Enter the length of third side of a triangle: "));


if(side1 == side2 && side1 == side3){
    console.log("equilateral");
    document.getElementById('result').innerHTML = 'The triangle is equilateral.';
}
else if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
    document.getElementById('result').innerHTML = 'The triangle is isosceles.';
}
else if(side1 != side2 && side1 != side3 && side2 != side3){
    console.log('scalene');
    document.getElementById('result').innerHTML = 'The triangle is scalene.';
}