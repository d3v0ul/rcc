document.addEventListener ('DOMContentLoaded', ()=>{

var startTouchX = 0;
var startTouchY = 0;

// $(window).resize(slidescreen);
// $(document).ready(slidescreen);

var dt;
var delay = 150;

const debounce = (callback, time, e)=> {
    clearTimeout(dt);
    let ev = e;
    if (pageYOffset <= ($(".stop-scroll").offset().top-1)){
            event.preventDefault();
        }
    dt = setTimeout((e)=>scroll(ev), time);
}

document.addEventListener('mousedown', (e)=>{
    if (e.which === 2) {e.preventDefault();}
});

// $(document).bind('mousewheel DOMMouseScroll', scroll);
if('onwheel' in document) {
    document.addEventListener('wheel', (e)=>{debounce(scroll, delay, e)}, {passive:false});
} else if ("onmousewheel" in document) {
    document.addEventListener('mousewheel', (e)=>{debounce(scroll, delay, e)}, {passive:false})
} else {
    document.addEventListener('DOMMouseScroll', (e)=>{debounce(scroll, delay, e)}, {passive:false})
}			

document.addEventListener('touchmove', scroll, {passive:false});
$(document).on('touchstart', (e)=>{
    startTouchX = e.originalEvent.changedTouches[0].clientX;
});
$(document).on('touchstart', (e)=>{
    startTouchY = e.originalEvent.changedTouches[0].clientY;
});
$(document).on('touchend', ()=>{
    if (deltaY != 0) {								
        if (pageYOffset <= ($(".stop-scroll").offset().top)){
            if (deltaY > 0) {num++}
            if (deltaY < 0) {num--}
            if(num > maxScroll) {num = maxScroll}
            if (num<1) {num = 1}

            scrollAnimation();
        }
        
        if (deltaY<0 && num === 1) {
            $(".b1_2").addClass("hidden");
            $(".mouse_icon, .use_scroll").show();
            $(".ft_l, .ft_r").removeClass("resize");
        }
        if (deltaY>0 && num === 2) {
            $(".b1_2").removeClass("hidden");
            $(".mouse_icon, .use_scroll").hide();
            $(".ft_l, .ft_r").addClass("resize");
        }
        if (deltaY<0 && num === 2) {
            $(".b1_2").addClass("resize");
            $(".ft_l, .ft_r").removeClass("resize_2");
            $(".b2_2_wrap").removeClass("visible");
        }
        if (deltaY>0 && num === 3) {
            $(".b1_2").removeClass("resize");        
            $(".ft_l, .ft_r").addClass("resize_2");
            $(".b2_2_wrap").addClass("visible");
        }
    }
    deltaY = 0;
});

var num = 1;
var scrolling = false;
var maxScroll = document.querySelectorAll('.screen').length;
var deltaY = 0;

function scroll(e) {
    var event  = e || window.event;
    // console.log(event)
    // console.log("event.deltaY "+event.deltaY);
    // console.log("event.detail "+event.detail);
    // console.log("wheelDelta "+event.wheelDelta);
    // console.log("wheelDeltaY "+event.wheelDeltaY);
    // console.log("scrolling is "+scrolling);
    // console.log("номер блока: "+num);
    // console.log(document.querySelectorAll('.screen').length)

    
    if(event.type != "touchmove") {
        if (pageYOffset <= ($(".stop-scroll").offset().top-1)){
            if (!scrolling) {
                scrolling = true;
                if (event.deltaY < 0 || event.detail < 0 || event.wheelDelta > 0 || event.deltaY < 0 /*|| event.wheelDeltaY < 0*/) {
                    num--;
                    if (num<1) {num = 1}
                } 
                if (event.deltaY > 0 || event.detail > 0 || event.wheelDelta < 0 || event.deltaY > 0 /*|| event.wheelDeltaY > 0*/) {
                    num++;
                    if(num > maxScroll) {num = maxScroll}
                }

                if  (document.querySelector(".b1_2") && document.querySelector(".mouse_icon") && document.querySelector(".ft_l, .ft_r")) {
                    mainPageAnimation(event);
                }
                    scrollAnimation();
            }
        }
    }
    if(event.type === "touchmove") {
        if (pageYOffset <= ($(".stop-scroll").offset().top-1)){
            event.preventDefault();
        }
        var endTouchX = event.changedTouches[0].clientX;
        var endTouchY = event.changedTouches[0].clientY;
        var deltaXMod = Math.abs(startTouchX -endTouchX);
        var deltaYMod = Math.abs(startTouchY - endTouchY);
        if (deltaYMod > deltaXMod ) {
            deltaY = startTouchY - endTouchY;
        } else (deltaY = 0);
    }
}

function scrollAnimation () {
    if (document.querySelector('.b2_2_wrap')) {
        if($('.b2_2_wrap').css('position') === 'relative' && num !== 3) {
            $('html, body').animate({
                    scrollTop: $(".screen" + num).offset().top
                }, 500, "linear",  ()=> {
                    scrolling = false;
            });
        }				
        if($('.b2_2_wrap').css('position') === 'relative' && num === 3) {
            $('html, body').animate({
                    scrollTop: $(".b2_2_wrap").offset().top
                }, 500, "linear", ()=> {
                    scrolling = false;
            });
        }

        if($('.b2_2_wrap').css('position') === 'absolute') {
            $('html, body').animate({
                    scrollTop: $(".screen" + num).offset().top
                }, 500, "linear", ()=> {
                    scrolling = false;
            });
        }
        if (num === 4) {
                $('.h_events').css('background-color', "#2B2B2B");
            } 
            else {$('.h_events').css('background-color', "#E04141");}
        if (num === 3 && window.matchMedia('all and (max-width: 920px')) {
            $('header.h_main').css('background-color', "#1D1D1D;");
        }
    } else {
        $('html, body').animate({
            scrollTop: $(".screen" + num).offset().top
        }, 500, "linear",  ()=> {
            scrolling = false;
    });
    }
}

function mainPageAnimation (event) {
    if ((event.deltaY < 0 || event.detail < 0 || event.wheelDelta > 0 || event.deltaY < 0) && num === 1) {
        $(".b1_2").addClass("hidden");
        $(".mouse_icon, .use_scroll").show();
        $(".ft_l, .ft_r").removeClass("resize");
    }
    if ((event.deltaY > 0 || event.detail > 0 || event.wheelDelta < 0 || event.deltaY > 0) && num === 2) {
        $(".b1_2").removeClass("hidden");
        $(".mouse_icon, .use_scroll").hide();
        $(".ft_l, .ft_r").addClass("resize");
    }
    if ((event.deltaY < 0 || event.detail < 0 || event.wheelDelta > 0 || event.deltaY < 0) && num === 2) {
        $(".b1_2").addClass("resize");
        $(".ft_l, .ft_r").removeClass("resize_2");
        $(".b2_2_wrap").removeClass("visible");
    }
    if ((event.deltaY > 0 || event.detail > 0 || event.wheelDelta < 0 || event.deltaY > 0) && num === 3) {
        $(".b1_2").removeClass("resize");        
        $(".ft_l, .ft_r").addClass("resize_2");
        $(".b2_2_wrap").addClass("visible");
    }
}
})

