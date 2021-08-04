// get factorial program

function getFectorial(){
    let num = parseInt(prompt("Enter A Number"));
    let fect = 1;
    for(let i = 1; i <= num; i++){
        fect = fect * i;
    }
    let result = alert("The factorial of " + num + " is = " + fect);
    return result;
}