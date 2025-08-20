// stack and heap
//stack----->primitive   --->copy milti hai
//heap--->non-primitive    --->reference milta haii

let myname="mehtamayank"

let anothername=myname
// console.log(anothername);

anothername="mayank"

console.log(myname);
console.log(anothername);


//non-primitive
let user1={
    email:"mayank@gmail.com",
    upi:"abc"
}

let user2=user1;     //reference de rhe h --->non-primitive hai

user2.email="user@gmail.com"    //it will change the value of user1 email also-->

console.log(user2.email);
console.log(user1.email);







