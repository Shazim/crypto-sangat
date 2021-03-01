import $ from "jquery";

const CustomFunction = () => {
  $(window).on("load", function () {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  });

  // Menu
  $(".navbar-toggle").on("click", function (event) {
    $(this).toggleClass("open");
    $("#navigation").slideToggle(400);
  });

  $(".navigation-menu>li").slice(-1).addClass("last-elements");

  $(".menu-arrow,.submenu-arrow").on("click", function (e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      $(this)
        .parent("li")
        .toggleClass("open")
        .find(".submenu:first")
        .toggleClass("open");
    }
  });

  $(".navigation-menu a").each(function () {
    if (this.href == window.location.href) {
      $(this).parent().addClass("active");
      $(this).parent().parent().parent().addClass("active");
      $(this).parent().parent().parent().parent().parent().addClass("active");
    }
  });

  // Clickable Menu
  $(".has-submenu a").click(function () {
    if (window.innerWidth < 992) {
      if ($(this).parent().hasClass("open")) {
        $(this).siblings(".submenu").removeClass("open");
        $(this).parent().removeClass("open");
      } else {
        $(this).siblings(".submenu").addClass("open");
        $(this).parent().addClass("open");
      }
    }
  });

  $(".mouse-down").on("click", function (event) {
    var $anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $($anchor.attr("href")).offset().top - 72,
        },
        1500,
        "easeInOutExpo"
      );
    event.preventDefault();
  });

  //Sticky
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
      $(".sticky").addClass("nav-sticky");
    } else {
      $(".sticky").removeClass("nav-sticky");
    }
  });

  // Back to top
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 3000);
    return false;
  });

  //Tooltip
  // $(function () {
  //   $('[data-toggle="tooltip"]').tooltip();
  // });
  // //Popover
  // $(function () {
  //   $('[data-toggle="popover"]').popover();
  // });
  //Feather icon
  // feather.replace();

  //Owl Carousel
  // $("#customer-testi").owlCarousel({
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // });

  // $("#client-four").owlCarousel({
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 4,
  //     },
  //   },
  // });

  // $("#owl-fade").owlCarousel({
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: true,
  //   animateOut: "fadeOut",
  //   items: 1,
  // });

  // $("#single-owl").owlCarousel({
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 5000,
  //   autoplayHoverPause: true,
  //   items: 1,
  // });

  // $("#six-slide").owlCarousel({
  //   loop: true,
  //   nav: false,
  //   dots: true,
  //   autoplay: true,
  //   autoplayTimeout: 3000,
  //   autoplayHoverPause: true,
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 3,
  //     },
  //     900: {
  //       items: 4,
  //     },
  //     1100: {
  //       items: 6,
  //     },
  //   },
  // });
};

export { CustomFunction };
