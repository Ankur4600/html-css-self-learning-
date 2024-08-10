//create a method to check if a number is odd or even
function isOdd(num){
    return num%2==1?'odd':'even';
}
// console.log(isOdd(42));
// console.log(isOdd(31));
// console.log(isOdd(55));
// console.log(isOdd(56791));


//create a method to return larger of two number
function isLarger(num1,num2){
    return num1>num2?num1:num2;
}
// console.log(isLarger(55,65));
// console.log(isLarger(32,36));
// console.log(isLarger(74,746));
// console.log(isLarger(4530,64894));


//create method to convert celsius to fahrenheit

function isFahrenheit(celsius){
    let result=(9/5)*celsius+32;
    console.log(result);
}

isFahrenheit(35);
isFahrenheit(0);
isFahrenheit(100);

