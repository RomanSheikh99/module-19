// Check Leap Year Program

function leapYear(){
    var year = parseInt(prompt("Enter A Year"));
    if(year % 400 == 0){
        alert(year + "  Is A Leap Year");
    }else if(year % 4 == 0 && year % 100 != 0){
        alert(year + "  Is A Leap Year");
    }else{
        alert(year + "  Is Not A Leap Year");
    }
}


// function leapYear(year){
//     if(year % 400 == 0){
//         console.log(year + "  Is A Leap Year");
//     }else if(year % 4 == 0 && year % 100 != 0){
//         console.log(year + "  Is A Leap Year");
//     }else{
//         console.log(year + "  Is Not A Leap Year");
//     }
// }

// leapYear(2100);
// leapYear(2400);
// leapYear(2210);
// leapYear(2020);