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


/* 
    CONDITIONAL STATEMENTS

    1. if-else statement
    2. else-if statement



*/

const userAge = 20;
// const readlineSync = require("readline-sync");
// const userAge = readlineSync.question("Enter your age : ");

if (userAge >18){
    console.log("You are Adult");
}else{
    console.log("You are not an adult")
}

const checkNum = 45;
// const readlineSync = require("readline-sync");
// const checkNum = Number(readlineSync.question("Enter the number :"));

//    here if the if or else-if block executes , the further conditions aren't checked , 
//    hence to avoid this we only use if for checking these conditions.
if(checkNum % 3 === 0 && checkNum % 5 ===0){
    console.log("Fizz");
}else if(checkNum % 5 ===0 || checkNum % 7 ===0){
    console.log("Fuzz");
}else {
    console.log("Nor divisible by 3 neither by 5 and 7");
}
console.log("=============")


if(checkNum % 3 === 0 && checkNum % 5 === 0){
    console.log("Fizz");
}
if(checkNum % 3 === 0 || checkNum % 5 === 0){
    console.log("Fuzz");
}
if(checkNum % 7 === 0 ){
    console.log("Buzz");
}else{
    console.log("Not divisible by 7");
}
console.log("============")

const input= 35;
if(input % 2 === 0){
    console.log("Even Number");
    if(input % 6 === 0){
        console.log("Divisible by 6 ");
    }else{
        console.log("Not divisible by 6");
    }
}else{
    console.log("Odd number");
    if(input % 5 ===0){
        console.log("Divisible by 5");
    }else{
        console.log("Not Divisible by 5");
    }
}
console.log("==============")

//find the smallest string 

const string1 = "Pratiksha ";
const string2 = "Dinesh";
const string3 = "Dhumane";
console.log(string1.length); // IMPORTANT => space is counted as length in string .

if(string1.length < string2.length && string1.length < string3.length ){
    console.log("String 1 is the smallest ");
}else if (string2.length < string1.length && string2.length < string3.length){
    console.log("String 2 is the smallest");
}else {
    console.log("String 3 is the smallest");
}


/* 
    Ternary  Operators
    => condition ? yes : no

*/

let marks = 50;
(marks > 25) ? console.log("Pass") : console.log("Fail");

//Good Approach  => assign to variable

let result = (marks > 25) ? console.log("Pass") : console.log("Fail");
console.log(result);

//Nesting 

(marks <= 25) ? console.log("Improvement needed"): (marks <= 50) ? console.log("Good going ") : (marks < 75) ? console.log("Genius") : console.log("Pro");

/*  
    LOGICAL OPERATORS 

    1. Or ||  => true if any one true 
    2. And && => true if all true
    3. Not !  => opposite value
    4. Nullish Coalescaling ??
         => if else kind of 
         

*/

const physics = 85 ;
const chem = 89;
const maths = 90 ;

if(physics >80 && chem > 80 && maths > 80 ){
    console.log ("Eligible");
}else{
    console.log("Not Eligible");
}

if(physics >80 || chem > 90 || maths > 95){
    console.log ("Eligible");
}else{
    console.log("Not Eligible");
}

const isStudentEligible = false ;
console.log("Eligibility : " , !isStudentEligible);


//Truthy and falsy values 
//if values present in a variable it is then  treated as true or else false 
// FALSY VALUES => "",0, null, undefined

const stud_name="Pratiksha";
const emp_name="Pratik";
console.log(stud_name || emp_name); 
//if stud_name doesnt exist or is a empty string , it will print emp_name




// OR || => Returns the first truthy value or last falsy one
// AND && => Returns the LAST  truthy value or FIRST falsy one
// let data1 = null;
// let data2 ;
// let data3 = undefined;
// 0 is a falsy value

//  CONCEPT NAME == SHORT CIRCUITING 
//                => Dealing with truthy and falsy values

// console.log(data1||data2||data3);
// //           T       T      T      =>  T (returns first true value)

// console.log(data1||data2||data3);
// //           T       T      F      =>  T (returns first true value)

// console.log(data1||data2||data3);
// //           T       F      T      =>  T (returns first true value )

// console.log(data1||data2||data3);
// //           T       F      F      =>  T (returns true value )

// console.log(data1||data2||data3);
// //           F       T      T      =>  T (returns first true value )

// console.log(data1||data2||data3);
// //           F       T      F      =>  T (returns true value )

// console.log(data1||data2||data3);
// //           F       F      T      =>  T (returns true value )

// console.log("=========")
// console.log(data1||data2||data3);
// //           F       F      F       => returns first falsy value

//=================================================

let data1 = 0;
let data2 ="kj";
let data3 = "undefined";


console.log(data1&&data2&&data3);
//           T       T      T      =>  T (returns last true value)

console.log(data1&&data2&&data3);
//           T       T      F      =>  T (returns first false value)

console.log(data1&&data2&&data3);
//           T       F      T      =>  T (returns false value )

console.log(data1&&data2&&data3);
//           T       F      F      =>  T (returns first false value )

console.log(data1&&data2&&data3);
//           F       T      T      =>  T (returns first false value )

console.log(data1&&data2&&data3);
//           F       T      F      =>  T (returns first false value )

console.log(data1&&data2&&data3);
//           F       F      T      =>  T (returns first false value )

console.log("=========")
console.log(data1&&data2&&data3);
//           F       F      F       => returns first falsy value


// AND has higher precedence than OR

console.log("a" && "b" || "c");       // "b" — ("a" && "b") => "b", then "b" || "c" => "b"
console.log("a" || "b" && "c");       // "a" — "b" && "c" => "c", then "a" || "c" => "a"
console.log("" && "b" || "c");        // "c" — "" && "b" => "", then "" || "c" => "c"
console.log("a" && "" || "c");        // "c" — "a" && "" => "", then "" || "c" => "c"
console.log("a" && null || undefined);// undefined — "a" && null => null, null || undefined => undefined
console.log("a" || null && "b");      // "a" — null && "b" => null, "a" || null => "a"


//NULLISH COALESCING

let car = "BMW";
let bike =undefined;
console.log(car ?? "Assign car name first.");
console.log(bike ?? "Assign bike name first ")
//if bike is null or undefined the op will display Assign bike name first
// IMP ====>>>>>>> but it returns empty string if assigned while declaring


/*
     LOOPS

     1. for loop
        SYNTAX => for (startValue ; condition ; incrementalValue){
        ....................
        ....................
        } 
    


*/


for(let i=0;i<=10;i++){
        console.log(i);
}

const myName = "Pratiksha";
for(let i =0;i<myName.length;i++){
    console.log(myName[i]);
}


//NESTING OF """FOR""" LOOP

for(let i=1;i<=10;i++){
    for(let j=1;j<=10;j++){
        let product = i*j;
        console.log(`${i} x ${j} = ${product} `)
    }
    console.log("-----------------")
}

let fruits =["apple","banana","mango"];
let fruits1 =["apple","banana"];

for(let i=0;i<fruits.length;i++){
    for(let j=0;j<fruits1.length;j++){
        if(fruits[i]==fruits1[j]){
        console.log(`Same item found 
Item name : ${fruits[i]}
====================`);
        }
    }
}

//******   .repeat() is a built-in string method  *********//

for(i=0;i<6;i++){
    let symbol="* ";
    console.log(symbol.repeat(i));
}

for(i=6;i>0;i--){
    let symbol="* ";
    console.log(symbol.repeat(i));
}


//This gives us total characters every time loop runs , see the below code  
let str4="Pratiksha Dinesh Dhumane";
for(let i=1;i<=str4.length;i++){
    let totalChar =+ i;
    console.log(`Total number of characters = ${totalChar}`);
}
console.log("==================================")

let count =0;
for(let i=1;i<=str4.length;i++){
    count++;
}
console.log(`Total number of characters : ${count}`);

//Finding , even and odd from a given range of numbers 
//range given is 1 to 101

for(let i=1;i<=101;i++){
    if(i%2==0){
        console.log(i," is even number : ",i);
    }else{
        console.log(i," is odd number : ",i);
    }
}

//Find vowels iin a given word
let vowels ="aeiou";
let word ="Pratiksha";
for(let i=0;i<word.length;i++){
    for(let j=0;j<vowels.length;j++){
        if(word[i]==vowels[j]){
            console.log(`Vowel ${vowels[j]} found at index ${i+1} of given word`)
        }
    }
}


