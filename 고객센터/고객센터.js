$(document).ready(function() {

    $(".bug-tag").click(function(next){
      $(".inquiry-tag").addClass(".inquiry-tag").css('z-index','4');
      $(".inquiry-tag").addClass(".inquiry-tag").css('background-color','rgba(245, 237, 228, 0.8)');
      $(".inquiry").addClass(".inquiry").css('display','none');

      $(".cheating-tag").addClass(".cheating-tag").css('z-index','3');
      $(".cheating-tag").addClass(".cheating-tag").css('background-color','rgba(245, 237, 228, 0.8)');
      $(".cheating").addClass(".cheating").css('display','none');

      $(this).addClass(".bug-tag").css('z-index','5');
      $(this).addClass(".bug-tag").css('background-color','rgba(255, 255, 255)');
      $(".bug").addClass(".bug").css('display','block');
      next();

    });

    $(".inquiry-tag").click(function(next){
      $(".bug-tag").addClass(".bug-tag").css('z-index','4');
      $(".bug-tag").addClass(".bug-tag").css('background-color','rgba(245, 237, 228, 0.8)');
      $(".bug").addClass(".bug").css('display','none');

      $(".cheating-tag").addClass(".cheating-tag").css('z-index','3');
      $(".cheating-tag").addClass(".cheating-tag").css('background-color','rgba(245, 237, 228, 0.8)');
      $(".cheating").addClass(".cheating").css('display','none');

      $(this).addClass(".inquiry-tag").css('z-index','5');
      $(this).addClass(".inquiry-tag").css('background-color','rgba(255, 255, 255)');
      $(".inquiry").addClass(".inquiry").css('display','block');
      next();
    });

    $(".cheating-tag").click(function(next){
      $(".inquiry-tag").addClass(".inquiry-tag").css('z-index','3');
      $(".inquiry-tag").addClass(".inquiry-tag").css('background-color','rgba(245, 237, 228, 0.8)');
      $(".inquiry").addClass(".inquiry").css('display','none');

      $(".bug-tag").addClass(".bug-tag").css('z-index','4');
      $(".bug-tag").addClass(".bug-tag").css('background-color','rgba(245, 237, 228, 0.8)');
      $(".bug").addClass(".bug").css('display','none');

      $(this).addClass(".cheating-tag").css('z-index','5');
      $(this).addClass(".cheating-tag").css('background-color','rgba(255, 255, 255)');
      $(".cheating").addClass(".cheating").css('display','block');

      next();
    });
});

$(document).ready(function() {
  $('form').submit(function(e) {
      e.preventDefault(); // 폼 제출 이벤트 막기

      var name = $('#name').val();
      var email = $('#email').val();
      var textarea = $('#textarea').val();


      // 이름, 이메일, 비밀번호가 비어있는지 검사
      if (name === '' || email === '' ) {
          alert('이름, 이메일을 입력해주세요.');
          return;
      }

      // 이메일 형식 유효성 검사
      var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!emailPattern.test(email)) {
          alert('유효한 이메일 주소를 입력해주세요.');
          return;
      }

      //내용 검사
      if (textarea === '') {
          alert('내용을 확인해주세요.');
          return;
      }

      $('submit').click(function(next) {
        alert('문의가 접수되었습니다.');
        location.reload();
        next();
      });

  });
});
  