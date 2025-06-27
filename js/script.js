$(function () {//jquery start

    const BODY = $('body')
    const hNavBtn = $('.hNavBtn')
    const ani = $('.ani')


    allmenu()

    function allmenu() {
        const hNavBtn = $('.hNavBtn')
        const mNavbtn = $('nav .depth1 > li > span')

        mNavbtn.on('click', function () {
            if ($(this).parent('li').hasClass('On')) {
                $(this).parent('li').removeClass('On')
                $(this).siblings('ul.depth2').slideUp()
            } else {

                $(this).parent('li')
                    .addClass('On')
                    .siblings()
                    .removeClass('On')
                    .find('ul.depth2')
                    .slideUp()
                $(this).siblings('ul.depth2').slideDown()

                $(window).on('load resize',function(){
                    if(window.innerWidth>1280){
                        mNavbtn.parent('li').removeClass('On')
                        mNavbtn.siblings('ul.depth2').removeAttr('style')
                    }
                })
            }

        })


        hNavBtn.on('click', function () {
            BODY.toggleClass('navAct')
        })

    }







    $(window).on('scroll load', function () {

        const HEADER = $('header')
        const headerHeight = HEADER.outerHeight()

        const herolength = $('.hero').length;
        const heroHeight = $('.hero').outerHeight();


        let scrollTop = $(window).scrollTop()

        HEADER.addClass('load')
        // console.log(heroHeight);

        if (herolength > 0) {

            if (scrollTop >= heroHeight - headerHeight) {
                HEADER.addClass('down')
            } else {
                HEADER.removeClass('down')

            }
        }

    })




    $.fn.aniMoving = function () {
        let elementTop = $(this).offset().top; //선택한 요소의 Y축 좌표값
        let elementBottom = elementTop + $(this).outerHeight(); //Y축 좌표값+현재요소의 높이값  
        let viewportTop = $(window).scrollTop(); //화면의 스크롤값
        let viewportBottom = viewportTop + $(window).height(); //스크롤값+화면의 높이

        //영역으로 들어온 상태  + 영역을 벗어난상태를 메소드가 실행되는 곳으로 보내준다.
        return (viewportTop < elementBottom) && (elementTop < viewportBottom);

    }


    $(window).on('load scroll resize', function () {
        ani.each(function () {
            if ($(this).aniMoving()) {
                $(this).addClass('moving')
            } else {

                $(this).removeClass('moving')
            }
        })

    })












    hero_sl()//함수 실행

    // hero slider function
    function hero_sl() {
        const slider = $('.hero .slider li')//On
        const nav = $('.hero_nav li')//Act
        const sNum = slider.length
        let crt = 0

        slFunc(crt)
        setInterval(hero, 5000)

        // slider 초기함수
        function slFunc(i) {

            slider.eq(i).addClass('On')
            nav.eq(i).addClass('Act')
        }

        // slider 진행함수
        function hero() {
            let i = $('.hero li.On').index()
            reset()
            // console.log(i)
            i++
            if (i == sNum) {
                i = 0
            }
            slFunc(i)
        }

        // sldier reset함수
        function reset() {
            slider.removeClass('On')
            nav.removeClass('Act')
        }

        nav.on('click', function () {
            let i = $(this).index()
            console.log(i)
            reset()
            slFunc(i)
        })



    }//hero slider function end

// banner 

    $('.banner_wrap').marquee({
        speed: 80, // 속도
        // gap: 100, // 간격
        delayBeforeStart: 0, // 시작 delay값
        direction: 'left', // 방향
        duplicated: true, // 선택 영역 복제
        pauseOnHover: true // hover시 일시중지 여부
    });



})//jquery end