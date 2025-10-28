const userInput = Number(prompt("Enter a positive integer:"));

let result = 0;

if(userInput >0){
    console.log("Hmm");
    let tableInHTML = '<table>';
    
    for(let i = 1; i<=userInput; i++){
        tableInHTML += '<tr>';

        for(let j = 1; j<=userInput; j++){
            tableInHTML += `<td>${i * j}</td>`;
        }
        tableInHTML += '</tr>';

    }
    tableInHTML += '</table>';
    result = tableInHTML;


    document.getElementById('result').innerHTML = result;
}
else{
    console.log("Must be a positive integer!");
    result = "You must enter a positive integer."
    document.getElementById('result').innerHTML = `${result}`;
}

