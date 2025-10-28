'use strict';

const numbers = [7, 6, 3, 2, 9, 10, 0];

//const sortedArray = sortArray(numbers);
console.log("Original: "+numbers);
//console.log(sortedArray);




function sortArray(numbers, order){

    if(order == 'asc'){
        return numbers.slice().sort((a, b) => a - b);
    }
    else if(order == 'desc'){
        return numbers.slice().sort((a, b) => a - b).reverse();
    }
    else
        return console.log("Error, no asc or desc");
}


console.log(sortArray(numbers, "asc"));
console.log(sortArray(numbers, "desc"));

console.log("Original: "+numbers);