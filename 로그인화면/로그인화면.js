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
      $('.top-menu').fadeIn( 7000, function(){
      $(".top-menu").empty();
      });
  });
});