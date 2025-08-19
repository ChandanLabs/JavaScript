
// creating a user
const user ={
    // name:"Chandan",
    "Full name":{
        "Fist name":'Chandan',
        "Midle name":'Kumar sah',
        "Last name":'Teli',
    },
    age:20,
    role:"Developer",
    location:'Aditya Boys Hostel',
    email:"23A91A0511@aec.edu.in",
    language:['Hindi','English','Nepali']
}

// Acessing object
console.log(user.name);
console.log(user.age);
console.log(user.role);
console.log(user.location);
// console.log(user.email);
console.log(user['email']);

console.log(user.language);

console.table(user)
