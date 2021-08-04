// Simple Interest calculator

function SimpleInterest(){
    let p =parseFloat(prompt("Enter Principal Amount")); //1000
    let r =parseFloat(prompt("Enter Interest Rate")); //10
    r = (p/100)*r; //10
    let i =parseFloat(prompt("Enter Years"));//5

    let PrincipalAmount = p;//100
    let AnnualInterest = (p*r*1)-p;//900
    let TotalInterest = AnnualInterest * i;//4500 1000 5 50
    let TotalAmount = 
}