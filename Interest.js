// Simple Interest calculator

function SimpleInterest(){
    let p =parseFloat(prompt("Enter Principal Amount")); //1000
    let r =parseFloat(prompt("Enter Interest Rate")); //5
    r = (p*r)/100; //50
    let i =parseFloat(prompt("Enter Years"));//5

    let PrincipalAmount = p;//1000
    let AnnualInterest = r//50
    let TotalInterest = AnnualInterest * i;//250
    let TotalAmount = TotalInterest + PrincipalAmount;//1250

    alert("Your Principal Amount is : " + PrincipalAmount)
    alert("Your Annual Interest is : " + AnnualInterest)
    alert("Your Total Interest is : " + TotalInterest)
    alert("Your Total Amount is : " + TotalAmount)
}