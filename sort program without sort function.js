// var arr=[7,8,5,4,6,2,3];
// document.write(arr+"<br>");
// arr.sort();
// document.write(arr);
var arr=[7,8,5,4,6,2,3];
// for(i=0;i<arr.length;i++){
//     for(j=0;j<arr.length;j++){
//         if(arr[i]<arr[j]){
//             var temp=arr[i];
//                 arr[i]=arr[j];
//                 arr[j]=temp;
//         }
        
//     }
    
// }
// document.write(arr)
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if(arr[i]>arr[j]){
            var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
        }
        
    }
    
}
document.write(arr);