        $(document).ready(function() {
            $('form').submit(function(e) {
                e.preventDefault(); // 폼 제출 이벤트 막기

                var name = $('#name').val();
                var email = $('#email').val();
                var password = $('#password').val();

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

                // 기타 추가적인 유효성 검사 로직 추가 가능

                // 모든 유효성 검사를 통과하면 폼 제출
                $('form').unbind('submit').submit();
            });
        });
