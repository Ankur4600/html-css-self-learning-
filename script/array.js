//Array is just a list of values whose index start with 0 and it is used to store multiple value in a single variable
let array=[1,3,4,'ankur','shrivastav',22];//declaration of array


//if we check tppeOf of array its return object as it is a kind of object
console.log(typeof array);

//accessing values of array
let name1=array[3];//assigning the value which is present at index 3 to variable name1
console.log(name1);

//to check if the variable is array or not we a method "Array.isArray(array_name)"; it return true if the variable is array and return false if it is not
let x=9;
console.log(Array.isArray(array));//it return true 
console.log(Array.isArray(x));//it return false


//to check the length of array we use .length 
console.log(array.length);


//to  remove element of array from end  we use ".pop()" method
console.log(array);
let popElement=array.pop();
console.log(array);
console.log(`removed element is ${popElement}`);


//to add element at the end of the array we use ".push()" method
array.push(55,56,'mohit');
console.log(array);

//to add element at the beginning of the array we use ".unshift()"method
array.unshift('tinku','kumar',9889187722);
console.log(array);

//to remove element from the front of the array we use ".shift()"method
array.shift();
console.log(array);



//splice is used to add or remove element from a particlar index

array.splice(2,3,'shyampatti','madhopur buzurg');
console.log(array);

//toString() method is used to convert array into string

// let a=array.toString();
console.log(array.toString());


//sort() method of array instance sorts the element of array in place and returns the reference of the same array
array.sort();
console.log(array);

//destructuring also work fpr arrays
let [a,b,c,d]=array;
console.log(a);
console.log(b);
console.log(c);
console.log(d);