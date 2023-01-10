var a=new Object();
a.fname='Nishu';
a.lname='Chaudhary';
a.age=23;
a.email='Nishu@gmail.com';
a.arr=['N','S','D'];
a.salary=function(){
    return 25000;
};
a.fullname=function(){
    return this.fname+" "+this.lname;
}
document.write(a.salary());
document.write(a.fullname());
console.log(a);