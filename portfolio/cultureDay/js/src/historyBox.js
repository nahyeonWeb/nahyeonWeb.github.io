//historyBox.js

(function($){
  
  var bbox = $('.btn_box');
  var cli = bbox.children('li');
  var mbg = $('.modal_back');

  
    cli.on('click', function(e){
    
    var bdex = $(this).index();
    
    mbg.fadeIn();
    mbg.children('div').eq(bdex).fadeIn();
    
    mbg.children('div').prepend('<button type="button" class="mClose"><i class="fa fa-times" aria-hidden="true"></i></button>');
    
    var mClose = $('.mClose');
    
    mClose.css({width:'3.5em', height:'3.5em', backgroundColor:'transparent',
                   position:'absolute', top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#666', fontWeight:'bold'});
    
    
    mClose.on('click', function(e){
      e.preventDefault();
      mbg.find('div').hide();
      mbg.find('div').find(mClose).hide();
      mbg.hide();
    });
  });
  
})(this.jQuery);