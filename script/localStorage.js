let product={
    company:'poco',
    modelNo:'f1',
    price:31000,
    yearOfPurchase:2021,
};
console.log(product);
//storing data to local storage
localStorage.setItem("product",JSON.stringify(product));

//retrieve data from local storage
let recData=JSON.parse(localStorage.getItem("product"));
console.log(recData);

let product1={
    company:'poco',
    modelNo:'f1',
    price:27500,
    yearOfPurchase:2021,
};
let product2={
    company:'poco',
    modelNo:'f1',
    price:21000,
    yearOfPurchase:2021,
};
localStorage.setItem("product1",JSON.stringify(product1));
localStorage.setItem("product2",JSON.stringify(product2));

//removing one item from local storage
// localStorage.removeItem("product2");
//to clear local storage
localStorage.clear();
