
// inch to feet converter

function inchToFeet(){
    var inch = parseFloat(prompt("Enter inches"));
    var feet = inch  * 0.0833333;
    var result = alert( inch + " Inches = " + feet + " Foot ");
    return result;
}
// foot to inch converter

function footToInch(){
    var foot = parseFloat(prompt("Enter Foot"));
    var inch = foot  * 12;
    var result = alert( foot + " Foot = " + inch + " Inches ");
    return result;
}

// mile to km converter

function mileToKm(){
    var mile = parseFloat(prompt("Enter miles"));
    var km = mile * 1.60934;
    var result = alert( mile + " Miles = " + km + " km ");
    return result;
}

// km to mile converter

function kmToMile(){
    var km = parseFloat(prompt("Enter Km"));
    var mile = km * 0.621371;
    var result = alert( km + " Km = " + mile + " Miles ");
    return result;
}