/*
var ages=[18,19,25,26];
document.write(ages+"<br><br>")
function check(age){
    return age>=18;
}
var b=ages.find(check);
document.write(b);
*/
var ages=[18,19,20,25,46];
document.write(ages+"<br>");
function check(age){
    return age>=18;
}
var b=ages.findIndex(check);
document.write(b+"<br><br>")