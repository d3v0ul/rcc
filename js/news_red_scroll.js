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
    var k = 1;
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
            // if(moveCycleB == undefined){
            //     clearInterval(moveCycleF); moveCycleF = undefined;
            //     translateOwlStage(-1);
            //     moveCycleB = setInterval(translateOwlStage, timing, (-1));
            // }
            if (position < 0.1){position = 0.1}
            k = step / position;
            if(moveCycleB != undefined) {return}
            moveCycleB = setInterval(lightTranslate, timing, -1)
        } if (position >= LIMIT_RIGHT) {
            // if(moveCycleF == undefined){
            //     clearInterval(moveCycleB); moveCycleB = undefined;
            //     translateOwlStage(1);
            //     moveCycleF = setInterval(translateOwlStage, timing, 1);
            // }
            if (position > 0.9){position = 0.9}
            k = step / (1-position);
            if(moveCycleB != undefined) {return}
            moveCycleB = setInterval(lightTranslate, timing, 1)
        } if(position >= LIMIT_LEFT && position <= LIMIT_RIGHT) {
            clearInterval(moveCycleB); moveCycleB = undefined;
            newsowl.find('.owl-stage').removeClass('fast_translate');
            // clearInterval(moveCycleF); moveCycleF = undefined;
        }
    });
    
    document.addEventListener('touchstart', ()=>{
        clearInterval(moveCycleB); moveCycleB = undefined;
        clearInterval(moveCycleF); moveCycleF = undefined;
    })

    function lightTranslate (x) {
        var maxtr = parseInt(newsowl.attr('data-w')) - $('.news_slider .owl-stage').width();
        //parseInt(newsowl.attr('data-w'))  - parseInt($('.news-slider .owl-stage').width()) - 50;
        offsetx -= k * x;
        if(offsetx > 0) {offsetx = 0}
        if(offsetx < maxtr) {offsetx = maxtr}
        newsowl.find('.owl-stage').css('transform', 'matrix(1,0,0,1,'+offsetx+',0');
        newsowl.find('.owl-stage').addClass('fast_translate');
        // console.log(newsowl.find('.owl-stage').css('transform'));
        // console.log(k)
    }

    function translateOwlStage (x) {
        // curSlide = parseInt(curSlide) + parseInt(x);
        // if(curSlide<0){curSlide=0}
        // if(curSlide>maxSlideElem.getAttribute('data-maxSlide')){curSlide=maxSlideElem.getAttribute('data-maxSlide')}
        // console.log(newsowl.find('.owl-stage').css('transform', 'matrix(1,0,0,1,150,0'));
        // setInterval (
        //     ()=>{
        //         offsetx -= x;
        //         newsowl.find('.owl-stage').css('transform', 'matrix(1,0,0,1,'+offsetx+',0')
        //     }, 100);
        // newsowl.trigger('to.owl.carousel', curSlide);    
    }
    newsowl.on('translated.owl.carousel', ()=>{
        // setTimeout(()=>{
        //     curSlide = $('.news_slider .owl-item.active').index();
        // }, 1000)
    });

    newsowl.on('translated.owl.carousel', ()=>{
        // console.log(newsowl.find('.owl-stage').css('transform'));
    })
})
