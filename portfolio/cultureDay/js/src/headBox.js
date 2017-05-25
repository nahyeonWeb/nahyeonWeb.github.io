/* headBox.js */


(function ($) {
  
  /*
    var indiQ = $('.indi_wrap');
    var indiwrapName = indiQ.eq(2).offset().top;
  console.log(indiwrapName);*/
  
  
  var indiLi = $('.indicator').find('li');
  
  var viewH = $('html,body').height();
  var scrollT = $(window).scrollTop();

  indiLi.eq(0).addClass('c_indi');
  //첫번째 인디케이터에 초기 색상주기
  
  

  indiLi.on('click', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    var thisIndex = $this.index();
    
    indiLi.removeClass('c_indi');
    $this.addClass('c_indi');
    
    $('html, body').animate({
      scrollTop: thisIndex * viewH
    }, 1000, 'easeInOutCirc');
  
  }); // indiLi.onclick


  
  /*var d = false;

  $(window).on('mousewheel DOMMouseScroll', mouseWeel);

  function mouseWeel(e) {

    var mouseEvent = e.originalEvent;
    var me = 0;
    var winscroll = $(window).scrollTop();
    

    
    // 파이어폭스 브라우저와 기타 브라우저의 형평성 맞추기
    if (mouseEvent.detail) {
      //detail 값은 스크롤이 어느방향으로 움직이는지 알려주는 값
      me = mouseEvent.detail * 40;
    } else {
      me = mouseEvent.wheelDelta;
    }
    
    // 마우스 휠을 사용하면 위로/아래로 움직이는 값을 확인할 수 있다.
    // * console.log(me); 로 검증
    // console.log(me);
    
    // 마우스 휠의 값을 0을 기준으로 크거나 작은지 판단하여 스크롤 이동
    if (me >= 0 && !d) {
      d = true;

      if (winscroll <= 0) {
        $(window).scrollTop(0);
      } else {
        
        $('html,body').stop().animate({          
          scrollTop: scrollT -= viewH
        }, 1000, function () {
          d = false;
        });
      }

    } else if (me < 0 && !d) {
      d = true;

      var browserFullH = viewH * 6
      if (scrollT >= browserFullH) {

        $(window).scrollTop(browserFullH);
      } else {

        $('html,body').stop().animate({
          scrollTop: scrollT += viewH
        }, 1000, function () {
          d = false;
        });
      }

    }
    
      
  $(window).on('scroll', function(){
    
    var winheight = $('html') .height();
    var w_scroll = $(window).scrollTop();
    var index_scroll = parseInt(w_scroll / winheight);
    
    indiLi.removeClass('c_indi');
    indiLi.eq(index_scroll).addClass('c_indi');
    
    
  });// 스크롤한위치에 맞춰 인디케이터 색상변경
  
  }

  var wrapLength = $('#wrap').children('.indi_wrap').legnth;*/

  
  
})(this.jQuery);
