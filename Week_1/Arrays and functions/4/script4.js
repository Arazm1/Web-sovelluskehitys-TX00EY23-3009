'use strict';

const numbers = [7, 6, 3, 2, 9, 10, 0];

//const sortedArray = sortArray(numbers);
console.log(numbers);
console.log(sortArray(numbers));

function sortArray(numbers){
    return numbers.sort((a, b) => a - b);
}