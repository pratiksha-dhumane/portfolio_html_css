// // Conversiobn from number to string and string to number 
// var str = "ABC";
// var number =  123;
// const arr = [1, 2, 2];
// console.log(typeof arr); // op=> Array 
// console.log("Type of str :", typeof str);// op=>string
// console.log("converting string to number :", typeof +str);//bcoz of unary operator it converts string to number
// console.log("Type of number :", typeof number);
// console.log("Converting number to string : ", typeof " "+number ); //op=>string123
// console.log("Converting number to string", typeof (" "+number ));//op=> string cuz ()implemented

// //break and continue
//   for( let i=0; i<=5; i++){
//             if(i === 3) continue; //the loop continues but 3 is not printed 
//             if( i === 5) break; //loop is exited and no output is printed bcoz o f break is used
//             console.log(i);
//         }

// //in js , array is treated as object

//  data = [
//         {
//         fName : "john",
//         rollNo : 2,
//         result: true
//         },
//         {
//             fName : "smitch",
//             rollNo : 3,
//             result: true
//         }
//     ]

//     console.log(Array.isArray(data) ? data[1].fName : data.fName);
// //here Array.isArray(data)
// // If data is an array → access data[1].fName (i.e., "smitch")
// // If it's not an array (e.g., just a single object) → access data.fName

//    let num1 = 5;
//     let num2 = num1;
//     num1 = 1;

//     console.log(num1); //num 1 =>1
//     console.log(num2); //num 2 =>5 bcoz num 1 was assigned value 5 earlier , copy of it is provieded to num 2 and later num1 is changed hence value for num 1 remains unchanged for num2


//     let array1 = [1, 2, 3];
//     let array2 = array1;
//     array1.push(4);
//     array1.push(5);

//     console.log("array1", array1)
//     console.log("array2", array2) //here array 1 and array 2 will have all changes included in it , boith op are same

//     const array3 = array1.slice(0).concat(9,10);//slice gives starting index
//     console.log("array3", array3)
//     const array4 = [].concat(array1); 
//     console.log("array4", array4);


//     // clone array with new reference (instance)
//         const array5 = [...array1, ...array2, 16, 17 ];
//         console.log("array5", array5);

//         array1.push(6);

//         console.log("array1", array1);//changes will be seen as 6 is added
//         console.log("array5", array5);//chnages in 1 won affect in 5 bcoz neew instance created

// //this loop if used in function 
// const fruits = ['banana', 'apple', 'Grapes', 'orange', 'papaya']

//     for(let i=0; i < fruits.length; i++){
//         // console.log(fruits[i].toUppercase());
//         let fruit = fruits[i];
//         let capitilise = fruit.charAt(0).toUpperCase() + fruits[i].slice(1);
//         console.log("capitilise", capitilise)
//         if(fruits[i]==="Grapes") {
        
//         }
//     }//this will exit function after grapes found .

    
//     const capitilised = fruits.map((itm, i)=>{
//         return itm.charAt(0).toUpperCase() + itm.slice(1)
//     })

//     console.log("capitilised in map", capitilised)

//     //loop cant return values , but map can return values 

//     let text='abc';
//     console.log(text);
//     text=987;
//     console.log(text);

// const readlineSync = require("readline-sync");
// import readlineSync from "readline-sync"

// // const userName = readlineSync.question("Enter your name: ");
// // console.log(`Hello ${userName}!`);
// var userName = readlineSync.question('May I have your name? ');
// console.log('Hi ' + userName + '!');



/* LOGICAL OPERATORS EXAMPLES */

/* ---------------------------- */
/*         AND (&&)             */
/* ---------------------------- */

// Returns the first falsy value or last truthy one

// console.log("a" && "b" && "d");       // "d" — All truthy, returns last
// console.log("a" && "" && "d");        // "" — First falsy
// console.log("a" && "b" && "");        // "" — First falsy
// console.log("" && "b" && "d");        // "" — First falsy
// console.log("a" && "" && "");         // "" — First falsy
// console.log("" && "b" && "");         // "" — First falsy
// console.log("" && "" && "d");         // "" — First falsy
// console.log("" && "" && "");          // "" — First falsy

// console.log("a" && "b" && null);      // null — First falsy (null)
// console.log("a" && "b" && undefined); // undefined — First falsy (undefined)
// console.log("a" && null && "c");      // null — First falsy
// console.log(null && "b" && "a");      // null — First falsy

// /* ---------------------------- */
// /*         OR (||)              */
// /* ---------------------------- */

// // Returns the first truthy value or last falsy one

// console.log("a" || "b" || "d");       // "a" — First truthy
// console.log("" || "b" || "d");        // "b" — Skips first falsy
// console.log("" || "" || "d");         // "d" — First truthy
// console.log("" || "" || "");          // "" — All falsy, returns last
// console.log(null || "b" || "c");      // "b" — First truthy
// console.log(undefined || null || "c");// "c" — First truthy
// console.log(null || undefined || ""); // "" — All falsy

// /* ---------------------------- */
// /*     COMBINED (&& and ||)     */
// /* ---------------------------- */

// // AND has higher precedence than OR

// console.log("a" && "b" || "c");       // "b" — ("a" && "b") => "b", then "b" || "c" => "b"
// console.log("a" || "b" && "c");       // "a" — "b" && "c" => "c", then "a" || "c" => "a"
// console.log("" && "b" || "c");        // "c" — "" && "b" => "", then "" || "c" => "c"
// console.log("a" && "" || "c");        // "c" — "a" && "" => "", then "" || "c" => "c"
// console.log("a" && null || undefined);// undefined — "a" && null => null, null || undefined => undefined
// console.log("a" || null && "b");      // "a" — null && "b" => null, "a" || null => "a"

// /* ------------------------------------------ */
// /*         LOGICAL OPERATORS CHEAT SHEET      */
// /*         Focus: 0, null, undefined           */
// /* ------------------------------------------ */

// /* ---------- AND (&&) ---------- */
// // Returns the first falsy value, or the last truthy if all are truthy

// 0 && "a";               // => 0         // 0 is falsy, returned immediately
// "a" && 0;               // => 0         // 0 is falsy, returned
// null && "a";            // => null      // null is falsy
// "a" && undefined;       // => undefined // undefined is falsy
// "a" && "b";             // => "b"       // all truthy, returns last

// /* ---------- OR (||) ---------- */
// // Returns the first truthy value, or the last falsy if all are falsy

// 0 || "a";               // => "a"       // 0 is falsy, next is truthy
// "a" || 0;               // => "a"       // first truthy value
// null || "a";            // => "a"       // null is falsy
// undefined || "a";       // => "a"       // undefined is falsy
// null || 0 || undefined; // => undefined // all falsy, returns last

// /* ---------- Summary ---------- */
// // && stops at falsy and returns it
// // || stops at truthy and returns it

// // Falsy values in JS: 
// // - 0
// // - null
// // - undefined
// // - false
// // - ""
// // - NaN

// let arr=["a","b","c"];
// let arr1=["w",];

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr1.length;j++){
//        if(arr[i]==arr1[j]) {
//         console.log(arr[i]," is Same in both arrays ")
//        }
// }
// }
// Define a string to be analyzed
const inputString = "hello, I love GFG...";

// Define a string that contains all lowercase vowels
const vowels = "aeiou";

// Loop through each character in the input string
// for (let i = 0; i < inputString.length; i++) {

//     // Check if the current character (converted to lowercase) is a vowel
//     // .includes() returns true if the character exists in the 'vowels' string
//     if (vowels.includes(inputString[i].toLowerCase())) {
        
//         // If true, it's a vowel
//         console.log(`${inputString[i]} is a vowel`);
//     } else {

//         // If false, it's not a vowel
//         console.log(`${inputString[i]} is not a vowel`);
//     }
// }

// "aeiou".includes("e") → true, because 'e' is in the string
// "aeiou".includes("x") → false, because 'x' is not in the string
// Case-sensitive: "aeiou".includes("I") → false, use toLowerCase() to fix this



// function calculateSum(min,max){
//     for(let i=min ;i<=max;min++){
//         let sum =0;
//         sum += min+1
//         console.log("sum is",sum)
//     }
// }
// calculateSum(5,10);



// const message = "Pratiksha";
// const index = 6;
// const char = message.charAt(index);
// const code = message.charCodeAt(char);
// console.log(`Ascii code of ${char} is ${code}`);


const message ="Pratiksha";
    let newMessage ="";

for (let i=0 ; i<message.length ; i++){
    let char = message.charAt(i);
    let code = message.charCodeAt(i);
    // console.log(`Ascii Code of ${char} is ${code}`);
    let newCode = code-2;
    let newStr = String.fromCharCode(newCode);
    newMessage +=newStr;
 
}
  console.log(newMessage); 
  console.log(message.indexOf("a"))













