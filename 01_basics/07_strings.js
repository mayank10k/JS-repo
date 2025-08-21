const name="mayak"
const num=69;

// console.log(name + num);     --> don't use this method

// string inter-polation   ---> use backticks (``) --> modern use
console.log(`hello my name is ${name} and my roll no. is ${num}`) // --->use this instead

//one more type to intialise a string

const game= new String("mayankkkk")
console.log(game);

console.log(game.toUpperCase());
console.log(game.charAt(3));
console.log(game.indexOf('a'));

const newstr=game.substring(3,4);   // 3--> included index  and  4--> excluded index
console.log(newstr);

const anstr=game.slice(-9,4)      // will start form  --> length -9  till 4-1(cause index 4 is excluded) 
console.log(anstr);

const lname="    mayank  ";
console.log(lname);
console.log(lname.trim());    //(mostly) will use it in a input form when user unknowing enters extra spaces before and after the string


// use mdm documentation for various function


const url ="https://mayank.com/mayank%69mehta"

console.log(url.replace("mayank","manku"));

console.log(url.replaceAll("mayank","manku"));   // will replace all the occureence of "mayank" with "manku"

console.log(url);  // original string will remain same --> because strings are mutable

console.log(url.includes("mayank"));   // return -->ture, if present  ..  --> false ,if not present

console.log(url.split('/'));   // seperate the string on the basis of '/'  
