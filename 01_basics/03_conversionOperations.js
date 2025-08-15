// let score="89"
// let score=null
// let score=undefined
let score=true

let a="45ab"

console.log(typeof score)
console.log(typeof a)

let valinNum=Number(score)
let Num=Number(a)

console.log(typeof valinNum)

console.log(typeof Num)  // it will be converted to number but 
console.log(Num)         // but in actual it is not a number   // Output NaN



/*

output of all data types when converted to a string

89--> Number
null --> 0
undefined --> NaN
"mayank" --> NaN
true/false --> 1/0

*/

// let val=1
// let val=0
// let val="mayank"
let val=""
let newVal=Boolean(val)
console.log(newVal)


/*
1--> true , 0--> false
"abc" --> ture , ""--> false
*/