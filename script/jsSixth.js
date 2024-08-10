//create object to representa product from myntra
let product={
    company:'New Balance',
    itemname:'men 327 Sneakers',
    price:5999,
    rating:{
        stars:3.9,
        reviews:'good',
    },
    'delivery-time':'especting at 9am',
};
// console.log(product);
//create an object with two reference and log changes to one object by changing the another one
let product1=product;
product1.price=4999;
console.log(product.rating.stars);
console.log(product.rating.reviews);
console.log(product.itemname);
console.log(product.company);
console.log(product.price);


//use bracket notation to display delivery time
console.log(product['delivery-time']);
// given an object {message:'good job',status:'complete',}; use de-structuring to create two variables message and status
let object={
    message:'good job',
    statu:'complete',
};
let{message,statu}=object;
console.log(message);
console.log(statu);

//Add function isIdenticalProduct to compare two product
//object 1
let obj1={
    name1:'ankur',
    age:22,
    language:'javaScript',
}

//object 2
let obj2={
    name1:'ankur',
    age:22,
    language:'javaScript',
}
//object 3
let obj3={
    name1:'mohit',
    age:23,
    language:'javaScript',
}
//object 4
let obj4={
    name1:'ankur',
    age:23,
    language:'javaScript',
}
//object 5
let obj5={
    name1:'piyush',
    age:23,
    language:'javaScript',
}
function compare(obj1,obj2){
    if(obj1.name1 == obj2.name1 && obj1.age === obj2.age && obj1.language === obj2.language){
        return true;
    }else{
        return false;
    }
}
console.log(compare(obj2, ""));
console.log(compare(obj2,obj1));
console.log(compare(obj2,obj3));
console.log(compare(obj3,obj5));
console.log(compare(obj2,obj2));
console.log(compare(obj2,obj1));


