// Quando o documento estiver pronto executar essa função
        //Coloque na tag h1 esse estilo
        $("document").ready(function(){

            $("h1:first").css("border","3px dotted green");

            //vai trocar a msg dentro de uma div
            var newText = $("<p>");

            newText.append("<i>Just replaced a div</i>");

            $("#headerNew").html(newText);

        });