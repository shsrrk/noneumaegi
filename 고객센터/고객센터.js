$(document).ready(function() {
    $('.cheating-box::before, .bug-box::before, .csc-box::before').click(function() {
      $(this).parent().toggleClass('active');
    });
  });
  