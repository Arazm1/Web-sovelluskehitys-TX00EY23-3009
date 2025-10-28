const userInput = Number(prompt("Enter a positive integer:"));

let result = 0;

if(userInput >0){
    for(let i = 1; i<=userInput; i++){
        result+= i;
    }
    console.log(result);
    document.getElementById('resulttt').innerHTML = `Result: ${result}`;
}
else if(userInput == 0){
    console.log("Zero");
    result = "You cannot enter the number 0"
    document.getElementById('resulttt').innerHTML = `${result}`;
    
}
else{
    console.log("Must be a positive integer!");
    result = "You must enter a positive integer."
    document.getElementById('resulttt').innerHTML = `${result}`;
}


