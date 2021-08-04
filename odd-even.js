
// Check even and odd number

function checkOddEven(){
    var num = parseInt(prompt("Enter A Number"));
    var checkIt = num % 2;
    if(checkIt == 0){
        alert(num + " Is An Even Number");
    }else{
        alert(num + " Is An Odd Number");
    }
}