
var anim = document.getElementsByClassName("title--section");
$(document).ready( function () 
    { TweenLite.to(anim, 0, {opacity:0, x:-210});
})

$(document).ready(function() {
    
    $(window).scroll( function(){
    
        $('.title--section').each( function(i){
            
            var top_of_object = $(this).offset().top + 50;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > top_of_object ){
                
                TweenLite.to(this, 0.8, {opacity:1, x:0})

            }
            
        }); 
    
    });
    
});