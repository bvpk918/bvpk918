window.addEventListener('DOMContentLoaded', function () {



    var toggle = false
    let cursor = $('#cursor');
    // let cursorFollow = $('#cursor-follower');

    $(document).mousemove(function(e){
        let cursorWidth = cursor.width() / 2;
        // let cursorFWidth = cursorFollow.width() / 2;

        gsap.to(cursor, {duration: 1.3, left: e.pageX - cursor.width() * 0.5, top: e.pageY - cursor.height() * 0.5, ease: "back.out"});
        // gsap.to(cursorFollow, {duration: 1.4, left: e.pageX - cursorFollow.width() * 0.5, top: e.pageY - 20, ease: "back.out(2)"});
    });



    $('.hover_effect').mouseenter(function(){
        gsap.to(cursor, {duration: .3, opacity:1});
    }).mouseleave(function(){
        gsap.to(cursor, {duration: .3, opacity:0});
    })




    /* scroll event section */
    container.addListener((e) => {
        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        //
        // while( scrollTop >= 500 ){
        //
        //     setTimeout(function (){
        //         $(".hello").removeClass('on');
        //         $('.hello').next().addClass('on');
        //             setTimeout(function (){
        //                 $('.about_introduce .title > div').removeClass('on');
        //                 $('.im').next().addClass('on');
        //                 setTimeout(function (){
        //                     $('.about_introduce .title > div').removeClass('on');
        //                     $('.im').prev().addClass('on');
        //                 },2000);
        //             },2000);
        //     },2000);



            // $('.about_introduce .title .hello').addClass('on');
            // setTimeout(function (){
            //  $('.about_introduce .title > div').removeClass('on');
            //     $('.hello').next().addClass('on');
            //     setTimeout(function (){
            //         $('.about_introduce .title > div').removeClass('on');
            //         $('.im').next().addClass('on');
            //         setTimeout(function (){
            //             $('.about_introduce .title > div').removeClass('on');
            //             $('.im').prev().addClass('on');
            //         },2000);
            //     },2000);
            // },2000);
        // }



        if( scrollTop >= 500 && !toggle){
            toggle = true
            $('#section02 .about_outbox').removeClass('on');

            setTimeout(function (){
                $(".hello").removeClass('on');
                $('.hello').next().addClass('on');
            },2000);

            setTimeout(function (){
                $('.im').removeClass('on');
                $(".im").next().addClass('on');
            },4000);

            setTimeout(function (){
                $('.name').removeClass('on');
                $('.about_introduce .title').children().addClass('on');
            },6000);

        }


        //
        //
        // setTimeout(function (){
        //  $('#container').addClass('on');
        //
        //     // $('#container').css("height: 100%");
        // },3000);
        // //











    });



    /*  slide,click event section */




    const swiper01 = new Swiper(".swiper-container", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        spaceBetween: 160,
        slidesPerView: '2.6',
        centeredSlides: true,
        speed:1000,
        parallax: true,
        direction:'horizontal',
        // navigation: {
        //     nextEl: ".cover_button_right",
        //     prevEl: ".cover_button_left",
        // },
        initialSlide: 0,
        watchOverflow:true,
        loop: true,
        pagination:{
            el: ".swiper-pagination",
            type: "fraction",
        },

    });



})

