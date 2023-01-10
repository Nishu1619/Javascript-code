//we cant asign value in cons variable but we can changethe value of const variable by index by index
/*
const arr=[15,45,74,54];
document.write(arr+"<br>");
arr[1]=50;
document.write(arr);
*/
const obj={
    name:"Nishu",
    age:23,
    sname:"Chaudhary",
    email:"NishuChaudhary84@gmail.com",
    Fullname:function(){
        return this.name+" "+this.sname;
    }
}
document.write(obj.Fullname()+"<br>");
document.write(obj.name+"<br>");
obj.name="Divakar";
document.write(obj.name)