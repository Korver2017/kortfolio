
// Custom JavaScript
jQuery (function () {

  // Prepare variables
  const $window = $(window)
      , $body = $('body')
      , $cover = $('#cover')
      , $intro = $('#introduction')
      , $skills = $('#skills')
      , $collection = $('#collection')
      , $card = $('#collection .card')
      , $contact = $('#contact')
      ;

  // Toggle for light / dark mode.
  $('.toggleButton').on ('click', function () {
    $(this).toggleClass ('active');
    $body.toggleClass ('nightMode');
  });

  $body.addClass ('show');

  // Initialize to display page.
  setTimeout (function () {
    $('#sideNav').addClass ('navShow');

    // Prevent page empty when refresh.
    $window.trigger ('scroll');
  }, 1500);

  // Function for scroll effect.
  $window.on ('scroll', function () {

    let $windowScrollTop = $window.scrollTop ();

    // Calculate anchor position.
    function calcAnchor (target) {
      return target.offset ().top - target.outerHeight () / 3;
    }

    // If scroll bigger than anchor, return true, then trigger animation.
    function trigger (target) {
      return $windowScrollTop > calcAnchor (target);
    }

    // Animation for name & email.
    if ($windowScrollTop < $cover.outerHeight () / 4)
      $cover.find ('h1, .email').addClass ('animated jackInTheBox');

    // Parallax effect for position.
    $('.scrollMoveOut').stop (true).animate ({}, 1000, function () {
      $(this).css ({'transform': `translateX(${($windowScrollTop / 20)}px)`});
    });

    // Parallax effect for social icons.
    $('.social-icons').stop (true).animate ({}, 1000, function () {
      let $moveUnit = (($windowScrollTop) / $window.height () * 100);
      $(this).css ({'transform': `translateY(${($moveUnit / 5)}vh)`});
    });
    
    // Animation for introduction section.
    if (trigger ($intro)) {

      setTimeout (function () {
        $('.subheadingGroup1').css ('opacity', 1).addClass ('animated fadeInRight');
      }, 0);

      setTimeout (function () {
        $('.subheadingGroup2').css ('opacity', 1).addClass ('animated fadeInRight');
      }, 300);

      setTimeout (function () {
        $('.subheadingGroup3').css ('opacity', 1).addClass ('animated fadeInRight');
      }, 600);

      setTimeout (function () {
        $('.subheadingGroup4').css ('opacity', 1).addClass ('animated fadeInRight');
      }, 900);
    }
    
    // Animation for skills section.
    if (trigger ($skills)) {
      $('.dev-icons').css ('opacity', 1).addClass ('animated bounceInRight');
    }

    // Animation for collection section.
    if (trigger ($collection)) {

      $card.filter(':first-child').css ('opacity', 1).addClass ('animated bounceInLeft');
      $card.filter(':last-child').css ('opacity', 1).addClass ('animated bounceInRight');

      setTimeout (function () {
        $card.filter (':nth-child(2)').css ('opacity', 1).addClass ('animated bounceIn');
      }, 800);
    }

    // Animation for contact section.
    if (trigger ($contact)) {
      $('#contact .cardWrap').css ('opacity', 1).addClass ('animated flipInY');
    }
  });
});
