let num1; 
let num2;

let operation ; 


function calculator(num1,num2, operation){

    if (operation === "+") { 
        return num1 + num2;
    } else if (operation === "-") { 
        return num1 - num2;
    } else if (operation === "*") { 
        return num1 * num2; 
    } else if (operation === "/") { 
        if(num2 === 0) 
            return "Undefined"; 
        return num1 / num2;
    } else { 
        result = "Invalid operation"; 
    }   

}

console.log("The Result of this operation is : " + calculator(2,3,"+"));