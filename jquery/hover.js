// esconde e aparecer elementos
$("document").ready(function(){
            
    $(".textCopy").hover(highlightCopy);

    function highlightCopy(){
        
        $(this).toggleClass("highlight")

    }

});