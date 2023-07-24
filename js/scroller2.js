$(document).ready(() => {
  const THRESHOLD = 50
  const SCROLLING_SPEED = 500

  const focusToSection = () => {
    const section = $('#pagepiling > .section.active')
    section.attr("tabindex", "1")
    section.trigger("focus")
  }

  const leaveFromSection = (index) => {
    const section = $('#pagepiling > .section')[index - 1]
    section.removeAttribute("tabindex")
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

  const toggleHeaderDark = () => {
    $('header.h_main').toggleClass('dark');
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
    },
    afterLoad(anchorLink, index) {
      focusToSection()

      if (index === 1) {
        $('.mouse_icon').show();
        $('.use_scroll').show();
      } else {
        $('.mouse_icon').hide();
        $('.use_scroll').hide();
      }

      if (index === 2) {
        $('.h_events').css('background-color', "#2B2B2B");
        $('.burger').addClass('red');
        $('.b2b_all').addClass('red');
      } else {
        $('.h_events').css('background-color', "#E04141");
        $('.burger').removeClass('red');
        $('.b2b_all').removeClass('red');
      }

      if (index === 3) {
        toggleHeaderDark()
      }
    },
    onLeave(index, nextIndex, direction) {
      leaveFromSection(index)
      
      if (index === 3 && nextIndex === 2) {
        toggleHeaderDark()
      }
    }
  });
});