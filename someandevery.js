/*
var ages=[15,18,14,19,13];
var adult=18;
for(a=0;a<5;a++){
document.write(ages[a]+"<br>")

}
if(ages>=adult){
    document.write("Yes")
    }
    else{
        document.write("No")
    }
*/
/*
var ages=[15,18,14,19,13];
document.write(ages+"<br><br>");
function checkadult(age){
    return age>=18;
}
var b=ages.some(checkadult);
document.write(b+"<br>");
*/
var ages=[19,18,60,2,23];
document.write(ages+"<br>");
function checkadult(age){
return age>=18;
}
var b=ages.every(checkadult);
document.write(b)+"<br>";