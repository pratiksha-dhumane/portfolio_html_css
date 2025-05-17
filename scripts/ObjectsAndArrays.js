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
    // let num1 = 5;
    // let num2 = num1;
    // num1 = 1;

    // console.log(num1);
    // console.log(num2)


    // // Ref - [01001]
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
        // const array5 = [...array1, ...array2, 16, 17 ];
        // console.log("array5", array5);

        // array1.push(6);

        // console.log("array1", array1);
        // console.log("array5", array5);


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

    // const capitilised = fruits.map((itm, index)=>{
    //     return itm.charAt(0).toUpperCase() + itm.slice(1)
    // })

    // console.log("capitilised in map", capitilised)

    // // for, of, in

    // for( let fruit in fruits){
    //     console.log(fruit)
    // }

    // array distructuring --


    // Object --
    // Objects dont have index, they are stored in key value pair

    // // notations (dot, bracket))

    // diff between dot & bracket


    // how to iterate array

    // objects.keys, objects.value

    // computed properties
    
    // spread operator


    // const fruits = ['banana', 'apple', 'Grapes', "water melon dude", 'orange', 'papaya', "passion fruit", "dragon fruit"];
    // const result = [];
   

    // for(let i = 0; i< fruits.length; i++){

    //     const capitilisedWords = [];

    //     let fruit = fruits[i];
    //     const words = fruit.split(" "); 
    //     for(let j = 0; j<words.length; j++){
    //         let word = words[j];
    //         // let calculateWord = word.charAt(0).toUpperCase() + word.slice(1);
    //         let calculateWord = word.slice(0, word.length-1) +  word.charAt(word.length-1).toUpperCase();
    //         capitilisedWords.push(calculateWord);
    //     }

    //     console.log("capitilisedWords=>", capitilisedWords);

    //     result.push(capitilisedWords.join(" "));

    // }

    // console.log("result", result);


    // for will iterate as per condition but will not return anything (function for return)--- 
    // map will iterate all array by returning it, we cant break it
    
//     function calculateCapitla (fruits){
//         let  result = [];

//         for(let i = 0; i< fruits.length; i++){
//           let fruit = fruits[i];
//           let capitilised = fruit.charAt(0).toUpperCase() + fruit.slice(1); // Apple
//           result.push(capitilised)
//         }

//         return result
//     }
//     console.log(calculateCapitla(fruits));


//    const  result = fruits.map((fruit, index)=>{
//         return (fruit.charAt(0).toUpperCase() + fruit.slice(1))
//     }).filter((fruit, index)=> fruit.startsWith("B"))
//     console.log("result", result);

    // const filteredResult = fruits.filter((fruit, index)=> fruit.startsWith("b")).map((fruit, index)=>{
    //     return (fruit.charAt(0).toUpperCase() + fruit.slice(1))
    // });

    // console.log("filteredResult", filteredResult);




    // map, filter -- 

    // {

        

    // return(
    //     <h1>jhfjdhf</h1>
    // )
    // }

    // Array desctrucing ----
        // const array1 = [1,2,3];
        // const array2 = [4,5,6]
        // const array3 = [ ...array1, ...array2]
        // console.log(...array3);

    // objects ---
    // { key : value}
    const student = {
        fName :"Pratiksha",
        rollNo : 12,
        "technical skills" : ["Cricket", "guitar", "boxing", "coding"]
    }

    // methods to access keys of objects
    // 1. Dot notation ( static)
        console.log("fname using dot not =>", student.fName);
    
        // add new key using dot notation
        student.age = 25;
    
    // 2. Bracket notation (Dynamic)
        console.log("fname using bracket not =>", student["technical skills"])
        const newKey = "email";
        student[newKey] = "pratiksha@gmail.com";
    
        console.log("student ==>", student);


 // How to iterate objects --- 
 
        for(let key in student){
            console.log(key, "->", student[key]);
        }


// Computed properties ---
        const key1 = "lastName";
        const key2 = "result";

        const value1 = "Ghodke";
        const value2 = "fail";

        {
            lastName : "Ghodke";
            result: "fail"
        }

        student[key1] = value1;
        student[key2] = value2;

        console.log("student at the end", student);

        sportKey = "player";
        index = 1
        value = "Pramod";

        const sports = {};

        // {
        //     player1 : "Pramod",
        // }
        sports[`${sportKey} ${index}`] = value;
        console.log("sports == >", sports)

        // Destructing objects ---
            const patient= {
                pName : "Mental",
                belogns: "Madiz Hospital",
                age: 20,
                country : "turkey"
            }

            // const { pName, age, country = "pakistan" } = patient;
            // console.log("pName =>", PatientName, age, country);

            const patient2={
                info: {
                    pName : "Mental2 ",
                    belogns: "Madiz Hospital",
                    age: 20,
                    country : "turkey"
                },
                isDelete : false
            }

            // const { info: {pName, age}} = patient2;
            // console.log("pName", pName);

            // console.log("spreading", {...patient2});

            const { pName, age, mName="jhfjdg", ...restProps } = patient;
            console.log("Pname", pName, age, mName);
            console.log("...restProps", restProps);

            // const result1 = {
            //     key1: "Somehthing",
            //     key2: "Everything",
            //     key1:"Nothing"
            // }

            // console.log("result1 =>", result1)

            const a = { key1:"Something", key2:"Everything"}
            const b = { key3 : "Nothing" };
            const result2 = { ...a, ...b};
            console.log("result2=>", result2);

            function calculate ({x, y, z}){
                let sum = x + y + z;
                return sum;
            }

            const params = { x:2, y:5, z:6 };

            console.log("objects.keys", calculate(params.x, params.y, params.z));

            console.log("destructure in funtion paramter", calculate(params)); // instead spread at fun. params

            console.log("using spread on object", ...[params.x, params.y, params.z]);
        
            const result = calculate(params);
            console.log("result sum", result);

            const keys = Object.keys(patient2.info);
            console.log("keys", keys)

            const values = Object.values(patient2.info);
            console.log("values", values);

            console.log("type of values", Array.isArray(values) ? "Array hai" : "nhi re baba");

            // const status = "pratiskha";
            // console.log("status", status);
            // name, status cannot be declared 
          







        
      

        

       
    
