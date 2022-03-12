
// Custom JavaScript
jQuery (function () {

  // Prepare variables.
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

    let $windowScrollTop = $window.scrollTop ()
      , $moveUnit = (($windowScrollTop) / $window.height () * 100)
      ;

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
      $cover.find ('h1, .email').addClass ('animate__animated animate__jackInTheBox');

    // Parallax effect for position.
    $('.scrollMoveOut').css ({'transform': `translateX(${($windowScrollTop / 20)}px)`});

    // Parallax effect for social icons.
    $('.social-icons').css ({'transform': `translateY(${($moveUnit / 5)}vh)`});

    // Pass DOM & timeout to apply animation effect.
    function animationTimer (dom, time) {
      setTimeout (() => {
        dom.css ('opacity', 1).addClass ('animate__animated animate__fadeInRight');
      }, time);
    }
    
    // Animation for intro group.
    if (trigger ($intro)) {

      const $introGroup = $intro.find ('.intro-group');

      $introGroup.each (function (i) {
        animationTimer ($(this), 300 * i);
      });
    }

    
    function animateCssHandler (dom, effect) {
      dom.css ('opacity', 1).addClass (`animate__animated animate__${effect}`);
    }
    
    // Animation for skills section.
    if (trigger ($skills))
      animateCssHandler ($('.dev-icons'), 'bounceInRight');

    // Animation for collection section.
    if (trigger ($collection)) {

      animateCssHandler ($card.filter (':first-child'), 'backInLeft');
      animateCssHandler ($card.filter (':last-child'), 'backInRight');

      setTimeout (function () {
        $card.filter (':nth-child(2)').css ('opacity', 1).addClass ('animate__animated animate__zoomIn');
      }, 600);
    }

    // Animation for contact section.
    if (trigger ($contact)) {
      animateCssHandler ($('#contact .cardWrap'), 'flipInY');
    }
  });
});
