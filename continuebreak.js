/*
for(a=1;a<=10;a++){
    if(a==5){
        document.write("Divakar <br>")
        continue;
    }
    document.write("Nishu " + a+"<br>");
}
*/
/*
for(a=1;a<=10;a++){
    if(a==5){
        document.write("Divakar <br>")
        break;
    }
    document.write("Nishu " + a+"<br>");
}
*/
/*
for(a=1;a<=10;a++){
    if(a==5){
        document.write("Hey"+a+"<br>");
        break;
    }
    document.write("Num"+a+"<br>");

} 
*/
document.write("<ul>");
var arr=[5,5,5,5,5];
var sum=0;
for(a=0;a<=4;a++){
    document.write("<li>"+arr[a]+"</li>");
    var sum=sum+arr[a];
}

document.write("</ul>");
document.write("Total is"+sum);