var scroll_pos = 0;

jQuery(window).on('load', function() {
  "use strict";
  var portfolio_selectors = $(".portfolio-filter li a");
  if (portfolio_selectors != "undefined") {
    var portfolio = $(".portfolio-items");
    portfolio.isotope({
      itemSelector: "li",
      layoutMode: "fitRows"
    });
    portfolio_selectors.on("click", function() {
      portfolio_selectors.removeClass("active");
      $(this).addClass("active");
      var selector = $(this).attr("data-filter");
      portfolio.isotope({ filter: selector });
      return false;
    });
  }
});

jQuery(document).ready(function($){
'use strict';

jQuery('body').backstretch([
    require('~/assets/bg/bg-3.jpg'),
    require('~/assets/bg/bg-2.jpg'),
    require('~/assets/bg/bg-6.jpg'),
    require('~/assets/bg/bg-7.jpg')
  ], {duration: 5000, fade: 1500, centeredY: true });

});

jQuery(function($) {
  "use strict";
  $(".tile-progress .tile-header").matchHeight();
  var footerHeight = jQuery("#footer-wrapper").outerHeight();
  jQuery("#content-wrapper").css("margin-bottom", footerHeight);

  var windowsHeight = jQuery(window).height();
  var navHeight = jQuery("navbar-fixed-top").outerHeight();
  var newHeight = windowsHeight + 30;

  jQuery("#main-slider").css("height", newHeight + "px");
  jQuery("#single-page-slider").css("min-height", windowsHeight / 3 + "px");

  //goto top
  $(".gototop").click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $("body").offset().top
      },
      500
    );
  });



  jQuery(".prevbg").click(function(x) {
    x.preventDefault();
    jQuery("body")
      .data("backstretch")
      .prev();
  });
  jQuery(".nextbg").click(function(x) {
    x.preventDefault();
    jQuery("body")
      .data("backstretch")
      .prev();
  });
});

/*-----------------------------------------------------------------------------------*/
/*  FANCY NAV
/*-----------------------------------------------------------------------------------*/
$(window).scroll(function() {
  "use strict";
  var scroll_pos = 0;
  $(document).scroll(function() {
    var windowsHeight = $(window).height() - 400;
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > windowsHeight) {
      $(".navbar-fixed-top").removeClass("opaqued");
    } else {
      $(".navbar-fixed-top").addClass("opaqued");
    }
  });

  if (
    $(document).height() - $(window).height() - $(window).scrollTop() <
    1000
  ) {
    $("#footer-wrapper").css("z-index", "4");
  } else {
    $("#footer-wrapper").css("z-index", "1");
  }
});

jQuery(document).ready(function($) {
  "use strict";

  var windowsHeight = $(window).height();
  scroll_pos = $(this).scrollTop();
  if (scroll_pos > windowsHeight) {
    $(".navbar-fixed-top").removeClass("opaqued");
  } else {
    $(".navbar-fixed-top").addClass("opaqued");
  }
  if (
    $(document).height() - $(window).height() - $(window).scrollTop() <
    1000
  ) {
    $("#footer-wrapper").css("z-index", "4");
  } else {
    $("#footer-wrapper").css("z-index", "1");
  }
});

/*-----------------------------------------------------------------------------------*/
/*  SEARCH BAR
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
  "use strict";
  //jQuery("#search-wrapper, #search-wrapper input").hide();

  jQuery("span.search-trigger").click(function() {
    jQuery("#search-wrapper").slideToggle(0, function() {
      var check = $(this).is(":hidden");
      if (check == true) {
        jQuery("#search-wrapper input").fadeOut(600);
      } else {
        jQuery("#search-wrapper input").focus();
        jQuery("#search-wrapper input").slideDown(200);
      }
    });
  });

    $("#main-slider .carousel-content").flexVerticalCenter({
    cssAttribute: "padding-top",
    verticalOffset: '90px'
  });
});

/*-----------------------------------------------------------------------------------*/
/*  NICESCROLL
/*-----------------------------------------------------------------------------------*/

/*-----------------------------------------------------------------------------------*/
/*  ANIMATE
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function($) {
  "use strict";
  jQuery(".fade-up, .fade-down, .bounce-in, .flip-in").addClass("no-display");
  jQuery(".bounce-in").one("inview", function() {
    jQuery(this).addClass("animated bounceIn appear");
  });
  jQuery(".flip-in").one("inview", function() {
    jQuery(this).addClass("animated flipInY appear");
  });

  jQuery(".fade-up").one("inview", function() {
    jQuery(this).addClass("animated fadeInUp appear");
  });
  jQuery(".fade-down").one("inview", function() {
    jQuery(this).addClass("animated fadeInDown appear");
  });
});

/*-----------------------------------------------------------------------------------*/
/*  SNOOOOOOOOTH SCROLL - SO SMOOTH
/*-----------------------------------------------------------------------------------*/
jQuery(function() {
  "use strict";
  jQuery("a[href*=\\#]:not([href=\\#])").click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          1000
        );
        return false;
      }
    }
  });
});

/*-----------------------------------------------------------------------------------*/
/*  CAROUSEL
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
  "use strict";
  //Set the carousel options
  jQuery("#quote-carousel").carousel({
    pause: true,
    interval: 4000
  });

  jQuery("#scroller").carousel({
    pause: true,
    interval: 4000
  });
});
