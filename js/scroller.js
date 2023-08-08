document.addEventListener ('DOMContentLoaded', ()=>{

var startTouchX = 0;
var startTouchY = 0;
var b1_2, mouse_icon, ft_l, ft_r, b2_2_wrap, burger_popup, b1b_head, b1b_all, b1b_date, b1b_slideUp, b1_block, stop_scroll, h_events, header, burger, b2b_all, b2_wrap;
if(document.querySelector('.screen')){
    b1_2 = $('.b1_2');
    mouse_icon = $('.mouse_icon .use_scroll');
    ft_l = $('.ft_l');
    ft_r = $('.ft_r');
    b2_2_wrap = $('.b2_2_wrap');
    b1b_head = $('.b1b_head');
    b1b_all = $('.b1b_all');
    b1b_date = $('.b1b_date');
    b1b_slideUp = $('.b1b_slideUp');
    b1_block = $('.b1_block');
    stop_scroll = $('.stop_scroll');
    h_events = $('.h_events');
    header = $('.header.h_main');
    burger = $('.burger');
    b2b_all = $('.b2b_all');
    b2_wrap = $('.b2_wrap');
    burger_popup = $('.burger_popup');
    var scrolling = false;
}
// $(window).resize(slidescreen);
// $(document).ready(slidescreen);

var dt;
var delay = 400;

$(document).on('click', ()=>{
    if(burger_popup.attr('style') == "display: block;"){
        scrolling = true;
    } else {scrolling = false}
})

$('window').on('touchend', ()=>{
    if(burger_popup.attr('style' == "display: block;")){
        scrolling = true;
    } else {scrolling = false}
})

const debounce = (callback, time, e)=> {
    clearTimeout(dt);
    let ev = e;
    if (pageYOffset <= ($(".stop-scroll").offset().top-1)){
            event.preventDefault();
        }
    scroll(ev)
    if(burger_popup.attr('style') != "display: block;"){
    dt = setTimeout((e)=>{scrolling = false}, time);
    }
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
    if (scrolling) {return}
    if (deltaY != 0) {								
        if (pageYOffset <= ($(".stop-scroll").offset().top)){
            if (deltaY > 0) {num++}
            if (deltaY < 0) {num--}
            if(num > maxScroll) {num = maxScroll}
            if (num<1) {num = 1}

            scrollAnimation();
        }
        
        if (deltaY<0 && num === 1) {
            b1_2.addClass("hidden");
            mouse_icon.show();
            ft_l.removeClass("resize");
            ft_r.removeClass("resize");
        }
        if (deltaY>0 && num === 2) {
            b1_2.removeClass("hidden");
            mouse_icon.hide();
            ft_l.addClass("resize");
            ft_r.addClass("resize");
        }
        if (deltaY<0 && num === 2) {
            b1_2.addClass("resize");
            ft_l.removeClass("resize_2");
            ft_r.removeClass("resize_2");
            b2_2_wrap.removeClass("visible");
            $(".b1b_head>span:nth-child(3), .b1b_head>span:nth-child(1)").removeClass('slide_n_show');
            b1b_date.removeClass('slide_n_show_2');
            $(".b1b_date>span").removeClass('slide_n_show_pos');
            b1b_all.removeClass('b1b_slideUp');
        }
        if (deltaY>0 && num === 3) {
            b1_2.removeClass("resize");        
            ft_l.addClass("resize_2");
            ft_r.addClass("resize_2");
            b2_2_wrap.addClass("visible");
            setTimeout(()=>{
                $(".b1b_head>span:nth-child(3), .b1b_head>span:nth-child(1)").addClass('slide_n_show');
                b1b_date.addClass('slide_n_show_2');
                $(".b1b_date>span").addClass('slide_n_show_pos');
                b1b_all.addClass('b1b_slideUp');
            }, document.querySelector('.b2_2_wrap').getAttribute('data-timing'));
        }
    }
    deltaY = 0;
});

var num = 1;
var maxScroll = document.querySelectorAll('.screen').length;
var deltaY = 0;

function scroll(e) {
    var event  = e || window.event;
    if (scrolling) {return};
    
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
        if (pageYOffset <= ($(".stop-scroll").offset().top-1) && event.cancelable){
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
        if(b2_2_wrap.css('position') === 'relative' && num !== 3) {
            $('html, body').animate({
                    scrollTop: $(".screen" + num).offset().top
                }, 500, "linear",  ()=> {
            });
        }				
        if(b2_2_wrap.css('position') === 'relative' && num === 3) {
            $('html, body').animate({
                    scrollTop: b2_2_wrap.offset().top
                }, 500, "linear", ()=> {
            });
        }

        if(b2_2_wrap.css('position') === 'absolute') {
            $('html, body').animate({
                    scrollTop: $(".screen" + num).offset().top
                }, 500, "linear", ()=> {
            });
        }
        if (num === 4 ) {
                h_events.css('background', "#2B2B2B");
                burger.addClass('red');
                b2b_all.addClass('red');
            } 
            else {
                document.querySelector('.h_events').removeAttribute('style');
                burger.removeClass('red');
                b2b_all.removeClass('red');
            }
        if (num === 3 && window.matchMedia('all and (max-width: 920px')) {
            header.css('background-color', "#1D1D1D;");
        }
    } else {
        $('html, body').animate({
            scrollTop: $(".screen" + num).offset().top
        }, 500, "linear",  ()=> {
    });
    }
}

function mainPageAnimation (event) {
    if ((event.deltaY < 0 || event.detail < 0 || event.wheelDelta > 0 || event.deltaY < 0) && num === 1) {
        b1_2.addClass("hidden");
        mouse_icon.show();
        $(".use_scroll, .mouse_icon").show();
        ft_l.removeClass("resize");
        ft_r.removeClass("resize"); 
    }
    if ((event.deltaY > 0 || event.detail > 0 || event.wheelDelta < 0 || event.deltaY > 0) && num === 2) {
        b1_2.removeClass("hidden");
        mouse_icon.hide();  
        $(".use_scroll, .mouse_icon").hide();      
        ft_l.addClass("resize");
        ft_r.addClass("resize");
    }
    if ((event.deltaY < 0 || event.detail < 0 || event.wheelDelta > 0 || event.deltaY < 0) && num === 2) {
        ft_l.addClass("resize");
        ft_r.addClass("resize");
        b1_2.addClass("resize");
        ft_l.removeClass("resize_2");
        ft_r.removeClass("resize_2");
        b2_2_wrap.removeClass("visible");
        $(".b1b_head>span:nth-child(3), .b1b_head>span:nth-child(1)").removeClass('slide_n_show');
        b1b_date.removeClass('slide_n_show_2');
        $(".b1b_date>span").removeClass('slide_n_show_pos');
        b1b_all.removeClass('b1b_slideUp');
    }
    if ((event.deltaY > 0 || event.detail > 0 || event.wheelDelta < 0 || event.deltaY > 0) && num === 3) {
        b1_2.removeClass("resize");
        ft_l.removeClass("resize");
        ft_r.removeClass("resize");
        ft_l.addClass("resize_2");
        ft_r.addClass("resize_2");
        b2_2_wrap.addClass("visible");
        setTimeout(()=>{
            $(".b1b_head>span:nth-child(3), .b1b_head>span:nth-child(1)").addClass('slide_n_show');
            b1b_date.addClass('slide_n_show_2');
            $(".b1b_date>span").addClass('slide_n_show_pos');
            b1b_all.addClass('b1b_slideUp');
        }, document.querySelector('.b2_2_wrap').getAttribute('data-timing'));
    }
}
})