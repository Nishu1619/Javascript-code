//Divided by 2 called even number
//Not divided by 2 called odd number

/*
for(var a=1;a<=10;a++){
    if(a%2==0){
        document.write("These are even numbers:"+a+"<br>");
    }
    */
   /*
for(var a=1;a<=10;a++){
    if(a%2!==0){
        document.write("These are odd numbers:"+a+"<br>");
    }
}
*/
/*
var n=parseInt(prompt("Enter Range of Numbers"));
for(var a=1;a<=n;a++){
    if(a%2!==0){
        document.write("These are odd numbers:"+a+"<br>");
    }
        else {
            document.write("These are even numbers:"+a+"<br>");
        }   
}
*/
var n=parseInt(prompt("Enter any Number"));
    if(n%2==0){
        document.write("Even");
    }
    else{
        document.write("Odd")
    }
