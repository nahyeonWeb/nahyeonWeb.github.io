/* timetable.js */

(function($){
  
  var tb = $('.table_btn');
  var t_btn = tb.children('li');
  var tmbox = $('.tt_modal');
  
  
  // 버튼클릭
  t_btn.on('click',function(e){
    e.preventDefault();
    
    var btnLi = $(this).index();
   
    
    tmbox.fadeIn();
    tmbox.children('div').eq(btnLi).fadeIn();
    
    tmbox.children('div').prepend('<button type="button" class="tmClose"><i class="fa fa-times" aria-hidden="true"></i></button>');
    
   var tmClose = $('.tmClose'); 
    tmClose.css({width:'3.5em', height:'3.5em', position:'absolute', top: '0.2em', right:'0.2em', zIndex:500, color:'#faa', fontWeight:'bold', backgroundColor:'transparent'});
    tmClose.parent().css({position:'relative'});  
   
    tmClose.on('click', function(e){
      e.preventDefault();
    
     //tmbox.find('div').find(tmClose)
      $(this).parent('div').hide();
      $(this).remove();
//      tmbox.find('div').eq(btnLi).hide();
      tmbox.hide();
//      tb.hide();
    });
  });
  
  
  //탭메뉴
  var tabLi = $('.tab').find('li');
  
  var tabInfo = $('.tab_box').children('div');
  
  tabLi.eq(0).addClass('active');
  tabInfo.eq(0).addClass('active_box');
  
  tabLi.on('click', function(evt){
    evt.preventDefault();
    
    var $this = $(this);
  var thisIndex = $this.index();
    
    tabLi.removeClass('active');
    $this.addClass('active');
    
    
    tabInfo.removeClass('active_box');
    tabInfo.eq(thisIndex).addClass('active_box');
    
    
  });
  })(this.jQuery);