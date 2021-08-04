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

    let result = alert("Your Principal Amount is : " + PrincipalAmount + " Taka\n" +
                        "Your Annual Interest is : " + AnnualInterest + " Taka\n" +
                        "Your Total Interest is : " + TotalInterest + " Taka\n" + 
                        "Your Total Amount is : " + TotalAmount + " Taka\n");
    
    return result;
}