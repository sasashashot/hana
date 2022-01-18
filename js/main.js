$(document).ready(function(){
    var swiper = new Swiper(".mySwiper1", {
        slidesPerView: 3,
        spaceBetween: 27,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });

    // 탭
    $('.tab_con > div').hide();
    // 내용 숨김
    $('.tab_con > div:first').show();
    // 첫번째만 보임
    $('.tab_title ul li').click(function(e){
        // a태그 속성 막아줌
        e.preventDefault();
        // 클릭한 메뉴(li)의 인덱스 번호를 num변수에 저장
        var num=$(this).index();
        // 클릭한 탭 제목에  active 제거
        $('.tab_title ul li a').removeClass('active');
        // 클릭한 탭 제목에  active 설정
        $(this).find('a').addClass('active');
        // 모든 내용 숨김
        $('.tab_con > div').hide();
        // 클릭한 제목(li)과 같은 인덱스번호 가진 내용만 보임
        $('.tab_con > div').eq(num).show();
    });

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 2,
        spaceBetween: 27,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
    var swiper = new Swiper(".mySwiper3", {
        effect:'fade',
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
    // FAMILY SITE
    // 제목 클릭하면 family_list 올라옴
    $('.family_title a').click(function(e){
        e.preventDefault();
        $('.family_list').animate({'top':0});
        // span(삼각형 방향 바꿈)
        $('.family_title a span').css('background-position','bottom center');
    });
    $('.family').mouseleave(function(){
        $('.family_list').animate({'top':230});
        $('.family_title a span').css('background-position','top center');
    });

    // 위로 슬쩍 올라오는 거 
    $('.top').click(function(){
        $('html,body').animate({'scrollTop':0});
    });

    // 윈도우 스크롤 이벤트
    $(window).scroll(function(){
        // 브라우저에서 html문서의 scrollTop값을 인식하여 winTop변수에 저장
        var winTop=$(this).scrollTop();
        console.log(winTop);
        // offset().top => scrollTop()으로부터 떨어져 있는 거리
        // s2영역의 위쪽 위치값을 구해서 scroll1변수에 저장
        var scroll1=$('section.s2').offset().top-600;
        // s3영역의 위쪽 위치값을 구해서 scroll2변수에 저장
        var scroll2=$('section.s3').offset().top-600;
        // s4영역의 위쪽 위치값을 구해서 scroll3변수에 저장
        var scroll3=$('section.s4').offset().top-600;
        // s5영역의 위쪽 위치값을 구해서 scroll4변수에 저장
        var scroll4=$('section.s5').offset().top-600;

        // 만약 .s2영역이 보이면,&& (그리고 라는 뜻, 논리 연산자)조건 2개 모두 참일때 실행
        if(scroll1 < winTop && winTop < scroll2){
            $('section.s2 h1').addClass('active');
            $('section.s2 p').addClass('active');
            $('section.s2 .swiper').addClass('active');
        }
        // 만약 .s3영역이 보이면,&& (그리고 라는 뜻, 논리 연산자)조건 2개 모두 참일때 실행
        if(scroll2 < winTop && winTop < scroll3){
            $('section.s3 h1').addClass('active');
            $('section.s3 p').addClass('active');
            $('section.s3 .tab').addClass('active');
            $('section.s3 .view_btn').addClass('active');
        }
        if(scroll3 < winTop && winTop < scroll4){
            $('section.s4 h1').addClass('active');
            $('section.s4 p').addClass('active');
            $('section.s4 .gallery').addClass('active');
            $('section.s4 .s4_right').addClass('active');
        }
        if(scroll4 < winTop){
            $('section.s5 h1').addClass('active');
            $('section.s5 p').addClass('active');
            $('section.s5 .event').addClass('active');
        }
    });

});