"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {


    var paragraphData = [{"paragraph":"First Paragraph Stuff"}, 
                        {"paragraph":"Second Paragraph Stuff"},
                        {"paragraph":"Third Paragraph Stuff"},
                        {"paragraph":"Fourth Paragraph Stuff"}];

    console.log("App Started..."); 
  
  /* the ugly way
    console.log(paragraphData[1]);
    console.log(paragraphData[1]);
    console.log(paragraphData[2]);
    console.log(paragraphData[0]);
    console.log(paragraphData[5]);
    console.log(paragraphData[6]);
  */
  
    // a little nicer but counting up
    
    var paragraphDataLength = paragraphData.length;
    for(var index= 0; index < paragraphDataLength; index++) {
        console.log(paragraphData[index].paragraph);
    }
    
    var name = document.getElementById("name");
    
    var button = document.getElementById("Button1");
    
    button.addEventListener("click", function(){
        // execute stuff here after button click
        console.log("Clicked!!");
        console.log(name.value);
    });
    
   
     // a little nicer but counting down
    /*
    for(var index= paragraphData.length-1; index > -1; index--) {
        console.log(paragraphData[index]);
    }
    */
    
    
    /* even nicer but more complicated
    paragraphData.forEach(function(paragraph) {
        console.log(paragraph);
    });
    */
  
    //declared a named function way

    function replaceFirstParagraph() {
        console.log("inside replaceFirstParagraph function");
        var firstParagraph;

        firstParagraph = document.getElementById("firstParagraph");

        firstParagraph.innerHTML = "My New Paragraph Data";
        
    }

   
    // call the replaceFirstParagraph function
    replaceFirstParagraph();


})();

