window.addEventListener('DOMContentLoaded', function () {



    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)


        switch (true) {
            case scrollTop < 670:
                document.getElementById('container').style.backgroundColor= 'transparent';
                break
            case scrollTop < 3900:
                document.getElementById("container").style.backgroundColor = "#fae980";
                break
            case scrollTop < 9510:
                document.getElementById("container").style.backgroundColor = "#fdc9ae";
                break
            case scrollTop < 10450:
                document.getElementById("container").style.backgroundColor = "transparent";
                break
            case scrollTop < 16980:
                document.getElementById("container").style.backgroundColor = "#ded6c8";
                break
            case scrollTop < 18100:
                document.getElementById("container").style.backgroundColor = "#000000";
                break
            case scrollTop < 27000:
                document.getElementById("container").style.backgroundColor = "#ecc6bf";
                break
            // case scrollTop < 7900:
            //     document.getElementById("container").style.backgroundColor = "#ecc6bf";
            //     break
            // case scrollTop < 7900:
            //     document.getElementById("container").style.backgroundColor = "#ecc6bf";
            //     break
        }





        
        










    });



    /*  slide,click event section */


    var menu = ['Slide 1', 'Slide 2', 'Slide 3']

    const swiper01 = new Swiper(".swiper-container", {
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: false
        // },
        spaceBetween: 0,
        slidesPerView: '2.3',
        centeredSlides: true,
        speed:1000,
        parallax: true,
        direction:'horizontal',
        // navigation: {
        //     nextEl: ".cover_button_right",
        //     prevEl: ".cover_button_left",
        // },
        initialSlide: 2,
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


})


