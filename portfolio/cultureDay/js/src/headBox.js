/* headBox.js */


(function($){
  
  var indeLi = $('.indicator').find('li');
  var viewH = $('html,boddy').height();
  var scrollT = $(window).scrollTop();
  
  indeLi.on('click',function(evt){
    evt.preventDefault();
    var $this = $(this);
    var thisIndex = $this. index();
    
    $('html, body').animate({scrollTop: thisIndex * viewH},1000,'easeInOutCirc');
  }); // indeLi.onclick
  
  var d = false;
  
  $('body').on('mousewheel DOMMouseScroll');
  
  function mouseWeel(e){
    
    var mouseEvnt = e.originalEvent;
    var me = 0;
    var winscroll = $('html,body').scrollTop();
    
    if(mouseEvent.detail){
      me = mouseEvent.detail * 40;
    }else{
      
      me = mouseEvent.wheelDelta;
    }
    
    if(me >= 0 && !d){
      d = true;
      
      if(scrollT <= 0){
        $(window).scrolltop(0);
      }else{ $('html,body').stop().animate({scrollTop:scrollT -=viewH}, 1000, function(){d = false});
      }
      
      }else if(me < 0 && !d){
        d=true;
        
        var browserFullH = viewH *4
        if(scrollT >= browserFullH){
           
           $(window).scrollTop(browserFullH);
           }else{
             
             $('html,body').stop().animate({scrollTop:scrollT += viewH},1000,function(){d = false});
           }
      
    }
  }

  var wrapLength = $('#wrap').children('.indi_wrap').legnth;
  
})(this.jQuery);