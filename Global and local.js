/*
global variable:declare outside the function.
local variable:declare inside the function.
diff b/w local and global variable:-
*/
//1-we will use global variable inside the function and also outside the function whereas we cant use local variable outside the function.
//global ex
/*
var a="Divakar";
function name(){
    document.write(a+"<br>");
    
}
name();
document.write(a)
    */
   //local ex
   
function name(){
    var a="Divakar";
    document.write(a+"<br>");
    
}
name();
document.write(a)