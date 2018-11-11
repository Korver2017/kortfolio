$(document).ready(function () {
  $('body').addClass('bodyShow');
  $('nav').addClass('navShow');
  if ($(window).scrollTop() < $('#about').outerHeight() / 4)
    setTimeout(function(){
      $('h1').addClass('animated jackInTheBox');
    }, 1500);  
  

  $(window).on('scroll', function(){
    if($(window).scrollTop() < $('#about').outerHeight() / 4)
      $('h1').addClass('animated jackInTheBox');

    if ($(window).scrollTop() > ($('#skills').offset().top) / 3 * 2)
      $('.dev-icons').css('opacity', 1).addClass('animated bounceInRight');
  });
});
