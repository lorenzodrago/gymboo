$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

var topStarted = false;
$('.choice.top').mouseenter(function(){   
    if(topStarted==false){
        topStarted=true;
        $('.choice.top').addClass('pressed');
        $('.choice.bottom').addClass('depressed');
        $('.choice.top .choice-img').addClass('animated');
        setTimeout(function(){
            
            $('.choice.top .choice-img').removeClass('animated');
            topStarted=false;
        },700);  
    }
});
$('.choice.top').mouseleave(function(){
    $('.choice.top').removeClass('pressed');
    $('.choice.bottom').removeClass('depressed');
});
var bottomStarted = false;
$('.choice.bottom').mouseenter(function(){   
    if(bottomStarted==false){
        bottomStarted=true;
        $('.choice.bottom').addClass('pressed');
        $('.choice.top').addClass('depressed');
        $('.choice.bottom .choice-img').addClass('animated');
        setTimeout(function(){
            $('.choice.bottom .choice-img').removeClass('animated');
            bottomStarted=false;
        },700);  
    }
});
$('.choice.bottom').mouseleave(function(){
    $('.choice.bottom').removeClass('pressed');
    $('.choice.top').removeClass('depressed');
});