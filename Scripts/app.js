// setup your IIFE (Immediately Invoked Function Expression)
(function () {
    
"use strict";

var myVariable = "hello";
console.log("myVariable " + myVariable);

var myArray = [
    "Tom Tsiliopoulos",
    "1 Georgian Drive",
    "Barrie",
    "Ontario",
    40,
    true
];

for(var index=0; index < myArray.length; index++) {
    console.log(myArray[index]);
}



})();

