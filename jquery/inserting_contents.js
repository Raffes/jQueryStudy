// 
$("document").ready(function(){
            
    //Insere um texto no fim do paragrafo
    $("#append").click(function(){
        $("p:first").append("NARUTOOOOOOOOOOOOOOOOOOOOOOOO!!!");
    });

    //Insere um texto no começo do paragrafo
    $("#prepend").click(function(){
        $("p:first").prepend("SASUKEEEEEEEEEEEEEEEEEEEEEEE!!!");
    });

});