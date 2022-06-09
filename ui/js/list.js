window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)



    });


    gsap.to('.fix-this-3', {
        scrollTrigger: {
            trigger: ".trigger-this-3",
            start: "40px top",
            // end: () => "+=" + 300,
            end: '103% 100%',
            pin: true,
            pinSpacing: false,
            scrub: true,
        }
    });




    $('.n_item_hover > div').mouseenter(function () {


        $('.n_item_hover > div').removeClass('on');

        $(this).addClass('on');


        if($(this).hasClass('like')){

            $(this).next().css('transform',`translateX(43px)`);
            $(this).css('transform','translateX(-40px)');


        }

        if($(this).hasClass('bag')){

            $(this).prev().css('transform',`translateX(-43px)`);
            $(this).css('transform','translateX(40px)');


        }


    }).mouseleave(function () {
        $('.n_item_hover > div').removeClass('on');

        $('.bag').prev().css('transform',`translateX(0%)`);

        $('.like').next().css('transform',`translateX(0%)`);




    })



    $('.n_item_hover_big > div').mouseenter(function () {


        $('.n_item_hover_big > div').removeClass('on');

        $(this).addClass('on');


        if($(this).hasClass('like')){

            $(this).next().css('transform',`translateX(43px)`);
            $(this).css('transform','translateX(-40px)');


        }

        if($(this).hasClass('bag')){

            $(this).prev().css('transform',`translateX(-43px)`);
            $(this).css('transform','translateX(40px)');


        }


    }).mouseleave(function () {
        $('.n_item_hover_big > div').removeClass('on');

        $('.bag').prev().css('transform',`translateX(0%)`);

        $('.like').next().css('transform',`translateX(0%)`);




    })



    $('.n_item_hover_long > div').mouseenter(function () {


        $('.n_item_hover_long > div').removeClass('on');

        $(this).addClass('on');


        if($(this).hasClass('like')){

            $(this).next().css('transform',`translateX(43px)`);
            $(this).css('transform','translateX(-40px)');


        }

        if($(this).hasClass('bag')){

            $(this).prev().css('transform',`translateX(-43px)`);
            $(this).css('transform','translateX(40px)');


        }


    }).mouseleave(function () {
        $('.n_item_hover_long > div').removeClass('on');

        $('.bag').prev().css('transform',`translateX(0%)`);

        $('.like').next().css('transform',`translateX(0%)`);




    })






    $('#list_outbox .small_ctgr_box .menu_title').click(function(){

        // $(this).siblings('.menu_list').slideToggle();
        // $(this).children('button').css('transform','scaleY(-1)');
        //


        if($(this).siblings('.menu_list').css('display') === 'block'){
            // $(this).siblings('.menu_list').slideToggle();
            $(this).children('button').css('transform','scaleY(-1)');
        }

        if($(this).siblings('.menu_list').css('display') === 'none'){

            $(this).children('button').css('transform','scaleY(1)');
        }
        $(this).siblings('.menu_list').slideToggle();



    });




})