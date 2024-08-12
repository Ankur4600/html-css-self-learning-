//display good morning ,afternoon and night based on current hour and also add the name to the output too

function greet(name='Abhishek sir😀'){
    let date=new Date();
    let hours=date.getHours();
    let message= document.querySelector("#greeting");
    if(hours>5 && hours<12){
        message.innerText=`Good MorningMorning ${name}`;
    }else if(hours>12 && hours<18){
        message.innerText=`Good Afternoon ${name}`;
    }else {
        message.innerText=`Good Night ${name}`;
    }
}
greet('ankur');


//create a button which shows the number how many times it has been pressed -> also it has different colours for when it has been pressed odd and even time. ->the click count should also survive browser refresh
let value=localStorage.getItem('count')||0;
let count;
resetValue(value);
function resetValue(value){
    count=value?JSON.parse(value):0;
}
function clickMe(){  
    count++;
    localStorage.setItem('count',JSON.stringify(count));
    buttonUpdate();
};
function buttonUpdate(){
    let button=document.querySelector('#click');
    if(count===0){
        button.innerText='0';
    }else{
        if(count%2===0){
        button.classList.add('js-even');
        button.classList.remove('js-odd');
        }else{
        button.classList.add('js-odd');
        button.classList.remove('js-even');
        }
        button.innerText=count;
    }
}
function deleteStorage(){
    // let reste=document.querySelector('#reset');
    localStorage.clear();

};