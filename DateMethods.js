//current date and time
/*
var now=new Date(); 
document.write(now);
*/
//get methods of date.
//1.toDateString();
/*
var a=new Date();
document.write(a.toDateString());
*/
//2.getDate();
/*
var a=new Date();
document.write(a.getDate());
*/
//3.getFullyear();
/*
var a=new Date();
document.write(a.getFullYear());
*/
//4.getMonth();0->jan,2->February,3->march
/*
var a=new Date;
document.write(a.getMonth());
*/
//5.getday();0->Sunday,1->monday,02->tuesday03->wednesday,->04thursday
/*
var a=new Date();
document.write(a.getDay()); 
*/
//getHour();
/*
var a=new Date();
document.write(a.getHours());
*/
//getMinutes();
/*
var a=new Date();
document.write(a.getMinutes());
*/
//getSeconds();
/*
var a=new Date();
document.write(a.getMilliseconds());
*/
//set methods thi methods is used to set value of date or time .past time or date.
//setDate();
/*
var a=new Date();
a.setDate(22);
document.write(a);
*/
//setFullYear();
/*
var a=new Date();
a.setFullYear(2001);
document.write(a);
*/
//setMonth();
/*
var a=new Date();
a.setMonth(5);
document.write(a);
*/
//setHour();
/*
var a=new Date();
a.setHours(12);
document.write(a);
*/
//setMinutes();
/*
var a=new Date();
a.setMinutes(56);
document.write(a);
*/
//setSeconds();
/*
var a=new Date();
a.setSeconds(59);
document.write(a);
*/
//setMilliSeconds();
/*
var a=new Date();
a.setMilliseconds(546);
document.write(a);
*/
var a=new Date();
document.write(a.getDate()+"/"+a.getMonth()+"/"+a.getFullYear());