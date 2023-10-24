$(() =>{ 

    /*заливка шапки*/
if(!$("body").hasClass('one_page')){
    if(pageYOffset > 30) {
        $('header.h_main').css('background', "#1D1D1D");
    } else $('header.h_main').css('background', "transparent");
   document.addEventListener('scroll', ()=>{
    if(pageYOffset > 30) {
        $('header.h_main').css('background', "#1D1D1D");
    } else $('header.h_main').css('background', "transparent");
   }); 
}
// if ($("body").hasClass('one_page')){
//     document.addEventListener ('scroll',()=>{
//         if (pageYOffset>=$('.stop-scroll').offset().top) {
//         $('header.h_main').css('background', "#1D1D1D");
//     } else $('header.h_main').css('background', "#1D1D1D00");
//     })   
// }
/*заливка шапки*/

/*квадратные картинки в events*/
if(document.querySelector('.e_twins')){
    $('.e_twins>div').css('height', $('.e_twins>div').width());
    window.addEventListener('resize', ()=>{
        $('.e_twins>div').css('height', $('.e_twins>div').width());
    })
}
/*квадратные картинки в events*/

//body show
if (document.querySelector('body.black')){
    setTimeout(() => {
        $('body.black').addClass("visible");
    }, 1000)
}


//mobile 100vh calculation js:
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//burger popup
// var hq = window.matchMedia('all and (max-width: 767px)');
// if (hq.matches) {
    $(".burger").click(function() {
    $(".burger_popup").slideToggle(0);
    // $(".h_choose").slideToggle(0);
    $(this).toggleClass('opened');
    // $("body").toggleClass('noscroll');
    $(".hr_menu").slideToggle(0, function() {
        if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
        }
    });
    if($(this).hasClass('opened')){
        $('.hl_menu').css('display', 'block');
    } else {
        $('.hl_menu').removeAttr('style');
    }
    activeBoxHeight(box);
});
// } else {
//     $(".burger").click(function() {
//     $(".burger_popup").slideToggle(0);
//     // $(".h_choose").slideToggle(0);
//     $(this).toggleClass('opened');
//     // $("body").toggleClass('noscroll');
//     $(".hr_menu").slideToggle(0, function() {
//         if ($(this).css('display') === 'none') {
//             $(this).removeAttr('style');
//         }
//     });
//     if($(this).hasClass('opened')){
//         $('.hl_menu').addClass("opened");
//     } else {
//         $('.hl_menu').removeClass("opened");
//     }
//     activeBoxHeight();
// });
// }





//search popup
$(".nri_search, .nris_close").click(function() {
    $(".nri_search").toggleClass('hidden');
    $(".nri_search_popup").toggleClass('opened');
});


//events_mousemove
// $(".b1_block").mousemove(function(e) {
//   var x = e.offsetX;
//   var y = e.offsetY;
//   this.style.background = "("x +"px" + y +"px"")";
// });
// let bg = document.querySelectorAll('.b1b_1');
// for (let i = 0; i < bg.length; i++){
//     window.addEventListener('mousemove', function(e) { 
//         let x = e.clientX / window.innerWidth;
//         let y = e.clientY / window.innerHeight;     
//         bg[i].style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
//     });    
// }



//выбрать лигу
setTimeout(() => {
  $('.h_choose').css({
    'visibility': 'visible',
    'height': '72px',
    'padding-top': '15px',
    'opacity': '1'
  });
}, 1500)
setTimeout(() => {
  $('.h_choose').css({
    'visibility': 'hidden',
    'height': '0',
    'padding-top': '0',
    'opacity': '0'
  });;
}, 3000)


//video hide controls
if (document.querySelector("video")){
    var vids = $("video"); 
    $.each(vids, function(){
        this.controls = false; 
    });
}

var timing = 0;

function timing_b2_2_wrap () {
    var curTiming;
    if (matchMedia("(max-width: 1025px").matches){
        curTiming = 800;
    } else (curTiming = 1800);
    if (timing !== curTiming) {
        document.querySelector('.b2_2_wrap').setAttribute('data-timing', curTiming);
        timing = curTiming;
    }
}

var newsowl;

if (document.querySelector('.b2_2_wrap')){
    timing_b2_2_wrap();
    window.addEventListener('resize', timing_b2_2_wrap);
}
if(document.querySelector('.news_slider')){
    newsowl = $('.news_slider');
    newsowl.on('initialized.owl.carousel', ()=>{
        setMaxSlide();
    })
    window.addEventListener('resize', setMaxSlide);
}

function setMaxSlide () {
    let maxSlide = document.querySelectorAll('.news_slider .owl-item').length - (document.querySelectorAll('.news_slider .owl-item.active').length-1)
    document.querySelector('.news_slider').setAttribute('data-maxSlide', maxSlide);
    document.querySelector('.news_slider').setAttribute('data-w', $('.news_slider .owl-stage-outer').width());
}

var i = 0;
if (document.querySelector('#si')){
    let g = document.getElementById("si");
    var inter =  setInterval(()=>{
            g.style = `--rot: ${i}deg;`;
            i++;
        if (i>=361) {clearInterval(inter);}
    }, 10);
}

//news more
if (document.querySelector(".nri_more")){
    $(".nri_more").click(function() {
        $(this).hide();
        $(".nr_items").removeClass("show_6");
    });
}

//mask on resize
function maskOnResise () {
    if (!matchMedia('(max-width: 1025px').matches && $('.b_popup').hasClass('opened'))
    {
    $(".mask").addClass('visible');
    } else {$(".mask").removeClass('visible');}
}

//bp popup
if (document.querySelector(".nri_more")){
    $(".bi_channel").click(function(e) {
    $(".b_popup").removeClass("opened");
    $("body").addClass('noscroll');
    e.preventDefault();
});}

if (document.querySelector(".bi_channel.udar")){
    $(".bi_channel.udar").click(function(e) {
    $(".b_popup.udar").addClass("opened");
    $("body").addClass('noscroll');
    maskOnResise();
    e.preventDefault();
    window.addEventListener('resize', maskOnResise);
});}

if (document.querySelector(".bi_channel.matchtv")){
    $(".bi_channel.matchtv").click(function(e) {
    $(".b_popup.matchtv").addClass("opened");
    $("body").addClass('noscroll');
    $(".mask").addClass('visible');
    maskOnResise();
    e.preventDefault();
    window.addEventListener('resize', maskOnResise);
});}

if (document.querySelector(".bi_channel.rentv")){
    $(".bi_channel.rentv").click(function(e) {
    $(".b_popup.rentv").addClass("opened");
    $("body").addClass('noscroll');
    $(".mask").addClass('visible');
    maskOnResise();
    e.preventDefault();
    window.addEventListener('resize', maskOnResise);
});}

if (document.querySelector(".bp_close")){
    $(".bp_close, .mask").click(function() {
    $(".b_popup").removeClass("opened");
    $("body").removeClass('noscroll');
    $(".mask").removeClass('visible');
});}


//news fixed
var nif = window.matchMedia('all and (min-width: 1024px)');
if (nif.matches) {
    if (document.querySelector('.razdel')) {
        var $element = $('.razdel');
        let counter = 0;
        $(window).scroll(function() {
            var scroll = $(window).scrollTop() + $(window).height();
            var offset = $element.offset().top
            if (scroll > offset && counter == 0) {
                $(".news_left").addClass('static');
            } else{
                $(".news_left").removeClass('static');
            }
        });        
    };

} else {}

//fighter fixed
// var fif = window.matchMedia('all and (min-width: 1200px)');
// if (fif.matches) {
//     var $element = $('footer');
//     let counter = 0;
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop() + $(window).height();
//         var offset = $element.offset().top
//         if (scroll > offset && counter == 0) {
//             // $(".ft_left").addClass('footed');
//         } else{
//             // $(".ft_left").removeClass('footed');
//         }
//     });
// } else {}

    


//smi popup
// if (document.querySelector(".smi_btn")){
// $(".smi_btn").click(function(e) {
//     $(".smi_popup").addClass("opened");
//     e.preventDefault();
//     $(".popup_content").addClass("opened");
//     $(".popup_thx").removeClass("opened");
// });}
// if (document.querySelector(".smi_close")){
//     $(".smi_close").click(function() {
//     $(".smi_popup").removeClass("opened");
// });}

//Прокрутка по якорям
if (document.querySelector(".ancLinks")){
    $('.ancLinks').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
    }, 700);
    e.preventDefault();
});}


//manager popup
// $(".manager_btn").click(function(e) {
//     $(".manager_popup").addClass("opened");
//     e.preventDefault();
//     $(".popup_content").addClass("opened");
//     $(".popup_thx").removeClass("opened");
// });
// $(".manager_close").click(function() {
//     $(".manager_popup").removeClass("opened");
// });


//thx
if (document.querySelector(".sf_submit")){
    $(".sf_submit").click(function() {
    $(".popup_content").removeClass("opened");
    $(".popup_thx").addClass("opened");
});}


//bp more
if (document.querySelector(".bp_text_all")){
    $(".bp_text_all").click(function() {
    $(this).toggleClass("opened");
    $(".bp_text").toggleClass("strings_3");
});}


//conf popup
if (document.querySelector(".cfi_top")){
    $(".cfi_top").click(function() {
    $(this).siblings(".cfi_content").slideToggle();
    $(this).toggleClass('opened');
});}


//wow js
new WOW().init();


//phone mask
// $(function($){
//    $(".phone").mask("+ (9)(999) 999-9999");
// });


//custom scrollbars
$('.bp_content').mCustomScrollbar({
    mouseWheel:{
        scrollAmount:'300%' /* <<< speed percent */
    }
});

var hq = window.matchMedia('all and (min-width: 767px)');
/*Замена картинки для мобильной версии*/
if(document.querySelector('.bg-to-change')){
var curImg, settedImg;
hq.matches ? curImg='images/b3_bg.jpg' : curImg = 'images/mob_bg_shop.png';
settedImg = curImg;
document.querySelector('.paralax .bg-to-change').setAttribute('src', settedImg);
window.addEventListener('resize', ()=>{
    hq.matches ? curImg='images/b3_bg.jpg' : curImg = 'images/mob_bg_shop.png';
    if(curImg != settedImg){
        settedImg = curImg;
        document.querySelector('.paralax .bg-to-change').setAttribute('src', settedImg);
    }
});
}
//конец замены картинки

if (hq.matches) {
    $('.nl_scroll').mCustomScrollbar({
    mouseWheel:{
        scrollAmount:'300%' /* <<< speed percent */
    }
});
} else {}



//touch bottob bg for mobiles
// document.addEventListener('touchstart', function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     $(".mma_touch").show();
// }, false);

// document.addEventListener('touchend', function(e) {
//     e.preventDefault();
//     e.stopPropagation();
//     $(".mma_touch").hide();
// }, false);



//parallax news_socials_wrap
if (document.querySelector(".nsw_img")){
    $(window).bind('scroll',function(e){
    parallaxScroll();
}); }
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.nsw_img').css('top',(0-(scrolled*0.3))+'px');
}

// var isNewsPage = ()=>{
//     let is = document.querySelector('.nr_slider') == undefined ? false : true;
//     return is;
// }

// console.log(isNewsPage());

if(document.querySelector('.popular_news')){
    $(window).scroll(function() {
        var trigger = $('.popular_news').offset().top;
        if ($(this).scrollTop() + $(window).height() > trigger) {
            $(".news_left").addClass('static');
        } else {
            $(".news_left").removeClass('static');
        }
});
}



//owl sliders
if(document.querySelector('.news_slider')){
    var newsSlider = $('.news_slider');
    if ($('.ns_content').hasClass('red')){
        $('.b2b_all').addClass('red');
    }
// var ns = window.matchMedia('all and (min-width: 920px)');
// if (ns.matches) {
    newsSlider.addClass('owl-carousel');
    newsSlider.owlCarousel({
        center: false,
        items: 4,
        loop: false,
        margin: 20,
        autoWidth: true,
        smartSpeed: 1000,
        slideTransition: 'linear'
    });
// } else {
//     $('.news_slider').addClass('owl-carousel');
//     $('.news_slider').owlCarousel({
//         center: false,
//         items: 4,
//         loop: false,
//         margin: 0,
//         autoWidth: true,
//     });
// }
}

$('.brands_slider').on('initialized.owl.carousel', ()=>{
    setTimeout(() => {
        $('.main_footer').addClass('loaded');
    }, 1000);
});

$('.brands_slider').addClass('owl-carousel');
$('.brands_slider').owlCarousel({
    center: false,
    items: 10,
    loop: true,
    margin: 50,
    autoWidth: true,
    autoplay: true,
    smartSpeed: 4000,
    autoplayTimeout: 4000,
    slideTransition: 'linear'
});

var pnsSlider;
var pns;

function pnsSwitcher () {
    // pns = window.matchMedia('all and (max-width: 1025px) and (min-width: 767px)'); 
    pns = window.matchMedia('all and (max-width: 1025px)');  
    if (pns.matches) {
        pnsSlider.addClass('owl-carousel');
        pnsSlider.owlCarousel({
            center: false,
            items: 2,
            loop: false,
            margin: 16,
            autoWidth: true,
            // responsive: {
            //     0: {
            //         items: 1,
            //         autoWidth: false,
            //     },
            //     500: {
    
            //     }
            // }
        });
    } else {
        pnsSlider.removeClass('owl-carousel');
        pnsSlider.trigger('destroy.owl.carousel');
    }
}

if(document.querySelector('.popular_news_slider')){
    pnsSlider = $('.popular_news_slider');
    pnsSwitcher();
    window.addEventListener('resize', pnsSwitcher);
}

if(document.querySelector('.paralax')){
    var par = new Parallax(document.querySelector('.paralax'));
}

var owlquery = document.querySelector('.nr_slider');
if(owlquery) {
    var owl = $('.nr_slider');
    var owlTimer;
    var dotw = 0;
    var dotactive;
    
        owl.on('changed.owl.carousel', (e)=>{
        dotw = 0;
        owlChanger();
    });

    owl.on('translate.owl.carousel', changeDots);
    
    owl.addClass('owl-carousel');
    owl.owlCarousel({
        center: false,
        items: 1,
        loop: true,
        autoWidth: false,
        slideTransition: 'ease-in-out',
        smartSpeed: 600,
    });

    var dots = Array.from(document.querySelectorAll('.nr_slider .owl-dot'));
    dotactive = dots[0];

    for(i=0; i<dots.length; i++){
        dots[i].setAttribute('data-index', i);
    }

    function nextOwl (param) {
        owl.trigger(param);
    }
    
    owl.on('mousemove', ()=>{
        if (owlTimer === undefined) return;
        clearInterval(owlTimer);
        owlTimer = undefined;
    });
    
    owl.on('mouseleave', ()=>{
        owlChanger();
    });
    
    function owlChanger () {
        if(owlTimer !== undefined) return;
        owlTimer = setInterval(() => {
            dotw += 1;
            owlquery.style.setProperty('--btnWidth', dotw+"%");
            if (dotw == 100) {dotw = 0; setTimeout(nextOwl, 40, 'next.owl.carousel'); }
        }, 40);
    }

    //окрашивание полосок под слайдером на странице нвостей
    function changeDots () {
        dotactive = document.querySelector('.nr_slider .owl-dots .active')
        for(i=0; i<dots.length; i++){
            if(dots[i].getAttribute('data-index') < dotactive.getAttribute('data-index')){
                dots[i].classList.add('prev-nr_slider_dot');
            } else {
                dots[i].classList.remove('prev-nr_slider_dot')
            }
        }
    }
}

function nrTagsSlider () {
    var ts = window.matchMedia('all and (max-width: 1025px)');
    if (ts.matches) {
        $('.nr_tags_slider').addClass('owl-carousel');
        $('.nr_tags_slider').owlCarousel({
            center: false,
            items: 8,
            margin: 8,
            autoWidth: true,
            items: 1,
            rtl: false,
            responsive: {
                500:{
                    loop: false,
                    center: false,
                }
            }
        });
    } else {
        $('.nr_tags_slider').trigger('destroy.owl.carousel');
        $('.nr_tags_slider').removeClass('owl-carousel');
    }
}

if(document.querySelector('.nr_tags_slider')){
    nrTagsSlider();
    window.addEventListener('resize', nrTagsSlider);
}

if(document.querySelector('.time_slider')){

$('.time_slider').addClass('owl-carousel');
$('.time_slider').owlCarousel({
    center: false,
    items: 1,
    loop: false,
    margin: 8,
    autoWidth: true,
    // stagePadding: 40,
    });
}

function liveSlider (ls) {
    var ls = window.matchMedia('all and (max-width: 1025px)');
    if (ls.matches) {
        $('.live_slider').addClass('owl-carousel');
        $('.live_slider').owlCarousel({
            center: false,
            items: 1,
            loop: true,
            autoWidth: false,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 5000,
        });
    } else {
        $('.live_slider').trigger('destroy.owl.carousel');
        $('.live_slider').removeClass('owl-carousel');
}

}
function translateTagSlider () {
    let slider = document.querySelector('.nr_tags_slider .owl-stage');
    if(slider.clientWidth > document.documentElement.clientWidth){
        document.querySelector('.nr_tags_slider').setAttribute('style', 'transform: translateX(-16px); width: calc(100% + 32px);');
        document.querySelector('.nr_tags_slider .owl-stage-outer').setAttribute('style', 'padding-left: 16px; margin: 0');
    } else {
        document.querySelector('.nr_tags_slider').removeAttribute('style');
        document.querySelector('.nr_tags_slider .owl-stage-outer').removeAttribute('style');
    }
}
if(document.querySelector('.nr_tags_slider')){
    translateTagSlider();
    window.addEventListener('resize', translateTagSlider)
}

function translateTimeSlider () {
    let slider = document.querySelector('.time_slider .owl-stage');
    var p1 = '16px';
    var p2 = '24px';
    var hqq = window.matchMedia('all and (max-width: 1025px) and (min-width: 767px)');
    var hqq2 = window.matchMedia('all and (max-width: 1025px)');
    if (hqq2.matches){
        if(slider.clientWidth > document.documentElement.clientWidth){
            if(hqq.matches){
            document.querySelector('.time_slider').setAttribute('style', 'transform: translateX(-'+p2+'); width: 100vw;');
            document.querySelector('.time_slider .owl-stage-outer').setAttribute('style', 'padding-left: '+p2);
        } else {
                document.querySelector('.time_slider').setAttribute('style', 'transform: translateX(-'+p1+'); width: 100vw; ');}
                document.querySelector('.time_slider .owl-stage-outer').setAttribute('style', 'padding-left: '+p1);
        } else {
            document.querySelector('.time_slider').removeAttribute('style');
            document.querySelector('.time_slider .owl-stage-outer').removeAttribute('style');
        }
    } else {
        document.querySelector('.time_slider').removeAttribute('style');
        document.querySelector('.time_slider .owl-stage-outer').removeAttribute('style');
    }
}
if(document.querySelector('.time_slider')){
    translateTimeSlider();
    window.addEventListener('resize', translateTimeSlider)
}

if(document.querySelector('.live_slider')){


    liveSlider();
window.addEventListener('resize', liveSlider);
}

//fight slider (synced)
var sync1 = $("#sync1");
var sync2 = $("#sync2");
var syncedSecondary = true;
var hqq = window.matchMedia('all and (max-width: 767px)');
if (hqq.matches) {
    var slidesPerPage = 4;
} else {
    var slidesPerPage = 8;
}

var sync1_btns;

sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
}).on('changed.owl.carousel', ()=>{
    syncPosition;
    if(sync1_btns){
        sync1_setheight(sync1_btns);
    }
});

sync2
    .on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
        sync1_btns = document.querySelectorAll('#sync1 .owl-nav>button');
        sync1_setheight(sync1_btns);
    })
    .owlCarousel({
        items: slidesPerPage,
        dots: true,
        nav: false,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);

function sync1_setheight (sync1_btns) {
    var sync2h = sync2.height();
    sync1_btns.forEach(btn =>{
        btn.setAttribute('style', 'width: '+sync2h+'px; height: '+sync2h+'px; top:unset; bottom:unset;');
    });
}

function syncPosition(el) {
    //if you set loop to false, you have to restore this next line
    //var current = el.item.index;

    //if you disable loop you have to comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - (el.item.count / 2) - .5);

    if (current < 0) {
        current = count;
    }
    if (current > count) {
        current = 0;
    }

    //end block

    sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
    var onscreen = sync2.find('.owl-item.active').length - 1;
    var start = sync2.find('.owl-item.active').first().index();
    var end = sync2.find('.owl-item.active').last().index();

    if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
    }
}

function syncPosition2(el) {
    if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
    }
}

sync2.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    sync1.data('owl.carousel').to(number, 300, true);
});
});

/* Zoom */

function animateHeader () {
    $('.slide-menu').animate({
                top: -50,
            }, 500, ()=>{ $('.slide-menu').animate({
                top: 0,
                opacity: 1,
            }, 500);
        });
}

$(window).on('load', ()=>{
    $('.zoomed').addClass('unzoomed');
    /* выплывание шапки*/

    if(sessionStorage.getItem('visited') != 1){    
        animateHeader();
        sessionStorage.setItem('visited', 1);
    }else {
        $('.slide-menu').css('top', "0");
        $('.slide-menu').css('opacity', "1");
    }
    /* выплывание шапки*/
});
// альтернативная шапка
// $(window).on('load', ()=>{
//     $('.zoomed').addClass('unzoomed');
//     /* выплывание шапки*/
//     var shown = false;
//     window.addEventListener('scroll', ()=>{
//         if($("body").hasClass('one_page') && pageYOffset >= $('.stop-scroll').offset().top){    
//             if(!shownMenu){
//                 shownMenu = true;
//                 animateHeader(shownMenu);
//             }
//             // sessionStorage.setItem('visited', 1);
//         } else if (!$("body").hasClass('one_page') && pageYOffset>=100) {
//             if (!shownMenu){
//                 shownMenu = true;
//                 animateHeader(shownMenu);
//             }                
//         } else if (!$("body").hasClass('one_page') && pageYOffset<=100){}
//         else {
//             if (shownMenu) {
//                 shownMenu = false;
//                 animateHeader(shownMenu);
//             }            
//         }
//     })
    
//     /* выплывание шапки*/
// });

var box, imgs;

if(document.querySelector('.burger-popup__active-box')){
    box = document.querySelector('.burger-popup__active-box');
    activeBoxHeight(box);
    window.addEventListener('resize', ()=>activeBoxHeight(box))
}

function activeBoxHeight (b) {
	let slideimgH;
    setTimeout(() => {
        if(document.querySelector('.swiper-slide-active>.burger-popup__slide-image>img')){
            slideimgH = document.querySelector('.swiper-slide-active>.burger-popup__slide-image>img').clientHeight;
            slideimgH = slideimgH * 1.7;
            b.setAttribute("style", "height: "+slideimgH+"px !important");
        }
    }, 50);
}