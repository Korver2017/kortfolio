
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

  $window.on ('scroll', function () {

    let $windowScrollTop = $window.scrollTop ();

    function calcAnchor (target) {
      return target.offset ().top - target.outerHeight () / 3;
    }

    function trigger (target) {
      return $windowScrollTop > calcAnchor (target);
    }

    if ($windowScrollTop < $cover.outerHeight () / 4)
      $cover.find ('h1, .email').addClass ('animated jackInTheBox');

    $('.scrollMoveOut').stop (true).animate ({}, 1000, function () {
      $(this).css ({
        'transform': 'translateX(' + ($windowScrollTop / 20) + 'px)'
      });
    });

    $('.social-icons').stop (true).animate ({}, 1000, function () {

      let $moveUnit = (($windowScrollTop) / $window.height () * 100);

      $(this).css ({
        'transform': 'translateY(' + ($moveUnit / 5) + 'vh)'
      });
    });
    
    if (trigger ($intro)) {

      setTimeout  (function () {
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
      
      setTimeout (function () {
        $('.subheadingGroup5').css ('opacity', 1).addClass ('animated fadeInRight');
      }, 1200);
    }
    
    if (trigger ($skills)) {
      $('.dev-icons').css ('opacity', 1).addClass ('animated bounceInRight');
    }

    if (trigger ($collection)) {

      $card.filter(':first-child').css ('opacity', 1).addClass ('animated bounceInLeft');
      $card.filter(':last-child').css ('opacity', 1).addClass ('animated bounceInRight');

      setTimeout (function () {
        $card.filter (':nth-child(2)').css ('opacity', 1).addClass ('animated bounceIn');
      }, 800);
    }

    if (trigger ($contact)) {
      $('#contact .cardWrap').css ('opacity', 1).addClass ('animated flipInY');
    }
  });
});
