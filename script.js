$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


$('.choice.top').mouseenter(function(){   
    $('.choice.top').addClass('pressed');
    $('.choice.bottom').addClass('depressed');
    $('.choice.top .choice-img').removeClass('animated');
    setTimeout(function() {$('.choice.top .choice-img').addClass('animated')}, 10);
});
$('.choice.top').mouseleave(function(){
    $('.choice.top').removeClass('pressed');
    $('.choice.bottom').removeClass('depressed');
});
$('.choice.bottom').mouseenter(function(){   
    $('.choice.bottom').addClass('pressed');
    $('.choice.top').addClass('depressed');
    $('.choice.bottom .choice-img').removeClass('animated');
    setTimeout(function() {$('.choice.bottom .choice-img').addClass('animated')}, 10);
});
$('.choice.bottom').mouseleave(function(){
    $('.choice.bottom').removeClass('pressed');
    $('.choice.top').removeClass('depressed');
});