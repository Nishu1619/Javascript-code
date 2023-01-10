//multidimensional aray
/*

document.write("<table border='1px'> ");
document.write("<th align=center>");
document.write("Student Data")
document.write("</th>")
for(a=0;a<4;a++){
    document.write("<tr>");
    for(b=0;b<4;b++){
        document.write("<td >"+arr[a][b]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
*/
/*
var arr=[
    ["Name","age","Gender","Course"],
    ["Nishu",22,"Male","MCA"],
    ["Divakar",25,"Male","MCA"],
    ["Deepak",23,"Male","MCA"]
]
document.write("<table border='1px' cellspacing='0px'>");
document.write("<th style='text-align:center'>")
document.write("Student Data")
document.write("</th>")

for(a=0;a<4;a++){
    document.write("<tr>");

    for(b=0;b<4;b++){
        document.write("<td>"+arr[a][b]+"</td>");
    }
    document.write("</tr>");
}
document.write("</table");
*/
/*
var arr=new Array();
for(g=0;g<5;g++){
    arr[g]=prompt("Enter the "+g+"th index value");
    var b=arr[g];
}
for(a=0;a<5;a++){
    document.write(arr[a]+"<br>");
    
    
}
*/
/*
var arr=["a","c","d","b","e"];
arr.sort();
document.write(arr+"<br>");
//arr.reverse();
document.write(arr+"<br");
*/
/*
var arr=new Array();
for(g=0;g<5;g++){
    arr[g]=prompt("Enter the "+g+"th index value");
    
}
for(a=0;a<5;a++){
    document.write(arr[a]+"<br>");  
    arr.sort();
    arr.reverse();
}
document.write(arr);
*/
/*
var arr=new Array();
for(g=0;g<4;g++){
    arr[g]=prompt("enter the value");
}
for(a=0;a<4;a++){
    document.write(arr[a]+"<br>");
   
}
for(a=0;a<1;a++){
arr.sort();
arr.reverse();
document.write(arr);
}
*/
var arr=["Nishu","Deepak","Divakar","Prashant"];
arr.unshift("PC");
document.write(arr);

