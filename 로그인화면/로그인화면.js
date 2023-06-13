$(document).ready(function(){
  $(".login").click(function(){
     $(".door1").addClass("move1");console.log("dk"); //콘솔 보는 거
     //$(window).scrollTop(position);

  });

  $(".login").click(function(){
      $(".door2").addClass("move2");
     //$(window).scrollTop(position);

  });

  $(".login").click(function(){
    $(".top-menu").addClass("menu-fadeout");
   //$(window).scrollTop(position);
  });

  //메뉴창 사라지기
  $('.top-menu').click(function(next) {
    $(this).removeClass("menu-fadein");
    $(this).addClass("menu-fadeout");
    next();
  });

  //회원가입 창 나타나기
   $('.join').click(function(next) {
    $("form").removeClass("signup-move-down");
    $("form").addClass("signup-move-up");
    next();
  });

  $('.back-button').click(function(next) {
    $("form").removeClass("signup-move-up");
    $("form").addClass("signup-move-down");
    $(".top-menu").removeClass("menu-fadeout");
    $(".top-menu").addClass("menu-fadein");
    next();
  });

  $("a").click(function(event) {
    event.preventDefault(); // 기본 링크 동작 막기
    var url = $(this).attr("href"); // 이동할 URL 가져오기
    var delay = 2350; // 지연 시간 (1초)
  
    setTimeout(function() {
      window.location.href = url; // 시간이 지난 후 링크 이동
    }, delay);
  });



});



//회원가입창
$(document).ready(function() {
  $('form').submit(function(e) {
      e.preventDefault(); // 폼 제출 이벤트 막기

      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();
      var passwordcheck = $('#passwordcheck').val();


      // 이름, 이메일, 비밀번호가 비어있는지 검사
      if (name === '' || email === '' || password === '') {
          alert('이름, 이메일, 비밀번호를 입력해주세요.');
          return;
      }

      // 이메일 형식 유효성 검사
      var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(email)) {
          alert('유효한 이메일 주소를 입력해주세요.');
          return;
      }

      // 비밀번호 길이 유효성 검사
      if (password.length < 6) {
          alert('비밀번호는 최소 6자 이상이어야 합니다.');
          return;
      }

      if (password !== passwordcheck) {
          alert('비밀번호를 다시 확인해주세요.');
          return;
      }


      // 기타 추가적인 유효성 검사 로직 추가 가능

      // 모든 유효성 검사를 통과하면 div 숨기기
      
      $('form').addClass("signup-move-down");

      $('.top-menu').addClass("menu-fadeout").queue(function(next) {
        $(this).removeClass("menu-fadeout");
        $(this).addClass("menu-fadein");
        next();
      });

  });
});