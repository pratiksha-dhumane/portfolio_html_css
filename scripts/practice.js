// Conversiobn from number to string and string to number 
var str = "ABC";
var number =  123;
const arr = [1, 2, 2];
console.log(typeof arr); // op=> Array 
console.log("Type of str :", typeof str);// op=>string
console.log("converting string to number :", typeof +str);//bcoz of unary operator it converts string to number
console.log("Type of number :", typeof number);
console.log("Converting number to string : ", typeof " "+number ); //op=>string123
console.log("Converting number to string", typeof (" "+number ));//op=> string cuz ()implemented

//break and continue
  for( let i=0; i<=5; i++){
            if(i === 3) continue; //the loop continues but 3 is not printed 
            if( i === 5) break; //loop is exited and no output is printed bcoz o f break is used
            console.log(i);
        }

//in js , array is treated as object

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

    console.log(Array.isArray(data) ? data[1].fName : data.fName);
//here Array.isArray(data)
// If data is an array → access data[1].fName (i.e., "smitch")
// If it's not an array (e.g., just a single object) → access data.fName

   let num1 = 5;
    let num2 = num1;
    num1 = 1;

    console.log(num1); //num 1 =>1
    console.log(num2); //num 2 =>5 bcoz num 1 was assigned value 5 earlier , copy of it is provieded to num 2 and later num1 is changed hence value for num 1 remains unchanged for num2


    let array1 = [1, 2, 3];
    let array2 = array1;
    array1.push(4);
    array1.push(5);

    console.log("array1", array1)
    console.log("array2", array2) //here array 1 and array 2 will have all changes included in it , boith op are same

    const array3 = array1.slice(0).concat(9,10);//slice gives starting index
    console.log("array3", array3)
    const array4 = [].concat(array1); 
    console.log("array4", array4);


    // clone array with new reference (instance)
        const array5 = [...array1, ...array2, 16, 17 ];
        console.log("array5", array5);

        array1.push(6);

        console.log("array1", array1);//changes will be seen as 6 is added
        console.log("array5", array5);//chnages in 1 won affect in 5 bcoz neew instance created

//this loop if used in function 

    for(let i=0; i < fruits.length; i++){
        // console.log(fruits[i].toUppercase());
        let fruit = fruits[i];
        let capitilise = fruit.charAt(0).toUpperCase() + fruits[i].slice(1);
        console.log("capitilise", capitilise)
        if(fruits[i]==="Grapes") {
            return
        }
    }//this will exit function after grapes found .

    
    const capitilised = fruits.map((itm, i)=>{
        return itm.charAt(0).toUpperCase() + itm.slice(1)
    })

    console.log("capitilised in map", capitilised)

    //loop cant return values , but map can return values 