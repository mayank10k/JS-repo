//   Primitive --->call by value

// 7 types : String, Number, boolean ,null, undefined, Symbol(to create unique),BigInt(for very big values)



//   Non-Primitive --> reference type  
// datatypes of all is ---> object
//   for function --> object function

//  types :  Array, Object, Functions


// JS is dynamically typed
let x = 10;      // x is a number
x = "hello";     // now x is a string
x = true;        // now x is a boolean


// let and const are to declare variables

// let:
//     -->Declares a block-scoped variable (only accessible inside { } where it’s defined).
//     -->The value can be changed (reassigned).


// const
//   --> Declares a block-scoped variable.
//   --> The value cannot be reassigned.
//   --> Must be initialized at the time of declaration.

const score=100
const scoreval=100.45

const isloggedin=false
const temperature=null

// in both the cases value will be undefined
let useremail;
useremail=undefined

const id=Symbol('345')
const anotherid=Symbol('345')
// even if the values are same but they have different values ---> symbol creates it unique
console.log(id===anotherid);


const bigNum=34567891234567878n  //putting 'n' at the last creates it BigInt


//  ARRAYS ,  OBJECTS , FUNCTIONS

//ARRAY   -->[]
const heros=["mayank","sonu","mayankk","ankit"]
console.log(heros);


//OBJECTS   -->{}    -stored in the form of key value pairs

// datatype of null is Object

let myObj={
    name:"mayank",
    age:19
}
console.log(myObj);


//FUNCTION

const myFunction=function(){
    console.log("hello world");
    
}
myFunction()

console.log(typeof(bigNum));
console.log(typeof(temperature));   // datatype of null is Object
console.log(typeof(myFunction));    // datatype -->Object function
console.log(typeof(heros));
console.log(typeof(id));



