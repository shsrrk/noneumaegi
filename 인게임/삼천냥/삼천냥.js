$(document).ready(function() {
    var timer = 300;
    var timerInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
      var minutes = Math.floor(timer / 60);
      var seconds = timer % 60;

      minutes = (minutes < 10) ? '0' + minutes : minutes;
      seconds = (seconds < 10) ? '0' + seconds : seconds;

      var timerDisplay = minutes + ':' + seconds;
      $('.timer').text(timerDisplay);

      if (timer <= 0) {
        clearInterval(timerInterval);
        alert('게임을 다시 시작합니다.');
        location.reload(); // 페이지 새로고침
      }

      timer--;
    }
  });


  $(document).ready(function() {
    var selectedNumbers = [];
    var confirmedNumbers = [];
    var balance = 100000;
  
    // 셀을 클릭할 때의 동작
    $('table td').click(function() {
      var number = parseInt($(this).text());
  
      if (selectedNumbers.includes(number)) {
        // 이미 선택된 번호인 경우 취소
        $(this).removeClass('selected');
        selectedNumbers = selectedNumbers.filter(function(item) {
          return item !== number;
        });
        $('.number').text(selectedNumbers.join(', '));
      } else {
        if (selectedNumbers.length >= 8) {
            // 이미 8개 이상의 번호를 선택한 경우 추가 선택 금지
            alert('한번에 8개까지만 선택 가능합니다.');
            return;
          }
        // 새로운 번호 선택
        $(this).addClass('selected');
        selectedNumbers.push(number);
        $('.number').text(selectedNumbers.join(', '));
      }
  
      $('.select-number').text(selectedNumbers.length);
       // 선택한 셀의 개수 업데이트


  
      // 선택한 셀의 번호를 .number에 표시
      var selectedCellNumbers = selectedNumbers.join('  ');
      $('.number span').text(selectedCellNumbers);
    });
  
    // 확정하기 버튼 클릭할 때의 동작
    $('.confirmation').click(function() {
      if (selectedNumbers.length === 0) {
        return;
      }
  
      // 선택한 번호의 개수에 따라 잔액 조정
      var deduction = selectedNumbers.length * 3000;
      if (balance >= deduction) {
        balance -= deduction;
        $('.money').text(balance);
        confirmedNumbers = confirmedNumbers.concat(selectedNumbers);
  
        $('table td.selected').addClass('confirmed').css('background-color', 'black'); // 배경색 변경
  
        // 선택한 번호 초기화
        selectedNumbers = [];
        $('.select-number').text('0');
        $('.number').text(''); // 선택한 셀 번호 초기화
  
      } else {
        alert('충전해주세요');
      }
    });

    
  });
  
  
  
  
  
  
  
  
  
  
  
