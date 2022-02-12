// Datatypes =>* 

// * Primitive , *Non-Primitive(reference)

// Primitives => 
// **ye wo dataTypes hote hai jinki copy bnane pr unki actual values jati hai , mtlb unki actual values ki copy bn jati hai
// let a = 5 , let b = a; 
    // String,
    // Number,
    // Boolean,
    // null,
    // undefined,
    // symbol => es8

    // let a = 4;
    // let b = a;
    // console.log(a - 1 , b - 2);
 
// Reference =>
// **ye wo dataTypes hote hai jinki copy bnane pr unki actual values nhi jati hai  jbki unka address ya reference jata hai
// **this means => ,They cannot be directly copied
    //Array
    //Object
    //function

// let arr = ["abhi", 2 , 5 , "sachin"];
// let b = arr;

// b = b.pop();
// console.log(arr);

//--------------------------------------------------------------------------------------------------

// variables =>
// **var 
// **let
// ---
// **const

// *OnLog = not defined, error
// var a; declaration => *OnLog = undefined - (Value,DataType)
// a = 0; assignment/define 

// console.log("line 44" , a);
// var a; console.log("line:45",a);
// a = 10;

// var , let , const 
// var => es4 <-, let => ->es5, const

const a = 13;
// console.log(a);

// Conditional Staments =>

//--- Control Flow Statements()
// entryPoint , exitPoint

// ternary---
// agar a , teen se bada hai to ? ke baad wali nhi to : ke baad wali
a > 3 ? console.log("hello") : console.log("nhi h")

// if(a > 3) console.log("hello");
// else console.log("nhi h")
