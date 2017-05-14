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
    
    tmbox.children('div').prepend('<button type="button" class="tmClose"><i class="fa fa-times" aria-hidden="true"></i></button>');
    
    $('.tmClose').css({width:'3.5em', height:'3.5em', position:'absolute', top: '0.2em', right:'0.2em', zIndex:500, color:'#aaa', fontWeight:'bold'});
    $('.tmClose').parent().css({position:'relative'});  
   
   var tmClose = $('.tmClose'); 
    tmClose.on('click', function(e){
      e.preventDefault();
     tmbox.find('div').find('.tmClose').remove();
      tmbox.find('div').hide();
      tmbox.hide();
    });
  });
  
  // 오시는길 모달 탭메뉴
   
  
  var tabLi = $('.tab').find('li');
   var tabInDiv = $('.tab_box').children('div');
      
      tabLi.eq(0).addClass('active');// 최초 설
      tabInDiv.eq(0).addClass('active_box');// 최초 설
      
      tabLi.on('click', function(e){
        e.preventDefault();
        // ----------------------------------------------------
        var $this = $(this); // 선택한 li
        var indexLi = $this.index(); // 선택 li의 순서
        console.log(indexLi);// console에 확인
        
        tabLi.removeClass('active'); // .tab안의 li에 .active를 제거
        $this.addClass('active'); // 선택한 li에 .active를 추가
        
        // ----------------------------------------------------
        
        //.tab_box안의 div에 .active_box 제거
         tabInDiv.removeClass('active_box'); 
        //선택된 순서에 맞는 div에 .active_box를 추가
         tabInDiv.eq(indexLi).addClass('active_box');
        });
})(this.jQuery);