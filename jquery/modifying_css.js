// 
$("document").ready(function(){
            
    //Adiciona um estilo do css por classe
    $("#add-class").click(function(){
        $("p:first").addClass('colorM');
    });

    //Remove um estilo do css por classe
    $("#remove-class").click(function(){
        $("p:first").removeClass('colorM');
    });

    //Adiciona e remove um estilo do css por classe
    $("#toggle-class").click(function(){
        $("p:first").toggleClass('colorM');
    });

    //Adiciona tamanho de fonte do css
    $("#increase-class").click(function(){
        $("p:first").css("font-size", "+=1px");
    });

});