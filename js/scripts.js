$(document).ready(function() { 


//body show
setTimeout(() => {
  $('body.black').addClass("visible");
}, 1000)

//burger popup
$(".burger").click(function() {
    $(".burger_popup").slideToggle(0);
    // $(".h_choose").slideToggle(0);
    $(this).toggleClass('opened');
    $("body").toggleClass('noscroll');
    $(".hl_menu, .hr_menu").slideToggle(0, function() {
        if ($(this).css('display') === 'none') {
            $(this).removeAttr('style');
        }
    });
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
  $('.h_choose').show();
}, 2000)
setTimeout(() => {
  $('.h_choose').hide();
}, 6000)


//video hide controls
var vids = $("video"); 
$.each(vids, function(){
       this.controls = false; 
});

//fighter strikes animation
$(function() {
    var target_block = $(".mf_strikes"); // Ищем блок при прокрутке до которого начнется анимация (+400 верхний отступ)
    var blockStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top +400 - $(window).height()));
        if (scrollEvent && blockStatus) {
            blockStatus = false; // Запрещаем повторное выполнение функции до следующей перезагрузки страницы.
            $({ numberValue: 0 }).animate({ numberValue: 634 }, {
                duration: 1500, // Продолжительность анимации
                easing: "linear",
                step: function(val) {
                    $(".n1").html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
                }
            });
            $({ numberValue: 0 }).animate({ numberValue: 1587 }, {
                duration: 1500,
                easing: "linear",
                step: function(val) {
                    $(".n2").html(Math.ceil(val));
                }
            });
            // круговые прогресбары
            let circularProgress = document.querySelector(".circular-progress"),
                progressValue = document.querySelector(".progress-value");

            let progressStartValue = 0,    
                progressEndValue = 48,    
                speed = 30;
                
            let progress = setInterval(() => {
                progressStartValue++;

                progressValue.textContent = `${progressStartValue} %`
                circularProgress.style.background = `conic-gradient(#E04141 ${progressStartValue * 3.6}deg, #2B2B2B 0deg)`

                if(progressStartValue == progressEndValue){
                    clearInterval(progress);
                }    
            }, speed);
            let circularProgress2 = document.querySelector(".circular-progress2"),
                progressValue2 = document.querySelector(".progress-value2");

            let progressStartValue2 = 0,    
                progressEndValue2 = 48,    
                speed2 = 30;
                
            let progress2 = setInterval(() => {
                progressStartValue2++;

                progressValue2.textContent = `${progressStartValue2} %`
                circularProgress2.style.background = `conic-gradient(#E04141 ${progressStartValue2 * 3.6}deg, #2B2B2B 0deg)`

                if(progressStartValue2 == progressEndValue2){
                    clearInterval(progress2);
                }    
            }, speed2);
            //столбцы
            $(".column_progress > div").addClass("fill");
        }
    });
});


//2,3 screen scroll
$(".top_block").bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        $(".b1_2").addClass("hidden");
        $(".mouse_icon").show();
        $(".ft_l, .ft_r").removeClass("resize");
    }
    else {
        $(".b1_2").removeClass("hidden");
        $(".mouse_icon").hide();
        $(".ft_l, .ft_r").addClass("resize");
    }
});
$(".b1_2, .b2_2_wrap").bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        $(".b1_2").addClass("resize");
        $(".ft_l, .ft_r").removeClass("resize_2");
        $(".b2_2_wrap").removeClass("visible");
    }
    else {
        $(".b1_2").removeClass("resize");        
        $(".ft_l, .ft_r").addClass("resize_2");
        $(".b2_2_wrap").addClass("visible");
    }
});


//swipe
// $(".top_block").on("swipe",function(){
//     $(".b1_2").removeClass("hidden");
//     $(".mouse_icon").hide();
//     $(".ft_l, .ft_r").addClass("resize");
// });


//2,3 mobile screen scroll
var ms = window.matchMedia('all and (max-width: 800px)');
if (ms.matches) {
    $(window).scroll(function(){    
    if ($(this).scrollTop()>0)
    {
        $(".b1_2").removeClass("hidden");
        $(".mouse_icon").hide();
        $(".ft_l, .ft_r").addClass("resize");     
    }else{
        $(".b1_2").addClass("hidden");
        $(".mouse_icon").show();
        $(".ft_l, .ft_r").removeClass("resize");
    }
    if ($(this).scrollTop()>150)
    {        
        $(".b2_2_wrap").addClass("visible");    
    }else{        
        $(".b2_2_wrap").removeClass("visible");
    }
});
} else {
   
}



//mma flame mobile
var fm = window.matchMedia('all and (max-width: 600px)');
if (fm.matches) {
    $(".mc_2, .mc_3").click(function() {
        $(".m_top").addClass('flame');
    });
} else {}


//mma main block 3 scroll on
$(".m3_wrap, .remove_one_screen").bind('mousewheel DOMMouseScroll', function(event){
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // $("body").addClass("one_page");
        // $("*").addClass("screen");
    }
    else {
        $("body").removeClass("one_page");
        $("*").removeClass("screen");
        $(".screen_hide").hide();
    }
});




//preload 3x events
// var hq = window.matchMedia('all and (max-width: 920px)');
// if (hq.matches) {    
//     $(".b1_block").addClass("hidden");
//     $(".b1_block").addClass("v");
//     let i = 0;
// 		function cycl() {
// 		    requestAnimationFrame(() => {
// 		        if (i > 360) {
// 		        	$(".skip_intro").addClass('hide');
// 		        	setTimeout(() => {
// 							  $('.b1b_1').removeClass("hidden");
// 							}, 000)
// 							setTimeout(() => {
// 							  $('.b1b_2').removeClass("hidden");
// 							}, 100)
// 							setTimeout(() => {
// 							  $('.b1b_3').removeClass("hidden");
// 							}, 200)
// 		        }
// 		        else{
// 		        	$(".skip_intro").click(function() {
// 		        		$(this).addClass('hide');
// 						    setTimeout(() => {
// 								  $('.b1b_1').removeClass("hidden");
// 								}, 000)
// 								setTimeout(() => {
// 								  $('.b1b_2').removeClass("hidden");
// 								}, 100)
// 								setTimeout(() => {
// 								  $('.b1b_3').removeClass("hidden");
// 								}, 200)
// 							});
// 		        }
// 		        let g = document.getElementById("si").style = `--rot: ${i}deg;`;
// 		        i++;
// 		        cycl();
// 		    })
// 		};
// 		cycl();
// } else {
//     let i = 0;
// 		function cycl() {
// 		    requestAnimationFrame(() => {
// 		        if (i > 360) {
// 		        	$(".skip_intro").addClass('hide');
// 		        	setTimeout(() => {
// 							  $('.b1b_1').slideDown(1200);
// 							}, 000)
// 							setTimeout(() => {
// 							  $('.b1b_2').slideDown(1200);
// 							}, 100)
// 							setTimeout(() => {
// 							  $('.b1b_3').slideDown(1200);
// 							}, 200)
// 		        }
// 		        else{
// 		        	$(".skip_intro").click(function() {
// 		        		$(this).addClass('hide');
// 						    setTimeout(() => {
// 								  $('.b1b_1').slideDown(1200);
// 								}, 000)
// 								setTimeout(() => {
// 								  $('.b1b_2').slideDown(1200);
// 								}, 100)
// 								setTimeout(() => {
// 								  $('.b1b_3').slideDown(1200);
// 								}, 200)
// 							});
// 		        }
// 		        let g = document.getElementById("si").style = `--rot: ${i}deg;`;
// 		        i++;
// 		        cycl();
// 		    })
// 		};
// 		cycl();
// }



//news more
$(".nri_more").click(function() {
    $(this).hide();
    $(".nr_items").removeClass("show_6");
});


//bp popup
$(".bi_channel").click(function(e) {
    $(".b_popup").removeClass("opened");
    e.preventDefault();
});
$(".bi_channel.udar").click(function(e) {
    $(".b_popup.udar").addClass("opened");
    e.preventDefault();
});
$(".bi_channel.matchtv").click(function(e) {
    $(".b_popup.matchtv").addClass("opened");
    e.preventDefault();
});
$(".bi_channel.rentv").click(function(e) {
    $(".b_popup.rentv").addClass("opened");
    e.preventDefault();
});


$(".bp_close").click(function() {
    $(".b_popup").removeClass("opened");
});


//smi popup
$(".smi_btn").click(function(e) {
    $(".smi_popup").addClass("opened");
    e.preventDefault();
    $(".popup_content").addClass("opened");
    $(".popup_thx").removeClass("opened");
});
$(".smi_close").click(function() {
    $(".smi_popup").removeClass("opened");
});


//manager popup
$(".manager_btn").click(function(e) {
    $(".manager_popup").addClass("opened");
    e.preventDefault();
    $(".popup_content").addClass("opened");
    $(".popup_thx").removeClass("opened");
});
$(".manager_close").click(function() {
    $(".manager_popup").removeClass("opened");
});


//thx
$(".sf_submit").click(function() {
    $(".popup_content").removeClass("opened");
    $(".popup_thx").addClass("opened");
});


//bp more
$(".bp_text_all").click(function() {
    $(this).toggleClass("opened");
    $(".bp_text").toggleClass("strings_3");
});


//conf popup
$(".cfi_top").click(function() {
    $(this).siblings(".cfi_content").slideToggle();
    $(this).toggleClass('opened');
});


//wow js
new WOW().init();


//phone mask
$(function($){
   $(".phone").mask("+7 (999) 999-9999");
});


//custom scrollbar
$('.bp_content, .nl_scroll').mCustomScrollbar({
    mouseWheel:{
        scrollAmount:'300%' /* <<< speed percent */
    }
});


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
$(window).bind('scroll',function(e){
    parallaxScroll();
}); 
function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.nsw_img').css('top',(0-(scrolled*0.3))+'px');
}


$(window).scroll(function() {
    var trigger = $('.popular_news').offset().top - 780;
    if ($(this).scrollTop() > trigger) {
        $(".news_left").addClass('static');
    } else {
        $(".news_left").removeClass('static');
    }
});




//owl sliders
$('.news_slider').addClass('owl-carousel');
$('.news_slider').owlCarousel({
    center: false,
    items: 4,
    loop: false,
    margin: 20,
    autoWidth: true,
});

$('.brands_slider').addClass('owl-carousel');
$('.brands_slider').owlCarousel({
    center: false,
    items: 10,
    loop: true,
    margin: 50,
    autoWidth: true,
});

$('.popular_news_slider').addClass('owl-carousel');
$('.popular_news_slider').owlCarousel({
    center: false,
    items: 3,
    loop: false,
    margin: 15,
    autoWidth: true,
    responsive: {
        0: {
            items: 1,
        },
        500: {
            
        }
    }
});

$('.nr_slider').addClass('owl-carousel');
$('.nr_slider').owlCarousel({
    center: false,
    items: 1,
    loop: true,
    autoWidth: false,
    autoplay: true,
    autoplayTimeout: 4000,
});

var ts = window.matchMedia('all and (max-width: 760px)');
if (ts.matches) {
    $('.nr_tags_slider').addClass('owl-carousel');
    $('.nr_tags_slider').owlCarousel({
        center: false,
        items: 8,
        loop: false,
        margin: 8,
        autoWidth: true,
    });
} else {}


$('.time_slider').addClass('owl-carousel');
$('.time_slider').owlCarousel({
    center: false,
    items: 1,
    loop: false,
    margin: 8,
    autoWidth: true,
});

var ls = window.matchMedia('all and (max-width: 1000px)');
if (ls.matches) {
    $('.live_slider').addClass('owl-carousel');
    $('.live_slider').owlCarousel({
        center: false,
        items: 1,
        loop: false,
        autoWidth: false,
        autoplay: true,
        autoplayTimeout: 5000,
    });
} else {}


//fight slider (synced)
var sync1 = $("#sync1");
var sync2 = $("#sync2");
var syncedSecondary = true;

var hq = window.matchMedia('all and (max-width: 600px)');
if (hq.matches) {
    var slidesPerPage = 4;
} else {
    var slidesPerPage = 8;
}

sync1.owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: false,
    dots: true,
    loop: true,
    responsiveRefreshRate: 200,
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
}).on('changed.owl.carousel', syncPosition);

sync2
    .on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
        items: slidesPerPage,
        dots: true,
        nav: true,
        smartSpeed: 200,
        slideSpeed: 500,
        slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
        responsiveRefreshRate: 100
    }).on('changed.owl.carousel', syncPosition2);

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