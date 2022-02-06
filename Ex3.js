function addition(){
    console.log("The operation is addition");
    var i = 10;
    if(i === 10)
        return 1;
    else
        return 0;
}

const subtraction = function(){
    console.log("The operation is subtraction");
}

// var number1 = 3 , number2 = 5;
//var total;

//total = number1 + number2;
//console.log(total); // 8
addition();

//number1 = 6;
//number2 = 1;

//total = number1 + number2;
//console.log(total); //7

var returnValue = addition();
console.log("ReturnValue = " + returnValue);

console.log (addition()); // 1
substraction();