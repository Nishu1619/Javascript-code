/*
var a=prompt("Enter Your Age");
document.write("My age is "+a);
*/

var marks=parseInt(prompt("Enter Marks"));

if(marks>=80 && marks<=100){
    document.write("Merit")
}
else if(marks<80&&marks>=60){
    document.write("1st division");

}
else if(marks<60&&marks>=45){
    document.write("2nd Division");
}
else if(marks<45&&marks>=33){
    document.write("3rd division");
}
else{
    document.write("Fail");
}
