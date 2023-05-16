window.addEventListener('DOMContentLoaded', function () {


    setTimeout(()=>{
        $('.top_outbox').addClass('on');
    },800)



    

    /* scroll event section */
    container.addListener((e) => {

        let scrollTop = container.scrollTop;
        $('.posNum').html(scrollTop)

        let thanksElement = document.getElementById("thanks4wtch")
        let containerElement = document.getElementById('container')
        
    


        switch (true) {
            case scrollTop < 670:
                containerElement.style.background= 'transparent';
                break
            case scrollTop < 3900:
                containerElement.style.background = "#fae980";
                break
            case scrollTop < 9510:
                containerElement.style.background = "#fdc9ae";
                break
            case scrollTop < 10450:
                containerElement.style.background = "transparent";
                break
            case scrollTop < 16980:
                containerElement.style.background = "#ded6c8";
                break
            case scrollTop < 18100:
                containerElement.style.background = "#000000";
                this.document.getElementById('body').classList.remove('on')
                break




            case scrollTop < 20000:
                containerElement.style.background = "transparent";
                this.document.getElementById('body').classList.add('on')
                break





            case scrollTop < 24700:
                document.getElementById("container").style.backgroundColor = "#transparent";
                thanksElement.style.color = "#2d2d2d";
                thanksElement.classList.remove('on')
                document.getElementById("footer").classList.remove('on')
                break
            // case scrollTop < 24050:
                
            //     break
            case scrollTop < 26000:
                // const thanks4Element = this.document.getElementById("thanks4wtch")
                // document.getElementById("container").style.backgroundColor = "#0a0a0a";
                thanksElement.style.color = "#dfdfe1";
                thanksElement.classList.add('on')
                document.getElementById("footer").classList.add('on')
                // this.document.getElementById("thanks4wtch").classList.remove('on')
                break


            // case scrollTop < 7900:
            //     document.getElementById("container").style.backgroundColor = "#ecc6bf";
            //     break
            // case scrollTop < 7900:
            //     document.getElementById("container").style.backgroundColor = "#ecc6bf";
            //     break
        }
        

        if( scrollTop >= 600 ){
            $('.white_bg').addClass('on');
        }
        
        if( scrollTop >= 670 ){
            $('.section_pagination').addClass('on');
        }

        if( scrollTop >= 2850 ){
            $('#section03 .bottom').addClass('on');
        }
        
        if( scrollTop >= 3750 ){
            $('#section04').addClass('on');
        }




        if( scrollTop >= 23070 ){
            // $('body').addClass('on');
        }


















        if( scrollTop >= 15500 ){
            $('#section12').addClass('on');
        }

        // if( scrollTop >= 24050 ){
        //     $('#thanks4wtch').addClass('on');
        // }











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
        


    

// (function () {


//     setTimeout(()=>{
//         $('.top_outbox').addClass('on');
//     },1000)


// })







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





// (function () {


//     setTimeout(()=>{
//         $('.top_outbox').addClass('on');
//     },1000)


// })



})


