// revers way to call factorial function

function factorialOf(num){
    let fact = 1;
    let i = num;
    while(i >=1){
        fact = fact * i;
        i--;
    }
    let result = console.log(fact);
    return result;
}

factorialOf(2);
factorialOf(3);
factorialOf(4);
factorialOf(5);
factorialOf(6);
factorialOf(7);