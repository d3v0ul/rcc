//fighter strikes animation
$(()=>{
    $(function() {
        if (document.querySelector('.mf_strikes')){ 
            var target_block = $(".mf_strikes"); // Ищем блок при прокрутке до которого начнется анимация (+400 верхний отступ)
        // var target_block = $(".screen1");
        var blockStatus = true;
        var colorPaint = '#E04141';
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

                //цвет заливки баров
                if (document.querySelector('body').getAttribute('class') == 'boxing'){
                    colorPaint = '#D58060';
                }
                if (document.querySelector('body').getAttribute('class') == 'fairfight') {
                    colorPaint = '#307DFF';
                }

                // круговые прогресбары
    
                let circularProgress = document.querySelector(".circular-progress"),
                    progressValue = document.querySelector(".progress-value");
    
                let progressStartValue = 0,    
                    progressEndValue = parseInt (parseInt(document.querySelector('.n1_1').getAttribute('data-strikes')) / parseInt(document.querySelector('.n1_2').getAttribute('data-strikes')) * 100),    
                    speed = 30;
                    
                let progress = setInterval(() => {
                    progressStartValue++;
    
                    progressValue.textContent = `${progressStartValue} %`

                    circularProgress.style.background = `conic-gradient(${colorPaint} ${progressStartValue * 3.6}deg, #2B2B2B 0deg)`
    
                    if(progressStartValue == progressEndValue){
                        clearInterval(progress);
                    }    
                }, speed);
                
                if(document.querySelector(".circular-progress2")){
                    let circularProgress2 = document.querySelector(".circular-progress2"),
                    progressValue2 = document.querySelector(".progress-value2");
    
                    let progressStartValue2 = 0,    
                        progressEndValue2 = parseInt (parseInt(document.querySelector('.n1_1').getAttribute('data-strikes')) / parseInt(document.querySelector('.n1_2').getAttribute('data-strikes')) * 100),    
                        speed2 = 30;
                        
                    let progress2 = setInterval(() => {
                        progressStartValue2++;
        
                        progressValue2.textContent = `${progressStartValue2} %`
                        circularProgress2.style.background = `conic-gradient(${colorPaint} ${progressStartValue2 * 3.6}deg, #2B2B2B 0deg)`
        
                        if(progressStartValue2 == progressEndValue2){
                            clearInterval(progress2);
                        }    
                    }, speed2);
                }

                
                if (document.querySelector(".circular-progress3")){
                    let circularProgress3 = document.querySelector(".circular-progress3"),
                        progressValue3 = document.querySelector(".progress-value3");
        
                    let progressStartValue3 = 0,    
                        progressEndValue3 = parseInt (parseInt(document.querySelector('.n1_1').getAttribute('data-strikes')) / parseInt(document.querySelector('.n1_2').getAttribute('data-strikes')) * 100),    
                        speed3 = 30;
                        
                    let progress3 = setInterval(() => {
                        progressStartValue3++;
                        
                        progressValue3.textContent = `${progressStartValue3} %`
                        circularProgress3.style.background = `conic-gradient(${colorPaint} ${progressStartValue3 * 3.6}deg, #2B2B2B 0deg)`
        
                        if(progressStartValue3 == progressEndValue3){
                            clearInterval(progress3);
                        }    
                    }, speed3);                    
                }

                if (document.querySelector(".circular-progress4")){
                    let circularProgress4 = document.querySelector(".circular-progress4"),
                        progressValue4 = document.querySelector(".progress-value4");
        
                    let progressStartValue4 = 0,    
                        progressEndValue4 = parseInt (parseInt(document.querySelector('.n1_1').getAttribute('data-strikes')) / parseInt(document.querySelector('.n1_2').getAttribute('data-strikes')) * 100),    
                        speed4 = 30;
                        
                    let progress4 = setInterval(() => {
                        progressStartValue4++;
        
                        progressValue4.textContent = `${progressStartValue4} %`
                        circularProgress4.style.background = `conic-gradient(${colorPaint} ${progressStartValue4 * 3.6}deg, #2B2B2B 0deg)`
        
                        if(progressStartValue4 == progressEndValue4){
                            clearInterval(progress4);
                        }    
                    }, speed4);
                }

                if (document.querySelector(".circular-progress5")){
                    let circularProgress5 = document.querySelector(".circular-progress5"),
                    progressValue5 = document.querySelector(".progress-value5");
        
                    let progressStartValue5 = 0,    
                        progressEndValue5 = parseInt (parseInt(document.querySelector('.n1_1').getAttribute('data-strikes')) / parseInt(document.querySelector('.n1_2').getAttribute('data-strikes')) * 100),    
                        speed5 = 30;
                        
                    let progress5 = setInterval(() => {
                        progressStartValue5++;
        
                        progressValue5.textContent = `${progressStartValue5} %`
                        circularProgress5.style.background = `conic-gradient(${colorPaint} ${progressStartValue5 * 3.6}deg, #2B2B2B 0deg)`
        
                        if(progressStartValue5 == progressEndValue5){
                            clearInterval(progress5);
                        }    
                    }, speed5);
                }

                if(document.querySelector(".circular-progress6")){
                    let circularProgress6 = document.querySelector(".circular-progress6"),
                    progressValue6 = document.querySelector(".progress-value6");
    
                    let progressStartValue6 = 0,
                        progressEndValue6 = parseInt (parseInt(document.querySelector('.n1_1').getAttribute('data-strikes')) / parseInt(document.querySelector('.n1_2').getAttribute('data-strikes')) * 100),    
                        speed6 = 30;
                        
                    let progress6 = setInterval(() => {
                        progressStartValue6++;
        
                        progressValue6.textContent = `${progressStartValue6} %`
                        circularProgress6.style.background = `conic-gradient(${colorPaint} ${progressStartValue6 * 3.6}deg, #2B2B2B 0deg)`
        
                        if(progressStartValue6 == progressEndValue6){
                            clearInterval(progress6);
                        }    
                    }, speed6);
                }
    
                //столбцы
                console.log(document.querySelector('.cp1_1'))
                $(".column_progress > div").addClass("fill");
                let h = parseInt (parseInt(document.querySelector('.cp1_1').getAttribute('data-strikes')) / parseInt(document.querySelector('.cp1_2').getAttribute('data-strikes')) * 100) + '%';
                $('.cp_1_2.fill').css('height', h);
                console.log(h);
            }
        });
        }
        
    });
})
