'use strict';

let grade;
const inputScore = parseFloat(prompt("Enter your grade:"));


if(0 <= inputScore && inputScore <= 39){
    grade = 0;
}
else if(inputScore >= 40&& inputScore <= 51){
    grade = 1;
}
else if(inputScore >= 52 && inputScore <= 63){
    grade = 2;
}
else if(inputScore >= 64 && inputScore <= 75){
    grade = 3;
}
else if(inputScore >= 76 && inputScore <= 87){
    grade = 4;
}
else if(inputScore >= 88 && inputScore <= 100){
    grade = 5;
}
else{
    console.log("Invalid grade!");
}


document.getElementById('result').innerHTML = `Your grade: ${grade}`;

