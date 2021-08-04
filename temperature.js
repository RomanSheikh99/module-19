// celsius to fahrenheit

function celToFar(){
    let cel = parseFloat(prompt("Enter Celsius Temperature"));
    let far = (cel * 1.8) + 32;
    far = parseFloat(far.toFixed(2));
    let result = alert(far + "\xB0F");
    return result;
}


// fahrenheit to  celsius 

function farToCel(){
    let far = parseFloat(prompt("Enter Fahrenheit Temperature"));
    let cel = (far - 32) * (5/9);
    cel = parseFloat(cel.toFixed(2));
    let result = alert(cel + "\xB0C");
    return result;
}


// celsius to kelvin   

function celToKel(){
    let cel = parseFloat(prompt("Enter celsius Temperature"));
    let kel = cel + 273.15;
    kel = parseFloat(kel.toFixed(2));
    let result = alert(kel + "K");
    return result;
}


// fahrenheit to  kelvin 

function farToKel(){
    let far = parseFloat(prompt("Enter Fahrenheit Temperature"));
    let cel = (far - 32) * (5/9);
    let kel = cel + 273.15;
    kel = parseFloat(kel.toFixed(2));
    let result = alert(kel + "K");
    return result;
}
