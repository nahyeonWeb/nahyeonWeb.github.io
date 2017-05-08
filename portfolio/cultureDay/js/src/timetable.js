/* timetable.js */

(function($){
  
  var tb = $('.table_btn');
  var t_btn = tb.find('li');
  var tmbox = $('.tt_modal');
  
  
  // 버튼클릭
  t_btn.on('click',function(e){
    e.preventDefault();
    
    var btnLi = $(this).index();
    
    tmbox.fadeIn();
    tmbox.find('div').eq(btnLi).fadeIn();
    
    tmbox.find('div').prepend('<button type="button" class="tmClose"><i class="fa fa-times" aria-hidden="true"></i></button>');
    
    $('.tmClose').css({width:'3.5em', height:'3.5em', position:'absolute', top: '0.2em', right:'0.2em', zIndex:500, color:'#faa', fontWeight:'bold'});
    $('.tmClose').parent().css({position:'relative'});  
   
   var tmClose = $('.tmClose'); 
    tmClose.on('click', function(e){
      e.preventDefault();
     tmbox.find('div').find('.tmClose').remove();
      tmbox.find('div').hide();
      tmbox.hide();
    });
  });
  
})(this.jQuery);