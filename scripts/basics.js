
// History
    // Netscape  == > Mocha, Livescript, Javascript              Microsoft ==> Jscript

// Hello world program
    // console.log("Hello World pagal");


// rules or ways to declare to variables
    // - no numbers, no spaces, can use only _ & $, snake case, use camel case 
// Declare variable using var
//  var = > Functional scope, reDeclare,
//  Let = > Block Scope, Cant reDeclare
//  const => Block scope, cant reDeclare redefine.

// const status = null;

function add (){
    
    if(true){
        var mark;
        if(mark){
            let check = mark > 50; 
            return console.log(check)
        }
        else{
            console.log("exam not given", mark);
        }
    }
}

// add(45);
 
// String Indexing
    // const firstName = "Pratiksha";
    // const lastName = "Dhumane";
    // console.log("fullName =>", "My full name is" +firstName + " " + lastName);
    // console.log(`My full name is ${firstName} ${lastName}`);

    // console.log("name", firstName[firstName.length-2]) op=>h
    // console.log("firstName", firstName)
    // how to print last letter of any string in js.

// Useful string methods
    // trim(), upperCase(), lowerCase(), slice()

//datatypes (string, number, Boolean, undefined (let name; console.log(typeof is an operator)), null(object), bigInt, Symbol(regex), object, array(object))
// typeof Operator
// Null, undefined, BigInt, typeof
    // var str = "dhfjdgfhdj";
    // var number =  0;
    // const arr = [1, 2, 2];
    // console.log(typeof arr);
    // console.log("converting string to number", typeof +number);

    
// Booleans and Comparison Operator -----
    // const firtsName = "pratiksha";
    // const check = (firtsName.length)>2;
    // console.log("status", check);

    // {
    //     attendance : true
    //     present : false
    // }

    // const attendance = false;
    //     function checkExam(){
    //         if (attendance) return true;
    //         else{
    //             console.log("she is not eligible");
    //         }
    //     }

    //    console.log(checkExam() ? "Present" : "Absent")

    // console.log(checkExam());
   
    // Truthy and Falsy Values (false, "", null, undefined, 0)
    // const checkFlag = false;
    //     if(checkFlag){
    //         console.log("flag checked");
    //     }
    //     else{
    //         console.log("flag failed");
    //     }

    //     var checkValue = "";
    //     var checkValue = null;
    //     var checkValue ; // undefined;
    //     var checkValue = 0; 
    //     if(checkValue){
    //     console.log("submitted");
    //     }
    //     else{
    //         console.log("not yet submitted");
    //     }


        // If else statement 
        const marks = 24; // beginner, intemediate, expert, pro;
// Nested if else
    // if(marks<25){
    //     console.log("Beginner");
    // }
    // else if(marks>25){
    //     if(marks<50){
    //         console.log("intermediate")
    //     }
    // }
    // else if(marks>50){
    //     if(marks<75){
    //         console.log("expert")
    //     }
    // }
    // else if(marks>75){
    //     if(marks<=100){
    //         console.log("pro")
    //     }
    // }
    
    // If elseif else (big if else condition, such as result level by student score, such if 10% to 30% then beginner, then intermediate, pro);
// && || operator
        // if(marks<25){
        //     console.log("Beginner");
        // }
        // else if(marks>25 && marks<50){
        //         console.log("intermediate")
        // }
        // else if(marks>50 && marks<75){
        //         console.log("expert")
        // }
        // else{
        //         console.log("pro")
        // }

    
// Ternary Operator
        // var result = ""
        // marks<25 ? result = "Beginner" :  marks>25 && marks<50 ? result = "intermediate" : marks>50 && marks<75 ?  result = "expert" : result = "pro";

        // console.log("result ==>", result);

        // const [name, setName] = useState("");

        // {
        //     name ?? <h1>{name}</h1>
        // }
        
// Switch statement 
        const day= 3;
         // 1 to 5


        switch(day){
            case 1:
            console.log("Its an monday");
            break;

            case 2:
            console.log("Its an monday");
            break;

            case 3:
            console.log("Its an wednesday");
            break;

            default:
            console.log("Day is not present")
        }

    
// While loop 
        // let i=0;
        // while(i<=5){
        //     console.log(i);
        //     i++
        // }

        // let num = 1;
        // while(num<=10){
        //     console.log(`sqaure of ${num} is ${num * num}`)
        //     num++;
        // }
        
        // let sum = 0;
        // let num = 1;
        // while(num <=4){
        //     if(num % 2 === 0){
        //         sum += num;
        //     }
        //     num ++;
        // }
        // console.log("Sum of even numner", sum)

// Do while loop
        // do{
        //     console.log(i);
        //     i++;
        //     console.log("i at the end", i)
        // }while(i<5)

// For loop

        for( let i=0; i<=5; i++){
            console.log(`5 * ${i} = ${5*i}`)
        }

        for( let i=0; i<=5; i++){
            if(i === 3) continue; 
            if( i === 5) break;
            console.log(i);
        }

// For loop examples
// Break and continue keyword

