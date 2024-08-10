//onject in javaScript:- it groups multiple vales together in key-value pairs

//this is how an object creates
let user={
    name:"ankur",
    age:22,
    'git-account':'Ankur4600',
};
console.log(typeof user);//checking the type of the user and the answer is object
//accessing objects
//there are twop way to access the property of the object the first one is "dot operator" and second "bracket notation"
console.log(user);
console.log(user.name);
console.log(user["git-account"]);//bracket notation to access the objects
console.log(user.age);
//changing he value of  keys
user.name='tinku';
console.log(user);
//deteting the object property by using delete keyword
delete user.name;
console.log(user);
