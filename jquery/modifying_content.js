 // 
 $("document").ready(function(){
    //muda a cor de um elemento especifico
    // $("#container p:first").wrap("<div class='colorBox'>");
    
    //retira um elemento
        // $("#container p:first").empty();

    //vai substituir tudo que tem no elemento por isso
    // $("<div>Container</div>").replaceAll("#container");

    $("#container").replaceWith("<div>Replaced</div>");

});