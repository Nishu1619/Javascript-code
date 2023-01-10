/*
var a={
    fname:"Nishu",
    lname:"Chaudhary",
    age:22,
    Email:"Nishuchaudhary84@gmail.com"
};
console.log(a);
document.write(a.fname+"<br>");
*/
//add array
/*
var a={
     fname:"Nishu",
     lname:"Chaudhary",
     age:22,
     Email:"Nishuchaudhary84@gmail.com",
     arr:["Dhoom","Blue","Hum"]
 };
 //console.log(a.age);
 document.write(a.fname+"<br>");
 document.write(a.arr+"<br>");
document.write(a.arr[2]);
*/
//add function
/*
var s=25000;
var a={
    fname:"Nishu",
    lname:"Chaudhary",
    age:22,
    Email:"Nishuchaudhary84@gmail.com",
    arr:["Dhoom","Blue","Hum"],
    salary:function(){
        return s;
    }
};
console.log(a);
document.write(a.salary());
*/
/*
var a={
    fname:"Nishu",
    lname:"Chaudhary",
    age:22,
    Email:"Nishuchaudhary84@gmail.com",
    arr:["Dhoom","Blue","Hum"],
    salary:function(){
        return s;
    },
    fullname:function(){
        var b=this.fname+" "+this.lname;
        return b;
    }
};
console.log(a);
document.write(a.fullname());
*/
var obj={
 fname:'nishu',
 lname:'chaudhary',
 age:22,
 email:'nishu@gmail.com',
 arr:['Nishu','Chaudhary',23,"Deepak"],
 salary:function(){
     return 25000;

 },
 Fullname:function(){
     return this.fname+" "+this.lname;

 },
 obj1:{
     'city':'Noida',
     'State':'UP',
     'Country':'India'
 }
}
document.write(obj.fname+"<br>");
document.write(obj.arr+"<br>");
document.write(obj.arr[1]+"<br>");
document.write(obj.salary()+"<br>");
document.write(obj.Fullname()+"<br>");
document.write(obj.obj1.city+"<br>");