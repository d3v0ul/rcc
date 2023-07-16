var startX = 0;
var start_pos = 50;
var start_pos2 = 0;
var w_width = Math.max($(document).innerWidth(), $(window).innerWidth());
var moveCycle;
var position;
document.querySelector('.news_socials_wrap').addEventListener('mousemove', (e)=>{
    e = e || window.event;
    let x = startX - e.clientX;
    start_pos -= x/70;
    start_pos2 += x/35;
    if (start_pos <=0 ) start_pos = 0;
    if (start_pos >= 100) start_pos = 100;
    if (start_pos2 <=-70) start_pos2 = -70;
    if (start_pos2 >= 40) start_pos2 = 40;
    let style = start_pos+'%';
    let style2 = start_pos2+'%';    
    $('.news_socials_wrap').css('background-position', style);
    $('.reddots').css('transform', 'translateX('+style2+')');
    startX = e.clientX;
})
document.querySelector('.news_socials_wrap').addEventListener('mouseenter', (e)=>{
    e = e || window.event;
    startX = e.clientX
})