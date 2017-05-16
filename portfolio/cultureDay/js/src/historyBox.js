//historyBox.js

(function($){
  
  var bbox = $('.btn_box');
  var mbg = $('.modal_back');
  var hbtn = $('.history');
  var cmbtn = $('.ceremony_music');
  var mback = $('.modal_back');
  var h_m = $('.h_modal');
  
  bbox.on('click', function(e){
  
    var bdex = $(this).children('div').index();
    
    console.log(bdex) //오류! 둘다 인덱스가 1로뜸 ...
    
    mbg.fadeIn();
    mbg.find('div').eq(bdex).fadeIn();
    
    mbg.find('div').prepend('<button type="button" class="mClose">닫기</button>');
    
    $('.mClose').css({width:'3.5em', height:'3.5em', backgroundColor:'#245',
                   position:'absolute', top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#fff', borderRadius:'100%', fontWeight:'bold'});
    
    var mClose = $('.mClose');
    mClose.on('click', function(e){
      e.preventDefault();
      mbg.find('div').find('.mClose').remove();
      mbg.find('div').hide();
      mbg.hide();
    });
    
  });
  
})(this.jQuery);