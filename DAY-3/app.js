/*
    Every function has a scope ==> Only the code defined in function is executed;

    function <function name>([arguements]){
        {SCOPE OF FUNCTION}
    }

    Types: 
        1. Without Argument Without Return Value
        2. Without Argument With Return Value
        3. With Argument Without Return Value
        4. With Argument With Return Value

    Functions can be defined anywhere;

    IF we have more than one functions with same name then they are differntiated on the basis of the number of passed arguemnts.
    IF the number of passed arguments is same then the data type of the arguments is checked.

*/

// TYPE 1

function message(){                                 //FUNCTION DEFINITION
    console.log("This Hello World is not returned");
}

message(); 

// TYPE 2

function messReturn(){
    return "This Hello world is returned";
}

let mess = messReturn();
console.log(mess);

// TYPE 3

function messWArgs(message){
    console.log(message);
}

messWArgs('This hello world is passed as an arguement')

// TYPE 4

function messWArgsReturn(mess){
    return mess + "Arguement + Returned";
}

let retMess = messWArgsReturn("This Hello World is ")
console.log(retMess);
// --------------------------------------------------- //

/*
    Conditional Statements
    1. Execution of SWITCH is faster than the if statements as it jumps directly to the specified conditions rather than making comparisons on the go.
*/
