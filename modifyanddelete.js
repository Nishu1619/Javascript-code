//modify an array
/*
var arr=["Divakar",25,"Male","MCA"];
arr[2]="Female";
for(a=0;a<arr.length;a++){
    document.write(arr[a]+" ");
}
*/
//delete an array element
/*

var arr=["Divakar",25,"Male","MCA"];
delete arr[1];
document.write(arr);
*/
/*
for(var a=0;a<arr.length;a++){
    document.write(arr[a]+" ");
}
*/
/*
var arr=new Array(3);
for(g=0;g<3;g++){
    arr[g]=prompt("Enter the value");
}
document.write("<ul>");
for(a=0;a<=5;a++){
    document.write("<li>"+arr[a]+"</li>");
}
document.write("</ul>")
*/

var arr=new Array();
for(g=0;g<5;g++){
    arr[g]=parseInt(prompt("Enter Any Number"));
}

document.write("<ul>");
var sum=0;
for(a=0;a<5;a++){
    document.write("<li>"+arr[a]+"</li>");
    sum=sum+arr[a];
}
document.write("</ul>");
document.write("The total is"+sum);
