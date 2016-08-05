$(document).ready(function(){  
  
  var uname = "iribon9";
    var domain = "gmail";
    var full = "mail" + "to:" + uname + "@" + domain + ".com";
 $("a.connect").attr("href", full);
 
      $("nav a").click(function(evn){
        evn.preventDefault();
        $('html,body').animate({
          scrollTop: $(this.hash).offset().top-100}, 1200
        );
    });
  
(function($){ 
 
    var $body,
    $target,
    targetoffsetTop,
    resizetimer,
    stickyclass= 'sticky'
     
    function updateCoords(){
        targetoffsetTop = $target.offset().top
    }
     
    function makesticky(){
        var scrollTop = $(document).scrollTop()
        if (scrollTop >= targetoffsetTop){
            if (!$body.hasClass(stickyclass)){
                $body.addClass(stickyclass)
            }
        }
        else{
            if ($body.hasClass(stickyclass)){
                $body.removeClass(stickyclass)
            }
        }
    }
     
    $(window).on('load', function(){
        $body = $(document.body)
        $target = $('#header')
        updateCoords()
        $(window).on('scroll', function(){
            requestAnimationFrame(makesticky)
        })
        $(window).on('resize', function(){
            clearTimeout(resizetimer)
            resizetimer = setTimeout(function(){
                $body.removeClass(stickyclass)
                updateCoords()
                makesticky()
            }, 50)
        })
    })
 
})(jQuery)
  
});
