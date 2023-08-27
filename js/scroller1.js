$(document).ready(() => {
  const THRESHOLD = 50
  const SCROLLING_SPEED = 500

  const focusToSection = () => {
    const section = $('#pagepiling > .section.active')
    section.attr("tabindex", "1")
    //section.trigger("focus")
  }

  const leaveFromSection = (index) => {
    const section = $('#pagepiling > .section')[index - 1]
    section.removeAttribute("tabindex")
  }

  const lockScrolling = () => {
    $.fn.pagepiling.setAllowScrolling(false);
    $.fn.pagepiling.setKeyboardScrolling(false);
  }

  const allowScrolling = () => {
    $.fn.pagepiling.setAllowScrolling(true);
    $.fn.pagepiling.setKeyboardScrolling(true);
  }

  const setArrowScrollingEventsOfScrollableSections = (event, section) => {
    if (section.classList.contains("active")) {
      if (
        (event.key === "ArrowUp" && section.scrollTop - THRESHOLD <= 0)
        || (
          event.key === "ArrowDown"
          && section.scrollHeight - THRESHOLD <=
          section.scrollTop + section.clientHeight
        )
      ) {
        $.fn.pagepiling.setKeyboardScrolling(true);
      } else {
        $.fn.pagepiling.setKeyboardScrolling(false);
      }
    } else {
      event.preventDefault()
    }
  }

  let startTouchYScrollableSection = 0;

  const setTouchScrollingEventsOfScrollableSections = (event, section) => {
    if (section.classList.contains("active")) {
      const endTouchYScrollableSection = event.changedTouches[0].clientY;
      const deltaY = startTouchYScrollableSection - endTouchYScrollableSection;

      if (deltaY < 0 && section.scrollTop - THRESHOLD <= 0) {
        $.fn.pagepiling.moveSectionUp();
      } else if (
          deltaY > 0
          && section.scrollHeight - THRESHOLD <=
          section.scrollTop + section.clientHeight
      ) {
        $.fn.pagepiling.moveSectionDown();
      }
    }
  }

  const setScrollingEventsOfScrollableSections = () => {
    document.querySelectorAll('#pagepiling > .section').forEach((section) => {
      if (section.classList.contains("pp-scrollable")) {
        section.addEventListener("keydown", (event) => {
          setArrowScrollingEventsOfScrollableSections(event, section)
        })

        section.addEventListener('touchstart', (event) => {
          startTouchYScrollableSection = event.changedTouches[0].clientY;
        });
        section.addEventListener('touchmove', (event) => {
          setTouchScrollingEventsOfScrollableSections(event, section)
        })
        section.addEventListener('touchend', (event) => {
          event.preventDefault()
        });
      }
    })
  }

  const initEventsScreen = () => {
    $('.b2_2_wrap').removeClass("visible");
    $(".b1b_head>span:nth-child(3), .b1b_head>span:nth-child(1)").removeClass('slide_n_show');
    $('.b1b_date').removeClass('slide_n_show_2');
    $(".b1b_date>span").removeClass('slide_n_show_pos');
    $('.b1b_all').removeClass('b1b_slideUp');
  }

  const animateEventsScreen = () => {
    $('.b2_2_wrap').addClass("visible");
    setTimeout(() => {
      $(".b1b_head>span:nth-child(3), .b1b_head>span:nth-child(1)").addClass('slide_n_show');
      $('.b1b_date').addClass('slide_n_show_2');
      $(".b1b_date>span").addClass('slide_n_show_pos');
      $('.b1b_all').addClass('b1b_slideUp');
    }, SCROLLING_SPEED);
  }

  const initMainScreen = () => {
    $('.b1_2').addClass("hidden");
    $('.mouse_icon').show();
    $('.use_scroll').show();
    $('.ft_l').removeClass("resize");
    $('.ft_r').removeClass("resize");
  }

  const showMainScreen = () => {
    $('.b1_2').css("z-index", 1).removeClass("hidden");
    $('.mouse_icon').hide();
    $('.use_scroll').hide();
    $('.ft_l').css("z-index", 1).addClass("resize");
    $('.ft_r').css("z-index", 1).addClass("resize");
  }

  const enterMainScreen = () => {
    $('.b1_2').addClass("resize");
    $('.ft_l').addClass("resize");
    $('.ft_r').addClass("resize");
    $('.ft_l').removeClass("resize_2");
    $('.ft_r').removeClass("resize_2");

    lockScrolling()
  }

  const leaveMainScreen = () => {
    $('.b1_2').removeClass("resize");
    $('.ft_l').removeClass("resize");
    $('.ft_r').removeClass("resize");
    $('.ft_l').addClass("resize_2");
    $('.ft_r').addClass("resize_2");

    lockScrolling()
  }

  const toggleHeaderDark = () => {
    $('header.h_main').toggleClass('dark');
  }

  const enterEventsScreen = () => {
    animateEventsScreen()
    lockScrolling()
  }

  let isScrolling = false
  let startTouchY = 0;
  let step = 0

  const controlSteps = (isDown, isUp) => {
    if (step === 0) {
      if (isDown) {
        step = 1
        showMainScreen()
      }
    } else if (step === 1) {
      if (isUp) {
        step = 0
        initMainScreen()
      }
      if (isDown) {
        step = 2
        leaveMainScreen()
        enterEventsScreen()
        toggleHeaderDark()
      }
    } else if (step === 2) {
      if (isUp) {
        step = 1
        toggleHeaderDark()
        initEventsScreen()
        enterMainScreen()
      }
      if (isDown) {
        toggleHeaderDark()
        $.fn.pagepiling.moveSectionDown();
      }
    }
  }

  const setMainScreenKeydownEvents = (event) => {
    controlSteps(event.key === "ArrowDown", event.key === "ArrowUp")
  }

  const setMainScreenTouchEvents = (event) => {
    if (!isScrolling) {
      const endTouchY = event.changedTouches[0].clientY;
      const deltaY = startTouchY - endTouchY;

      if (step === 0 && deltaY < 0) {
        return
      }

      isScrolling = true

      setTimeout(() => {
        isScrolling = false
      }, SCROLLING_SPEED * 2)

      controlSteps(deltaY > 0, deltaY < 0)
    }
  }

  const setMainScreenWheelEvents = (event) => {
    if (!isScrolling) {
      const isUp = event.deltaY < 0 || event.detail < 0 || event.wheelDelta > 0
      const isDown = event.deltaY > 0 || event.detail > 0 || event.wheelDelta < 0

      if (step === 0 && isUp) {
        return
      }

      isScrolling = true

      setTimeout(() => {
        isScrolling = false
      }, SCROLLING_SPEED * 2)

      controlSteps(isDown, isUp)
    }
  }

  const setMainScreenEvents = () => {
    lockScrolling()

    const mainSection = $('#pagepiling > .section')[0]

    mainSection.addEventListener("keydown", setMainScreenKeydownEvents)

    mainSection.addEventListener('touchstart', (event) => {
      startTouchY = event.changedTouches[0].clientY;
    });
    mainSection.addEventListener('touchend', setMainScreenTouchEvents);

    mainSection.addEventListener('wheel', setMainScreenWheelEvents);
    mainSection.addEventListener('mousewheel', setMainScreenWheelEvents)
    mainSection.addEventListener('DOMMouseScroll', setMainScreenWheelEvents)
  }

  $('#pagepiling').pagepiling({
    sectionSelector: '.section',
    verticalCentered: false,
    scrollingSpeed: SCROLLING_SPEED,
    easing: "linear",
    navigation: false,
    touchSensitivity: 15,
    afterRender() {
      setScrollingEventsOfScrollableSections()
      focusToSection()
      initEventsScreen()
      setMainScreenEvents()
    },
    afterLoad(anchorLink, index) {
      focusToSection()

      if (index === 2) {
        allowScrolling()

        $('.h_events').css('background-color', "#2B2B2B");
        $('.burger').addClass('red');
        $('.b2b_all').addClass('red');
      } else {
        $('.h_events').css('background-color', "#E04141");
        $('.burger').removeClass('red');
        $('.b2b_all').removeClass('red');
      }
    },
    onLeave(index, nextIndex, direction) {
      leaveFromSection(index)

      if (index === 2 && nextIndex === 1) {
        lockScrolling()
        toggleHeaderDark()
      }

      if (index === 3 && nextIndex === 2) {
        toggleHeaderDark()
      }

      if (index === 2 && nextIndex === 3) {
        toggleHeaderDark()
      }
    }
  });
});
