const user={
    name:"Chandan",
    age:20,
    role:"Developer",
    location:'Aditya Boys Hostel',
    email:"23A91A0511@aec.edu.in",
    ["mysymbol"]:"Mykey1"
}


console.log(user.email)
// Object.freeze(user) //It will freeze the user so that the user value can not be changed
user.email = "chandan.kumar.sah.teli2005@gmail.com"
// console.log(user.email)

// Symbol special case
console.log(user.mysymbol)
// console.log(typeof mysymbol)//undefined this is because the symbol is data type in js
// console.log(typeof [mysymbol]);


//define function in object

user.greeting = function(){
    console.log(`Hello Mr.${user.name}`)
}


console.log(user.greeting())
console.log(user.greeting())