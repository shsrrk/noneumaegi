$(document).ready(function() {

    $(".bug-tag").click(function(next){
      $(".inquiry-tag").addClass(".inquiry-tag").css('z-index','4');
      $(".inquiry").addClass(".inquiry").css('display','none');

      $(".cheating-tag").addClass(".cheating-tag").css('z-index','3');
      $(".cheating").addClass(".cheating").css('display','none');

      $(this).addClass(".bug-tag").css('z-index','5');
      $(".bug").addClass(".bug").css('display','block');
      next();

    });

    $(".inquiry-tag").click(function(next){
      $(".bug-tag").addClass(".bug-tag").css('z-index','4');
      $(".bug").addClass(".bug").css('display','none');

      $(".cheating-tag").addClass(".cheating-tag").css('z-index','3');
      $(".cheating").addClass(".cheating").css('display','none');

      $(this).addClass(".inquiry-tag").css('z-index','5');
      $(".inquiry").addClass(".inquiry").css('display','block');
      next();
    });

    $(".cheating-tag").click(function(next){
      $(".inquiry-tag").addClass(".inquiry-tag").css('z-index','4');
      $(".inquiry").addClass(".inquiry").css('display','none');

      $(".bug-tag").addClass(".bug-tag").css('z-index','3');
      $(".bug").addClass(".bug").css('display','none');

      $(this).addClass(".cheating-tag").css('z-index','5');
      $(".cheating").addClass(".cheating").css('display','block');

      next();
    });

});
  