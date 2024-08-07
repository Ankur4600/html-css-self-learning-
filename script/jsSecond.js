let cartValue=0;

function bag(){
    cartValue++;
document.querySelector('#summary').innerText=`Your Bag Has ${cartValue} Items`;
}
function wishlist(){
    cartValue--;
document.querySelector('#summary').innerText=`Your Bag Has ${cartValue} Items`;
}
function addSale(){
    cartValue+=2;
document.querySelector('#summary').innerText=`Your Bag Has ${cartValue} Items`;
}