document.addEventListener('DOMContentLoaded', ()=>{
    var position;
    var moveCycleF;
    var moveCycleB;
    var position;
    var newsowl = $('.news_slider');
    var curSlide = 0;
    const timing = 1000;
    const LIMIT_LEFT = .2;
    const LIMIT_RIGHT = .8;
    var maxSlideElem = document.querySelector('.news_slider');
    document.querySelector('.b2_wrap').addEventListener('mousemove', (e)=>{
        e = e || window.event;
        position = e.clientX / newsowl.attr('data-w');
        if (position <= LIMIT_LEFT) {
            if(moveCycleB == undefined){
                clearInterval(moveCycleF); moveCycleF = undefined;
                translateOwlStage(-1);
                moveCycleB = setInterval(translateOwlStage, timing, (-1));
            }
        } else if (position >= LIMIT_RIGHT) {
            if(moveCycleF == undefined){
                clearInterval(moveCycleB); moveCycleB = undefined;
                translateOwlStage(1);
                moveCycleF = setInterval(translateOwlStage, timing, 1);
            } 
        }else {
            clearInterval(moveCycleB); moveCycleB = undefined;
            clearInterval(moveCycleF); moveCycleF = undefined;
        }
    });
    
    document.addEventListener('touchstart', ()=>{
        clearInterval(moveCycleB); moveCycleB = undefined;
        clearInterval(moveCycleF); moveCycleF = undefined;
    })

    function translateOwlStage (x) {
        curSlide = parseInt(curSlide) + parseInt(x);
        if(curSlide<0){curSlide=0}
        if(curSlide>maxSlideElem.getAttribute('data-maxSlide')){curSlide=maxSlideElem.getAttribute('data-maxSlide')}
        newsowl.trigger('to.owl.carousel', curSlide);    
    }
    newsowl.on('change.owl.carousel', ()=>{
        setTimeout(()=>{
            curSlide = $('.news_slider .owl-item.active').index();
        }, 1000)
    });
})
