    $(document).ready(function() {
        $(".firstNav >li").hover(function(){
            $(this).children("ul").slideDown("fast");
        },
        function(){
            $(this).children("ul").slideUp("fast");
        })
        $(".secondNav >li").hover(function(){
            $(this).children("ul").slideDown("fast");
        },
        function(){
            $(this).children("ul").slideUp("fast");
        })

    });





    // $(document).ready(function() {
    //     $("ul.secondNav li").hover(function(){
    //         $(this).parent("ul").siblings("h3").addClass("choice");
    //     },
    //     function(){
    //         $(this).parent("ul").siblings("h3").removeClass("choice");
    //     })
    // });
    // $(document).ready(function() {       
    //         if ($("ul.thirdNav li").find("ul") .html()!="") {
    //             $("ul.thirdNav li").parent("ul").siblings("h3").append("<span class='sub'></span>");                
    //         }
    // });