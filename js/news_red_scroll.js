document.addEventListener("DOMContentLoaded", () => {
    var position;
    var moveCycleF;
    var moveCycleB;
    var position;
    var newsowl = $(".news_slider");
    var curSlide = 0;
    const timing = 50;
    const LIMIT_LEFT = 0.25;
    const LIMIT_RIGHT = 0.75;
    var offsetx = 0;
    const step = 4;
    var side = 0;
    var k = 1;
    var time;
    var done = false;
    var maxSlideElem = document.querySelector(".news_slider");
    document.querySelector(".b2_wrap").addEventListener("mousemove", (e) => {
        e = e || window.event;
        position = e.clientX / newsowl.attr("data-w");
        let tr = newsowl.find(".owl-stage").css("transform");
        if (tr) {
            tr = tr.split(",");
            offsetx = tr[4];
        }
        if (position <= LIMIT_LEFT) {
            side = 1;
            if (position < 0.1) {
                position = 0.1;
            }
            requestAnimationFrame(lightTranslate);
        }
        if (position >= LIMIT_RIGHT) {
            side = -1;
            if (position > 0.9) {
                position = 0.9;
            }
            requestAnimationFrame(lightTranslate);
        }
        if (position >= LIMIT_LEFT && position <= LIMIT_RIGHT) {
            done = true;
            side = 0;
            clearInterval(moveCycleB);
            moveCycleB = undefined;
            newsowl.find(".owl-stage").removeClass("fast_translate");
        }
    });

    document.addEventListener("touchstart", () => {
        done = false;
        clearInterval(moveCycleB);
        moveCycleB = undefined;
    });

    function lightTranslate(timestamp) {
        time = time ? time : timestamp;
        if (!done) {
            requestAnimationFrame(lightTranslate);
        }
        if (timestamp - time >= 50) {
            k = side > 0 ? step / position : step / (1 - position);
            time = timestamp;
            var maxtr =
                parseInt(newsowl.attr("data-w")) -
                $(".news_slider .owl-stage").width();
            offsetx = parseInt(offsetx) + parseInt(k) * parseInt(side);
            if (offsetx >= 0) {
                offsetx = 0;
            }
            if (offsetx < maxtr) {
                offsetx = maxtr;
            }
            done = offsetx >= 0 || offsetx <= maxtr ? true : false;
            newsowl
                .find(".owl-stage")
                .css("transform", "matrix(1,0,0,1," + offsetx + ",0");
            newsowl.find(".owl-stage").addClass("fast_translate");
        }
    }
});
// document.addEventListener("load", () => {
//   position = false;
//   var startx = 0;
//   var starty = 0;
//   var prev_x = 0; //предыдущее значение
//   var direction = true; // направление
//   var pos = $(".owl-stage").offset().left;
//   var width = document.documentElement.clientWidth;
//   var height = document.documentElement.clientHeight;
//   i = 0; // ставлю счетчик
//   function SCREENmove() {
//     width = document.documentElement.clientWidth;
//     height = document.documentElement.clientHeight;

//     //буду использовать в будущем чтобы запретить элементу отрываться от края экрана
//     widthP = $(".owl-stage-outer").width();
//     widthCh = $(".owl-stage").width();
//     pos = $(".owl-stage").offset().left;
//   }
//   $(window).resize(SCREENmove);
//   $(document).ready(SCREENmove);

//   $(".owl-stage-outer").mousedown(function (event) {
//     position = true;
//     startx = event.clientX;
//     starty = event.clientY;
//     i = 0;
//   });
//   $(document).mouseup(function () {
//     position = false;
//   });
//   document.onmousemove = mousemove;

//   function mousemove(event) {
//     if (position) {
//       mouse_x = y = 0;
//       if (document.attachEvent != null) {
//         mouse_x = window.event.clientX;
//         mouse_y = window.event.clientY;
//       } else if (!document.attachEvent && document.addEventListener) {
//         mouse_x = event.clientX;
//         mouse_y = event.clientY;
//       }
//       if (direction != prev_x > mouse_x) startx = mouse_x; // проверяю, изменилось ли направление, и если да, старт с этого места
//       mx = mouse_x - startx;
//       pos = pos + mx / 40;
//       i++;
//       direction = prev_x > mouse_x;
//     }
//   }
// });
