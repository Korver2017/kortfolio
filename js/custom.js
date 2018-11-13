$(document).ready(function () {
  var $window = $(window);

  $('body').addClass('show');
  $('nav').addClass('navShow');
  // $('#introduction .subheadingGroup').hide();
  if ($window.scrollTop() < $('#cover').outerHeight() / 4) {
    setTimeout(function () {
      $('h1').addClass('show animated jackInTheBox show');
    }, 1500);
  };

  $window.on('scroll', function () {
    var $windowScrollTop = $window.scrollTop();
    if ($windowScrollTop < $('#cover').outerHeight() / 4) {
      $('h1').addClass('animated jackInTheBox');
    }

    if ($windowScrollTop > 0) {
      // console.log($windowScrollTop);
      $('.scrollMoveOut').stop(true).animate({}, 1000, function () {
        $(this).css({
          'transform': 'translateX(' + ($windowScrollTop / 20) + 'px)'
        })
      });

      if ($windowScrollTop > ($('#skills').offset().top) / 3 * 2) {
        $('.dev-icons').css('opacity', 1).addClass('animated bounceInRight');
      }

      if ($windowScrollTop > ($('#introduction').offset().top) / 3 * 2) {
        // $('#introduction .subheading').css('opacity', 1).addClass('animated fadeInRight');
        // $('#introduction .subheadingGroup:first-child').delay(1000).addClass('animated fadeInRight');
        // $('#introduction .subheadingGroup:nth-child(2)').delay(3000).addClass('animated fadeInRight');
        
        setTimeout(function() {
          $('.subheadingGroup1').css('opacity', 1).addClass('animated fadeInRight');
        }, 500);
        setTimeout(function () {
          $('.subheadingGroup2').css('opacity', 1).addClass('animated fadeInRight');
        }, 700);
        setTimeout(function () {
          $('.subheadingGroup3').css('opacity', 1).addClass('animated fadeInRight');
        }, 900);
        setTimeout(function () {
          $('.subheadingGroup4').css('opacity', 1).addClass('animated fadeInRight');
        }, 1100);
        setTimeout(function () {
          $('.subheadingGroup5').css('opacity', 1).addClass('animated fadeInRight');
        }, 1300);
      }
    }

    $('.social-icons').stop(true).animate({}, 1000, function () {
      var $moveUnit = (($windowScrollTop) / $window.height() * 100);
      $(this).css({
        'transform': 'translateY(' + ($moveUnit / 5) + 'vh)'
      });
    });

    
  });
});