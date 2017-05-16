(function($){
  var winWidth = $(window).width();
  var pcfull = 1280;
  var pc = 1024;
  var tabH = 600;
  var mobH = 480;
  
  $(window).on('resize', function(evt){
    var newWinWidth = $(window).width();
    if(winWidth != newWinWidth){
      location.reload();
    }
    
    
    if(winWidth >= pcfull){
      
    }else if(winWidth >= 1024 && winWidth < pcfull){
      
    }else if(){
             
    }
    
    
  });
  
}(this.jQuery));