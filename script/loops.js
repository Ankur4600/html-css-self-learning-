let arr=['ankur','shrivastav',98,89,18,'middle',77,22,'tinku','shrivastav'];
// //while loop
// let i=0;
// while(i<arr.length){
//     console.log(arr[i]);
//     i++;
// }

// console.log('for loop');
// //for loop
// for(let j=0;j<arr.length;j++){
//     console.log(arr[j]);
// }

// console.log('do-while loop');
// //do while loop
// let k=0;
// do{
//     console.log(arr[k]);
//     k++;
// }while(k<arr.length);

// break and continue condition
for(let a=0;a<arr.length;a++){
    if(arr[a]===18)continue;
    console.log(arr[a]);
}


 for(let a=0;a<arr.length;a++){
    console.log(arr[a]);
    if(arr[a]==='middle') break;
    
 }