/* party.js */

(function($){
  var party = $('#party');
  var mdbtn = $('.modal_btn');
  var mbox = $('.modal_box');
  var info = $('.modal_info');
  
  //상세보기 버튼 클릭시
  mdbtn.on('click', function(e){
    // a의 기본 이벤트 제거
    e.preventDefault();
    
    mbox.fadeIn();
    // .modal>div 나타나게하기
    info.fadeIn();
  
  // 닫기 버튼 생성
  mbox.find('.modal_info').prepend('<button type="button" class="mClose"><i class="fa fa-times" aria-hidden="true"></i></button>');
  $('.mClose').css({width:'3.5em', height:'3.5em',
                   position:'absolute', top:'0.2em', right:'0.2em', zIndex:500,
                   color:'#fff', fontWeight:'bold', backgroundColor:'transparent'});
  $('.mClose').children('i').css({fontWeight:'bold'});
  $('.mClose').parent().css({position:'relative'});
  var mClose = $('.mClose');
  mClose.on('click', function(e){
    e.preventDefault();
    mbox.find('.mClose').remove();
    mbox.hide();
  });
  });
  
})(this.jQuery);

//한번 버튼클릭하고 두번째 클릭할때 모달창의 내용이 뜨지않아서 배경div(mbox) 와 내용div(info)를 각각 클래스를 주고
//닫기 버튼 제이쿼리 부분에 fadeIn hide 각각 따로 써줌