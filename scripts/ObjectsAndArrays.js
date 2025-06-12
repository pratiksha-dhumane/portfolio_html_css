// primitive - number, string, boolean
// Reference - array, objects

// Array
    // An array in JavaScript is an object used to store an ordered collection of data.
    let array = [1, 2, "name", "rollNo", true, {}];
    // console.log("array", array);
    


    // Reference data type
        // - In JavaScript, arrays are reference data types because they are stored in the heap memory, 
        // and variables hold a reference (address) to that memory location rather than the actual array data itself. 
        // This behavior differs from primitive data types (like numbers, strings, or booleans), 
        // which are stored directly in the stack memory and whose variables hold the actual values.


// Array.isArray()
    // console.log(typeof array)
    data = [
        {
        fName : "john",
        rollNo : 2,
        result: true
        },
        {
            fName : "smitch",
            rollNo : 3,
            result: true
        }
    ]

    // console.log(Array.isArray(data) ? data[1].fName : data.fName);

// push (add element at end, return an new length), 
//     const fruits = ["mango", "apple"];
//     const pushedElement = fruits.push("grapes");
//     console.log("psuhedElement", pushedElement);

// // pop ( remove element from end, return removed (last) value);

//     const poppedElement = fruits.pop();
//     console.log(poppedElement)

// // unshift (add element at start, return an new length)
//     const unShifted = fruits.unshift("banana");
//     console.log("unShifted", unShifted);
//     console.log(fruits);

// // shift  ( remove element from start, return removed (last) value);
//     const shifted = fruits.shift();
//     console.log("sfited", shifted);
//     console.log(fruits)


// Primitive Vs Ref type
    let num1 = 5;
    let num2 = num1;
    num1 = 1;

    console.log(num1);
    console.log(num2)


    // Ref - [01001]
    // let array1 = [1, 2, 3];
    // let array2 = array1;
    // array1.push(4);
    // array1.push(5);

    // console.log("array1", array1)
    // console.log("array2", array2)



// Clone Array but same reference
    // const array3 = array1.slice(0).concat(9,10);
    // console.log("array3", array3)
    // const array4 = [].concat(array1); 
    // console.log("array4", array4);

    // clone array with new reference (instance)
    //     const array5 = [...array1, ...array2, 16, 17 ];
    //     console.log("array5", array5);

    //     array1.push(6);

    //     console.log("array1", array1);
    //     console.log("array5", array5);


// Arrray Interation
    // for( let i=0; i<=10; i++){
    //     console.log('i=>', i)
    // }

    // Print all element fo array with capitilise its first letter
    // const fruits = ['banana', 'apple', 'Grapes', 'orange', 'papaya']
    // for(let i=0; i < fruits.length; i++){
    //     // console.log(fruits[i].toUppercase());
    //     let fruit = fruits[i];
    //     let capitilise = fruit.charAt(0).toUpperCase() + fruits[i].slice(1);
    //     // console.log("capitilise", capitilise)
    // }

    // for(let i=0; i < fruits.length; i++){
    //     // console.log(fruits[i].toUppercase());
    //     let fruit = fruits[i];
    //     let capitilise = fruit.charAt(0).toUpperCase() + fruits[i].slice(1);
    //     console.log("capitilise", capitilise)
    //     if(fruits[i]==="Grapes") {
    //         return
    //     }
    // }

    // const capitilised = fruits.map((itm, i)=>{
    //     return itm.charAt(0).toUpperCase() + itm.slice(1)
    // })

    // console.log("capitilised in map", capitilised)





    // for, of, in

    // for( let fruit in fruits){
    //     console.log(fruit)
    // }

    const array6 = [2, 5, 7, 5, 89,8]
    function sumArray(arr){
        console.log("Props array")
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
        // console.log(sum)
    }
    return sum;
}
console.log(sumArray(array6))

let sum=0;
 array6.map((number , i)=>{
    sum +=number;
})
console.log("Sum using map",sum)

function largestNum(arr){
let largestNum=0;
for (let i=0;i<arr.length;i++){
    if(arr[i]>largestNum){
        largestNum =arr[i];
    }
}
return largestNum
}
console.log(largestNum(array6));

let largestNumber=0;
array6.map (num=>{if(num>largestNumber)  largestNumber =num;   
})
console.log("largest number using map",largestNumber)

const doubled = array6.map(num=>2*num)
console.log("doubled",doubled)