// mostra um elemento depois de um tempo (3000)
$("document").ready(function(){
            
    $("#fade-in").on("click", function(){

         $("#textBox").fadeIn(2000, function(){

             alert("I'm Fading in");

         });

    });

    $("#fade-out").on("click", function(){

         $("#textBox").fadeOut("fast", function(){

             alert("I'm Done Fading Out");

     });

});

 });