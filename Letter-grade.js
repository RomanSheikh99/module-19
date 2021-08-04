// Letter grade function

function LetterGrade(){
    let marks = parseFloat(prompt("Enter Your Marks"));
    if( marks >= 90 && marks <=100){
        alert("You Got Golden A+");
    }else if(marks >= 80){
        alert("You Got A+")
    }else if(marks >= 70){
        alert("You Got A")
    }else if(marks >= 60){
        alert("You Got A-")
    }else if(marks >= 50){
        alert("You Got B")
    }else if(marks >= 40){
        alert("You Got C")
    }else if(marks >= 33){
        alert("You Got D")
    }else if(marks < 33){
        alert("You Are Fail")
    }else{
        alert("Grade Tumar P*ki Diye Bore Dibo")
    }
}