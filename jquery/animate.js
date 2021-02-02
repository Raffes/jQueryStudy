// o elemento se expande
        // o elemento se move para a direita
        //  o texto muda sua fonte para maior
        // aumeta a fonte e move para direita
        $("document").ready(function(){

            $("#grow").click(function(){
                $("#textBox").animate({width: "500px"}, 2000 );

            });

            $("#move").click(function(){
                $("#textBox").animate({marginLeft: "200px"}, 2000 );

            });

            $("#bigger").click(function(){
                $("#textBox").animate({fontSize: "40px"}, 2000 );

            });

            $("#many").click(function(){
                $("#textBox").animate({fontSize: "40px", marginLeft: "400px", width: "600px"}, 2000 );

            });

        });