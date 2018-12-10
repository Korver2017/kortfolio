$(document).ready(function () {
  var $window = $(window);

  $('.toggleButton').on('click', function () {
    $(this).toggleClass('active');
    $('body').toggleClass('nightMode');
  });

  $('body').addClass('show');
  $('#sideNav').addClass('navShow');
  if ($window.scrollTop() < $('#cover').outerHeight() / 4) {
    setTimeout(function () {
      $('h1, .email').addClass('show animated jackInTheBox show');
    }, 1500);
  };

  $window.on('scroll', function () {
    var $windowScrollTop = $window.scrollTop();
    if ($windowScrollTop < $('#cover').outerHeight() / 4) {
      $('h1, .email').addClass('animated jackInTheBox');
    }

    $('.scrollMoveOut').stop(true).animate({}, 1000, function () {
      $(this).css({
        'transform': 'translateX(' + ($windowScrollTop / 20) + 'px)'
      })
    });

    $('.social-icons').stop(true).animate({}, 1000, function () {
      var $moveUnit = (($windowScrollTop) / $window.height() * 100);
      $(this).css({
        'transform': 'translateY(' + ($moveUnit / 5) + 'vh)'
      });
    });

    if ($window.scrollTop() > ($('#introduction').offset().top) - $('#introduction').outerHeight() / 3) {

      setTimeout(function () {
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

    if ($window.scrollTop() > ($('#skills').offset().top) - $('#skills').outerHeight() / 3) {
      $('.dev-icons').css('opacity', 1).addClass('animated bounceInRight');
    }

    if ($window.scrollTop() > ($('#collection').offset().top) - $('#collection').outerHeight() / 3) {

      $card = $('#collection .card');
      $card.filter(':first-child').css('opacity', 1).addClass('animated bounceInLeft');
      $card.filter(':last-child').css('opacity', 1).addClass('animated bounceInRight');

      setTimeout(function () {
        $card.filter(':nth-child(2)').css('opacity', 1).addClass('animated bounceIn');
      }, 800);
    }

    if ($window.scrollTop() > ($('#contact').offset().top) - $('#contact').outerHeight() / 3) {
      $('#contact .cardWrap').css('opacity', 1).addClass('animated flipInY');
    }

  });
});