$(document).ready(function () {



    /******  menu hover  ******/
    $(".menu-lnk.has-item").hover(function () {
        $(this).toggleClass("menu_active");
        $(this).find(".menu-dropdown").toggleClass("open_menu");
        $("body").toggleClass("no_scroll");
      });


          /********* Mobile Menu ********/
    $('.mobile-menu-button').on('click', function (e) {
      e.preventDefault();
      setTimeout(function () {
        $('body').addClass('no_scroll active_menu');
        $(".mobile-menu-wrapper").toggleClass("active_menu");
        $('.overlay').addClass('active');
      }, 50);
    });

    $('body').on('click', '.overlay, .menu-close-icon svg', function (e) {
      e.preventDefault();
      $('body').removeClass('no_scroll active_menu');
      $(".mobile-menu-wrapper").removeClass("active_menu");
      $('.overlay').removeClass('active');
    });


        /*********  Multi-level accordion nav (header & faq) ********/
        $('.acnav-label').click(function () {
          var label = $(this);
          var parent = label.parent('.has-children');
          var list = label.siblings('.acnav-list');
          if (parent.hasClass('is-open')) {
            list.slideUp('fast');
            parent.removeClass('is-open');
          }
          else {
            list.slideDown('fast');
            parent.addClass('is-open');
          }
        });


          /**************************/
        // footer acnav // 
  /**************************/

  $(".footer-acnav").on("click", function () {
    if ($(window).width() < 768) {
      if ($(this).hasClass("is-open")) {
          $(this).removeClass("is-open");
          $(this).siblings(".footer-acnav-list").slideUp(200);
      } else {
          $(".footer-acnav").removeClass("is-open");
          $(this).addClass("is-open");
          $(".footer-acnav-list").slideUp(200);
          $(this).siblings(".footer-acnav-list").slideDown(200);
      }
    }
  });



  
    /** product-card-slider **/
var swiper = new Swiper(".product-slider", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  speed: 800,
  navigation: {
    nextEl: ".product-arrow.swiper-button-next",
    prevEl: ".product-arrow.swiper-button-prev",
  },

  breakpoints: {

    1100: {
      slidesPerView: 4,
    },
    767: {
      slidesPerView: 3,
    },
    400: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
  
});





  // testimonial-slider-start
  function initSwiper() {
    var swiper = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      speed: 800,
      navigation: {
        nextEl: ".testimonial-arrow.swiper-button-next",
        prevEl: ".testimonial-arrow.swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  
    // Check the screen width
    if (window.innerWidth <= 767) {
      // Remove navigation arrows
      swiper.params.navigation = false;
      swiper.navigation.destroy();
      
      // Activate pagination dots
      swiper.pagination.init();
      swiper.pagination.update();
    }
  }
  
  // Initialize swiper on page load
  initSwiper();
  
  // Reinitialize swiper on window resize
  window.addEventListener('resize', function() {
    initSwiper();
  });
    //  scroll up start
    var btn = $('#button');
    $(window).scroll(function () {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
    btn.on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '300');
    });

      /**************************/
        /** counter js **/
  /**************************/

  $('.counting').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {
        duration: 3000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        }

      });
  });

    });
    