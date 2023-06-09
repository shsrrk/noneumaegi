
$(document).ready(function() {
// 벚꽃 이미지 생성 함수
    function createPetal() {
        var petal = $('<div class="petal"></div>');
        var screenWidth = $(window).width();
        var screenHeight = $(window).height();
        var xPos = Math.random() * (screenWidth - 50); // 랜덤한 X 좌표
        var yPos = Math.random() * (screenHeight - 50); // 랜덤한 Y 좌표

        petal.css({
        left: xPos + 'px',
        top: yPos + 'px'
        });

                    

        $('body').append(petal);

        // 벚꽃 이미지 애니메이션 설정
        petal.animate({
        top: screenHeight + 'px', // 최종 위치를 화면 하단으로 설정
        opacity: 0 // 최종 투명도를 0으로 설정
        }, 4000, function() {
            petal.remove(); // 애니메이션이 완료되면 벚꽃 이미지를 제거
        });
    }

    // 일정 시간마다 벚꽃 이미지 생성
    setInterval(createPetal, 500);
});
