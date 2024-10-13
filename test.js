function myfun(){
    var theNumber= document.getElementById("num").value;
    if (prm(theNumber))
     document.getElementById("pp").innerHTML="the number :" + theNumber + " is primer";
     else
     document.getElementById("pp").innerHTML="the number :" + theNumber + " is not primer";
 }
 
 function prm(x){
     for(var i=2 ; i<x ; i++){
         if (x % i==0) return false;
     }
     return true;

 }