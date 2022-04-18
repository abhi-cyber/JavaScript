// start

let string = 'Hello';
let integer = 10;
let boolean = true;
let unDefined;
let nullVar = null;


// Arrays - It is of heterogeneous type.

let arr = [1,2,3,4,5,6,7,8,9,10, "Hello"]

// for( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

console.log("This is an array: "+arr);
console.log("These are the DataTypes: "+string, integer, boolean, unDefined, nullVar);

/* 
    operators
            - Artihmetic Operator ==> +, -, /, %, *
            - Assigment Operator ==> =
            - Comparison Operator==> ==, >=, <=
            - Logical Operators ==> and[&&], or[||], not[!]

                                                            AND
                                                                |-----|-----|
                                                                | T F |  F  |
                                                                | F F |  F  |
                                                                | T T |  T  |
                                                                | F T |  F  |
                                                            OR
                                                                |-----|-----|
                                                                | T F |  T  |
                                                                | F F |  F  |
                                                                | T T |  T  |
                                                                | F T |  T  |


    Precendence: PEMDAS
    Associativity is of ASSIGNMENT OPERTORS
*/
