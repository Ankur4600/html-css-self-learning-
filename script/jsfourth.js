/* we need to give discount based on the age and gender for metro ticket
  -females get 50% off.
  -kids under 5 years of age are free.
  -kids upto 8 years have half ticket.
  -people over 65 years of age only pay 30% of the ticket
  in case of multiple discount max discount will apply*/ 
let age=8;
let gender='male';
let finalDiscount;

if(age<=5){
    finalDiscount=100;
}else if(gender==='female'&& age>=65){
    finalDiscount=(100-30);
}else if(age<=8||gender==='female'){
    finalDiscount=50;
}else if(age>=65){
    finalDiscount=(100-30);
}else{
    finalDiscount=0;
}

if(gender==='male'&&(age>8 && age<65)){
    console.log(`You don't need any discount King🤴`);
}else{
console.log(`The final discount is ${finalDiscount}%`);
}