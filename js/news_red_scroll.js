document.addEventListener('DOMContentLoaded', ()=>{
    var position;
    var moveCycleF;
    var moveCycleB;
    var position;
    var newsowl = $('.news_slider');
    var curSlide = 0;
    const timing = 50;
    const LIMIT_LEFT = .25;
    const LIMIT_RIGHT = .75;
    var offsetx = 0;
    const step = 4;
    var side = 0;
    var k = 1;
    var time;
    var done = false;
    var maxSlideElem = document.querySelector('.news_slider');
    document.querySelector('.b2_wrap').addEventListener('mousemove', (e)=>{
        e = e || window.event;
        position = e.clientX / newsowl.attr('data-w');
        let tr = newsowl.find('.owl-stage').css('transform');
        if(tr){
            tr = tr.split(',')
            offsetx = tr[4]
        }
        if (position <= LIMIT_LEFT) {
            side = 1;
            if (position < 0.1){position = 0.1}
            requestAnimationFrame(lightTranslate);
        } if (position >= LIMIT_RIGHT) {
            side = -1;
            if (position > 0.9){position = 0.9}
            requestAnimationFrame(lightTranslate);
        } if(position >= LIMIT_LEFT && position <= LIMIT_RIGHT) {
            done = true;
            side = 0;
            clearInterval(moveCycleB); moveCycleB = undefined;
            newsowl.find('.owl-stage').removeClass('fast_translate');
        }
    });
    
    document.addEventListener('touchstart', ()=>{
        done = false;
        clearInterval(moveCycleB); moveCycleB = undefined;
    })

    function lightTranslate (timestamp) {
        time = time ? time : timestamp;
        if(!done){
            requestAnimationFrame(lightTranslate);
        }
        if(timestamp - time >= 50) {
            k = side>0 ? step / position : step / (1-position);
            time = timestamp;
            var maxtr = parseInt(newsowl.attr('data-w')) - $('.news_slider .owl-stage').width();
            offsetx = parseInt(offsetx) + (parseInt(k) * parseInt(side));
            if(offsetx >= 0) {offsetx = 0;}
            if(offsetx < maxtr) {offsetx = maxtr;}
            done = offsetx >= 0 || offsetx <= maxtr ? true : false;
            newsowl.find('.owl-stage').css('transform', 'matrix(1,0,0,1,'+offsetx+',0');
            newsowl.find('.owl-stage').addClass('fast_translate');
        }
    }
});