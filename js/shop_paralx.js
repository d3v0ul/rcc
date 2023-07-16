var startX = 0;
var start_pos = 50;
var w_width = Math.max($(document).innerWidth(), $(window).innerWidth());
var moveCycle;
var position;
var newsowl = $('.news_slider');
// var starNewsOwl = document.querySelector('.owl-stage').getAttribute('style');
document.querySelector('.b3_wrap').addEventListener('mousemove', (e)=>{
    e = e || window.event;
    let x = startX - e.clientX;
    start_pos = (start_pos - x/70);
    let style = start_pos+'%';
    if (start_pos <=0 ) start_pos = 0;
    if (start_pos >= 100) start_pos = 100;
    $('.b3_wrap').css('background-position', style);
    startX = e.clientX;
})
document.querySelector('.b3_wrap').addEventListener('mouseenter', (e)=>{
    e = e || window.event;
    startX = e.clientX
})
document.querySelector('.b2_wrap').addEventListener('mousemove', (e)=>{
    e = e || window.event;
    position = e.clientX / w_width;
    if (position <= .20) {
        if(moveCycle == undefined){
            moveCycle = setInterval(translateOwlStage, 50);
        }
    } else if (position >= .80) {
        if(moveCycle == undefined){
        } 
    }else {
        clearInterval(moveCycle); moveCycle = undefined;
    }
});

function translateOwlStage (x) {
    $('.news_slider>.owl-stage-outer>.owl-stage').css('backgroud-color', '#fff');
}