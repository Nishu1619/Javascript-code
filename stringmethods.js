//length method
/* 
var str="JavaScript is an great language";
var b=str.length;
document.write(b);
*/
//indexOf();used to find the index of the string from starts.
/*
var str="JavaScript is an great language";
var b=str.indexOf("is");
document.write(b);
*/
//toLowerCase();used to convert an string to the lower case.
/*
var a="NiShU";
var b=a.toLowerCase();
document.write(b);
*/
//touppercase();this method is used to convert an string to the upper case
/*
var a="Divakar";
var b=a.toUpperCase();
document.write(b);
*/
//includes();This method is used to find the string from the given string.it returns only true or false.this method is case sensitive.
/*
var a="Javascript is a great language";
var b=a.includes("is");
document.write(b);
*/
/*
var a="Javascript is a great language";
if(a.includes("is")){
    document.write("Yes")
}
else{
    document.write("No");
}
*/
//startsWith();this method is used to search first word or character
/*
var a="Javascript is a great language";
var b=a.startsWith("Javascript");
document.write(b);
*/
//endsWith();this method is used to search last word or character
/*
var a="Javascript is a great language";
var b=a.endsWith("language");
var c=a.endsWith("age");
var d=a.endsWith("eat language");
document.write(b+"<br>");
document.write(c+"<br>");
document.write(d+"<br>");
*/
//Search();This Method is used to find the string or word and they will return the index.
/*
var a="Javascript is a great language";
var b=a.search("is");
document.write(b);
*/
//
/*
var a="Javascript is a great language";
var b=a.search("i");
document.write(b);
*/
//match();this method is used to match any word or string and they will return an array.
//we used regular expression (//g)g stands for globally.
/*
var a="Javascript is a great is language";
var b=a.match(/is/g);
document.write(b);
*/
//indexOffunction();this function is used to search an string or word and they will return index number.
/*
var a="Javascript is a great language";
var b=a.indexOf("is");
document.write(b);
*/
//lastIndexOf();this method is used to search an string or word and they will return index number from last one.
/*
var a="Javascript is a great is language";
var b=a.lastIndexOf("is");
document.write(b);
*/
//replace();this method is used to replace an string or word
/*
var a="Javascript is a great language";
var b=a.replace("i","HTML");
document.write(b);
*/
//globally replace();
/*
var a="Javascript is a great is language";
var b=a.replace(/is/g,"HTML");
document.write(b);
*/
//trim();this method is used to remove extra spaces.
/*
var a="   Javascript    ";
var b=a.trim();
alert(a);
alert(b );
*/
//charAt();This functions is used to get the string at the particular index number.
/*
var a="JavaScript is a great language";
var b=a.charAt(11);
document.write(b);
*/
//charCodeAt();this function is used to get the ASCAI value of the that particular string by index number.
/*
var a="Javascript is a great language";
var b=a.charCodeAt(1);
document.write(b);
*/
//fromCodeAt();
/*
var a=String.fromCharCode(112);
document.write(a);
*/
//concat():This function is used to concat one or more string together.
/*
var a="Javascript";
var b=" is a";
var d=" great language";
var c=a.concat(b,d);
document.write(c);.
*/
//split();this function is used to split an string and return an Aarry.
/*
var a="Javascript is a great language";
var b=a.split("a");
document.write(b)
*/
//repeat();this function is used to repeat an string for many times.
/*
var a="Javascript is agreat language";
var b=a.repeat(3);
document.write(b);
*/
//slice();This method is used to print an string from the particular range of the string.
/*
var a="Javascript is a great language";
var b=a.slice(11,13);
document.write(b);
*/
//substr();this function is used to print string from index to our number of desired characters.
//substr(fromindex.numberofcharacters)
/*
var a="Javascript is a great language";
var b=a.substr(11,13);
document.write(b);
*/
//substring();same as slice function but not consider last index number.
/*
var a="Javascript is a great language";
var b=a.substring(11,13);
document.write(b);
*/
//tostring();this function is used to convert any other datatype to string.
/*
var a=50;
var b=a.toString();
document.write(typeof(b)+b);
*/
//valueOf();this is use to print value of the variable as it is.
var a="Javascript is a great Language";
var b=a.valueOf();
document.write(b);

