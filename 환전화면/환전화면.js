$(document).ready(function() {
    $('#account, #money').on('input', function() {
      $(this).val(function(index, value) {
        return value.replace(/\D/g, ''); // 숫자 이외의 문자 제거
      });
    });
  });