// setup your IIFE (Immediately Invoked Function Expression)
(function() {

    "use strict";
    var output = "";
    var firstParagraph = document.getElementById("firstParagraph");

    var Person = {
        "age": undefined,
        "name": "Tom",
        "address": "1 Georgian Drive",
        "city": "Barrie",
        "province": "Ontario",
        "familyNames": [
            "Harrison",
            "Marissa",
            "Dino",
            "Alexander"
        ],
        "sayHello":function(){
            output += "<br><hr><br>";
            output += Person.name + " says hello";
        }

    }; /* var Person = new Object();   */

    // for every key in the Person object, loop...
    for (var key in Person) {

        // check if the key is the familyNames array
        if (key === "familyNames") {
           output += "<br>Family Names: <br>";
            output += "<hr><br>";
            output += "<ul>";
            for (var index = 0; index < Person.familyNames.length; index++) {
                output += "<li>" + Person.familyNames[index] + "</li>";
            } // for loop
            output += "</ul>";
        } // if statement
        
        // check if the key is the sayHello Method
        else if (key === "sayHello") {
            Person.sayHello();
        } // else if
        
        // for all other cases do the following...
        else {

            output += Person[key] + "<br>";
        } // else statement

    } // for in

    firstParagraph.innerHTML = output;
})();

