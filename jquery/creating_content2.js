 // 
 $("document").ready(function(){
    //vai trocar o texto do paragrafo
    $("#create_text").click(function(){
        $("#container p:last").text("Batatinha quando nascer esparrama pelo chão :(")
    })

    //substitui o ultimo paragrafo pelo primeiro paragrafo
    $("#create_variable").click(function(){
        var newText = $("#container p:first");

        $("#container p:last").html(newText);
    })
   
});