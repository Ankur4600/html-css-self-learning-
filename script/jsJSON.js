//JSON is a data formate which is common in network calls and data storage
let product={
    company:"Elkos Shine",
    product:"blue pen",
    price:5,
    satisfactionLevel:100,
};
console.log(typeof product);
console.log(product);


//converting to string as JSON is native of javaScript  we can assume that aur object is by default JSON and we can directly convert it into string
// in other language first we have to convert into JSON then into String after converting into string the data can be send to any network
console.log(typeof product);//checking the type of data
let string=JSON.stringify(product);
console.log(string);

//if data is recived from network in string format the it can be converted into JSON by using "JSON.parse()" method
//converting string to Json 
let newProduct=JSON.parse(string);
console.log(typeof newProduct);//checking the type of data
console.log(newProduct);