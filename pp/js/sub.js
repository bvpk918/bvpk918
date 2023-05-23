window.addEventListener('DOMContentLoaded', function () {

    let cursor = $('#cursor');


    $(document).mousemove(function(e){
        let cursorWidth = cursor.width() / 2;

        gsap.to(cursor, {duration: 1.2, left: e.pageX - cursor.width() * 0.5, top: e.pageY - cursor.height() * 0.5, ease: "back.out"});

    });



    $('.click_to_webpage').mouseenter(function(){
        gsap.to(cursor, {duration: .3, opacity:1});
    }).mouseleave(function(){
        gsap.to(cursor, {duration: .3, opacity:0});
    })


    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        let thanksElement = document.getElementById("thanks4wtch")
        let containerElement = document.getElementById('container')

        switch (true) {
            case scrollTop < 670:
                document.getElementById("container").style.backgroundColor = "#ebf0f0";
                this.document.getElementById("section02").classList.remove('on')
                break

            case scrollTop < 3600:
                document.getElementById("container").style.backgroundColor = "transparent";
                this.document.getElementById("section02").classList.add('on')
                break

            case scrollTop < 3900:
                // document.getElementById("container").style.backgroundColor = "#c4d8da";
                break
            case scrollTop < 9510:
                // document.getElementById("container").style.backgroundColor = "#fdc9ae";
                break
            case scrollTop < 10450:
                // document.getElementById("container").style.backgroundColor = "#fcf7ef";
                break
            case scrollTop < 16980:
                // document.getElementById("container").style.backgroundColor = "#ded6c8";
                break
            case scrollTop < 18100:
                // document.getElementById("container").style.backgroundColor = "#000000";
                document.getElementById("container").style.backgroundColor = "transparent";
                break
            // case scrollTop < 27000:
            //     document.getElementById("container").style.backgroundColor = "#ecc6bf";
            //     break
            case scrollTop < 22100:
                document.getElementById("container").style.backgroundColor = "#ecc6bf";
                thanksElement.style.color = "#2d2d2d";
                thanksElement.classList.remove('on')
                document.getElementById("footer").classList.remove('on')
                document.getElementById("section10").classList.remove('on')
                break

            case scrollTop < 25050:
                document.getElementById("container").style.backgroundColor = "#0a0a0a";
                thanksElement.style.color = "#dfdfe1";
                thanksElement.classList.add('on')
                document.getElementById("footer").classList.add('on')
                document.getElementById("section10").classList.add('on')
                break
        }















    });



    /*  slide,click event section */


    var menu = ['Slide 1', 'Slide 2', 'Slide 3']

    const swiper01 = new Swiper(".swiper-container", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        spaceBetween: -1,
        slidesPerView: '2.3',
        centeredSlides: true,
        speed:1000,
        parallax: true,
        direction:'horizontal',
        // navigation: {
        //     nextEl: ".cover_button_right",
        //     prevEl: ".cover_button_left",
        // },
        initialSlide: 1,
        watchOverflow:true,
        loop: true,
        // pagination:{
            // el: ".swiper-pagination",
            // type: "fraction",
        // },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function (number) {
                return ('0' + number);
            },
            formatFractionTotal: function (number) {
                return ('0' + number);
            },
            // type: 'custom',
            // renderCustom: function (swiper, current, total) {
            //     return ( `0` + current)  + ' / ' + (`0` + total );
            // }
          }

    });



    //
    //
    // $('.swiper-slide .title').mouseenter(function () {
    //
    //     //
    //     // $('.n_item_hover > div').removeClass('on');
    //
    //     $(this).addClass('on');
    //
    //
    //     if($(this).hasClass('on')){
    //
    //         $(this).prev().css('opacity',`1`);
    //         $(this).css('transform','translateX(-30px)');
    //
    //
    //     }
    //
    //     if($(this).hasClass('bag')){
    //
    //         $(this).prev().css('transform',`translateX(-43px)`);
    //         $(this).css('transform','translateX(30px)');
    //
    //
    //     }
    //
    //
    // }).mouseleave(function () {
    //     $('.n_item_hover > div').removeClass('on');
    //
    //     $('.bag').prev().css('transform',`translateX(0%)`);
    //
    //     $('.like').next().css('transform',`translateX(0%)`);
    //
    //
    //
    //
    // })



})


