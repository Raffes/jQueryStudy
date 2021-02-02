 // o elemento some de forma devagar
 $("document").ready(function(){

    $("#toggleMe").click(function(){
        $("#textBox").toggle(4000, "swing");
    });

});