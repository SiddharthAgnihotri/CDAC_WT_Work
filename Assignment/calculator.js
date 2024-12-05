function calculator(a, b, opname){
    switch(opname){
        case "add":{
            console.log("Addition is: ", a+b);
            break;
        }
        case "sub":{
            console.log("substraction is: ",a-b);
            break;
        }
        case "mul":{
            console.log("Multiplication is",a*b);
            break;
        }
        case "div":{
            if(b!=0){
                console.log("Division is: ",a/b);
            }else{
                console.log("cannot divide by zero");
            }
            break;
        }

        default:{
            console.log("wrong choice")
        }
    }
}

calculator(3,2,"div");