// //create an array of number [5,6].Add 4 at the beginning and 7 at the end of the array
// let array=[5,6];
// array.push(7);//adding at the end of the array
// console.log(array);
// array.unshift(4);//adding at the beginning of the array
// console.log(array);

// //create a method to return an element at a perticular position in the array
// function value(arr){
//     for(let i=0;i<arr.length;i++){
//         if(i===5){
//             return arr[i];
//         }
//     }
// }
// let array1=[22,11,75,40,400,20,98,89,18,77,22];
// console.log(value(array1));

// //create an array copy using slice method
// let copyArray=array1.slice(2,8);//copying array by slice method fron index 2 to index 8
// console.log(copyArray);


//create a while loop that exits after counting 5 prime numbers

//modify the above loop to finish using break
// function isPrime(num){
//     for(let i=2;i<num;i++){
//         if(num%i===0){
//             return false;
//         }
//     }
//     return true;
// }
// let num=2;
// let i=0;
// while(true){
//     if(isPrime(num)){
//         console.log(num);
//         i++;
//         if(i>=5) break;
//     }
//     num++;
// }

// create a for loop that prints number 1to10 in reverse order
// for(let i=10;i>0;i--){
//     console.log(i);
// }



//using continue only print positive number from th given array
// let arr=[1,-6,5,7,-98];
// let i=0;
// while(i<arr.length){
//     if(arr[i]>0){
//         console.log(arr[i]);
//     }
//     i++
// }


//using accumulator pattern concatenate all the string in the given array['ankur','is','trying','to','be','a','good','person'];

let array99=['ankur','is','trying','to','be','a','good','person'];
let sentence='';
for(let i=0;i<array99.length; i++){
    sentence=sentence+` ${array99[i]}`;
}
console.log(sentence);
console.log(array99.join(" "));