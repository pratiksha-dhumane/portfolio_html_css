// printing messages =>
console.log("Hello World !");

/*
Variables

keywords => var , let , const 

value of variable declared with var keyword can be changed , redeclaration possible using var 
value of variable declared with let keyword can be changed , redeclaration not possible using let
value of variable declared with const cant be changed , redeclaration not possible using const

rules =>
    numbers , letters , _ ,  $ are allowed 
    IMP => spaces , numbers at begining are NOT ALLOWED
    var names are Case sensitive

*/

var fName = "Pratiksha";
console.log(fName);

let firstName; //declaration 
firstName = "Pratikshaa";
console.log(firstName);

const number = 4; // you need to declare nd assign value at the same time unlike let , var
console.log(number);



/*

DATA TYPES 

===== PRIMITIVE DATA TYPES =====
=> Where single value is assigned to the variable 

1. String => "...." ,'...' ".... ('.....')....."
2. Boolean => True & False
3. Number => whole numbers , fractions , float type numbers all are included 
4. Null => means no value 
5. Undefined => declartion is done but no value assigned , it is empty hence gives undefined as data type .

===== NON-PRIMITIVE DATA TYPES (COMPLEX DATA TYPES)  =====
=> Where multiple values can be assigned to the variable 

1.Object => { key : value } , [...] nesting possible 


*/

let userName="Pratiksha"

// ways to find type of data 
console.log(typeof(userName));
console.log(typeof userName);

let num = 123;
num = 123.4 ;
console.log(typeof num);

let action = true;
console.log(typeof action);

let data ;
console.log (typeof data); // op=> undefined

let value = null;
console.log(typeof value); //op=> object  

const student ={
    studName :"Pratiksha",
    age : 20,
    attendance : 75 
}
console.log(typeof student);

 let studentDetails ={
    studName :"Pratik",
    age : 20,
    attendance : 75 ,
    //nesting object inside object
    marks : {
    M1: 40 ,
    M2: 50 ,
    M3: 60
}
};
console.log(typeof student);

const array =[1,2,3,4,5]
console.log(typeof array);


/*    

========== CONCATENATION ==========

=> Joing strings and variables together using +


========= TEMPLATE LITERALS ==========

=> `.......${var}........`
=> allows you to write multiple lines text 

using ${} => u can access variables , and can normally write strings inside `....`

*****In Concatenation , you need to insert space in a string , 
but using template literals will not have to do it , normally inserting space can satisfy ur situation ******


*/

let firstN = "Pratiksha"
let age = 20;
console.log(firstN +" "+ "is" +" " + age +"years old .");

console.log(
    ` ${firstN} is ${age} years old  .`
)

console.log (`A
B
C
D
`)

/*

ARITHMETIC OPERATORS 

1. Addition + => if any one of the operands is string , concatenation takes place

***** For all the below operators , even if one of the operands is string , it still performs operations over them .
      If all the operands are sttrings , it returns NaN => Not a number . ******

3. Multiplication 
4. Division /
5. Modulus % => gives value of reminder 
6. Exponential => ** 


*/

let num1 = 2;
let num2 = 3;
let num3 = "4";
let num4 = "Pratiksha"

//Normal Cases 
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
console.log(num1%num2);
console.log(num1**2);


console.log("==========")

//one operand as string 
console.log(num1+num3); 
console.log(num1-num3);
console.log(num1*num3);
console.log(num1/num3);
console.log(num1%num3);
console.log(num1+num3);
console.log(num3**2);


//all operands as string 
console.log(num4+num3); 
console.log(num4-num3);
console.log(num4*num3);
console.log(num4/num3);
console.log(num4%num3);
console.log(num4+num3);
console.log(num4**2);

console.log ("==========")

/*
TYPE CONVERSION

use these words for conversion using (var)
1.Number
2.String
3.Boolean 



*/

const a = 1;
const b = 2;
const c = "Pratiksha";
const d = String(a);
const e = Boolean(b);
const f = Number(c);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

//EMPTY STRING & 0 => FALSE
//String with a single space & any negative number gives TRUE 
console.log(Boolean(""));
console.log(Boolean(" "));
console.log(Boolean(0));
console.log(Boolean(-1));


/*
READLINE SYNC

=>required to take input from users 

*/

//firstly assign readline sync package to a variable

// const readlineSync = require("readline-sync");
// const user = readlineSync.question("Enter your name : ");
// console.log(typeof user );
// const Age = Number(readlineSync.question("Enter your age :")); //here input is converted to number 
// console.log(typeof Age);

console.log("==============");

/*

COMPARISON OPERATORS

=> Comparison operators always return BOOLEAN VALUE .

1. > => greater than
2. < => less than
3. >= => greater than equal to
4. <= => less than equal to
5. == => equal to (checks only values)
6. === => strictly equal to (checks data type along with the value)


*/

//for numbers 
let number1 = 2;
let number2 = 3;

console.log (number1>number2);
console.log (number1<number2);
console.log (number1>=number2);
console.log (number1<=number2);
console.log (number1==number2);
console.log (number1===number2);
console.log("=========1===");

//one operand as string
//=> Comparison operators covert that one string operand to number before performing operation.
let number3 ="4";
console.log (number1>number3);
console.log (number1<number3);
console.log (number1>=number3);
console.log (number1<=number3);
console.log (number1==number3);
console.log (number1===number3);
console.log("=========2===");

//all operands as string
//=> Comparison operators covert that one string operand to number before performing operation.
let number4="5";
console.log (number4>number3);
console.log (number4<number3);
console.log (number4>=number3);
console.log (number4<=number3);
console.log (number4==number3);
console.log (number4===number3);
console.log("=========3===");



//all operands are strings
//=> comparison takes place based on ascii code , in simple way you can say the strings are compared alphabetically

let str1="Pratiksha";
let str2="Pratikshaa";
console.log (str1>str2);
console.log (str1<str2);
console.log (str1>=str2);
console.log (str1<=str2);
console.log (str1==str2);
console.log (str1===str2);
console.log("=========4===");

let str3="z"; //Z being greater in terms of alphabetical order than P , it shows true for ">" operation
console.log (str1>str3);
console.log (str1<str3);
console.log (str1>=str3);
console.log (str1<=str3);
console.log (str1==str3);
console.log (str1===str3);
console.log("=========5===");

//null & undefined

/*
here all outputs are false in first half , bcoz str1 is a string , before comparision it gets converted to NaN 
whereas null gets converted to 0 
*/

console.log (str1>null);
console.log (str1<null);
console.log (str1>=null);
console.log (str1<=null);
console.log (str1==null);
console.log (str1===null);
console.log("=========6===");

console.log (num1>null);
console.log (num1<null);
console.log (num1>=null);
console.log (num1<=null);
console.log (num1==null);
console.log (num1===null);
console.log("=========7===");


// strings , numbers and undefined are treated as NaN , then comapared , hence output is false for all.
console.log (str1>undefined);
console.log (str1<undefined);
console.log (str1>=undefined);
console.log (str1<=undefined);
console.log (str1==undefined);
console.log (str1===undefined);
console.log("=========8===");

//undefined and number will give op as false as one is nan and second is num
console.log (num1>undefined);
console.log (num1<undefined);
console.log (num1>=undefined);
console.log (num1<=undefined);
console.log (num1==undefined);
console.log (num1===undefined);
console.log("=========9==");

console.log (null>undefined);
console.log (null<undefined);
console.log (null>=undefined);
console.log (null<=undefined);
console.log (null==undefined); //object = undefined
console.log (null===undefined); //false cuz null has object as datatype whereas undefined has undefined as datatype
console.log("=========10==");






