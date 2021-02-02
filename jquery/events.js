$("document").ready(function(){
    // evento de click
    $("#textBox").on("click", whenMouseIsClicked);

    //evento de passar o mouse
    $("#textBox").on("mouseleave", whenMouseLeaves);

    function whenMouseIsClicked() {
        $("#textBox").html("<h1>You clicked me</h1>");
        
    }

    function whenMouseLeaves() {
        $("#textBox").html("<h1>Where  ya you goin?</h1>");
    }

});