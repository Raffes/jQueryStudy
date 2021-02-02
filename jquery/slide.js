// slide
        //O texto sobe | desce | reaparece
        $("document").ready(function(){

            $("#slide-up").click(function(){
                $("#textBox").slideUp("2000", "linear");
            });

            $("#slide-down").click(function(){
                $("#textBox").slideDown("2000", "linear");
            });

            $("#toggleSlide").click(function(){
                $("#textBox").slideToggle("2000", function(){
                    alert("Done");
                });
            });

        });