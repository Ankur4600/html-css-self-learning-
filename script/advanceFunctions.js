// functions in javaScript are first class citizens,They can  be assigned to  variables
let sum=function(num1,num2){
    return num1+num2;
} 
let newSum=sum;
console.log(sum(55,0));
console.log(newSum(55,0));

//