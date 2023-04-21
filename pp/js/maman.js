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
        
        


        

        // $(document).ready(function() {
        //     var bodyOffset = $('body').offset();
        //     $(window).scroll(function() {
        //         if ($(document).scrollTop() > bodyOffset.top) {
        //             $('#splash').addClass('scroll');
        //             $('.scroll').get(11600).play();
        //         } else {
        //             $('.scroll').get(11600).pause();
        //             $('#splash').removeClass('scroll');
        //         }
        //     });
        // });

//         window.addEventListener('load', videoScroll);
//         window.addEventListener('scroll', videoScroll);

//         function videoScroll() {

//         if ( document.querySelectorAll('video[autoplay]').length > 0) {
//             var windowHeight = window.innerHeight,
//             videoEl = document.querySelectorAll('video[autoplay]');

//     for (var i = 0; i < videoEl.length; i++) {

//       var thisVideoEl = videoEl[i],
//           videoHeight = thisVideoEl.clientHeight,
//           videoClientRect = thisVideoEl.getBoundingClientRect().top;

//       if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
//         thisVideoEl.play();
//       } else {
//         thisVideoEl.pause();
//       }

//     }
//   }

// }
        

// var _video = document.querySelector('.video');

// function isScrolledIntoView( element ) {
//     var elementTop    = element.getBoundingClientRect().top,
//         elementBottom = element.getBoundingClientRect().bottom;

//     return elementTop >= 0 && elementBottom <= window.innerHeight;
// }

// window.addEventListener("scroll", function(){
//   if (isScrolledIntoView(_video)) {
//     _video.play();
//   }
//   else {
//     _video.pause()
//   }
// })
        
        










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

    var swiper02 = new Swiper("#main_slide", {
        // freemode: true,
        // slidesPerView: 5,
        // spaceBetween: 100,
        // autoplay : {
        //     delay : 0.5,
        //     pauseOnMouseEnter: true,
        //     disableOnInteraction: false
        // },
        // speed : 11000,
        // loop: true,
        // initialSlide: 1,
        
        loop: true,
        freeMode: true,
        spaceBetween: 0,
        // grabCursor: true,
        slidesPerView: 5,
        loop: true,
        autoplay: {
          delay: 1,
          pauseOnMouseEnter: true,
          disableOnInteraction: false
        },
        freeMode: true,
        speed: 11000,
        freeModeMomentum: false,
        initialSlide: 0,
        watchOverflow:true,
        
    });
    
    // var mySwiper = document.querySelector('#main_slide').swiper

    // $("#main_slide").mouseenter(function() {
    //   mySwiper.autoplay.stop();
    //   console.log('slider stopped');
    // });
  
    // $("#main_slide").mouseleave(function() {
    //   mySwiper.autoplay.start();
    //   console.log('slider started again');
    // });
  
    // $("#main_slide").each(function(elem, target){
    //     var swp = target.swiper;
    //     $(this).hover(function() {
    //         swp.autoplay.stop();
    //     }, function() {
    //         swp.autoplay.start();
    //     });
    // });



})


