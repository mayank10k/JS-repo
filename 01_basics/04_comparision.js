// console.log(2>1);
// console.log(2>=1);
// console.log(2!=1);
// console.log(2==1);


// console.log("2">1);    //typescript doesnt allow us to compare two different types of values
// console.log("02">1);

console.log(null>0);
console.log(null==10);  //equilty doesn't convert null to 0
console.log(null<=0);   //undefined gives false for equity and comparision both
console.log(null>=0);


//equity check works differently(==) and and comparision(>,<,>=,<=) works differently
//comparision converts null to a number



//  ===  (strict check)

console.log("2"===2);   // it strictly checks both the datatype and the value 
//if both datatype and the value are same then it gives output as ---> true


