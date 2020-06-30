$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    $(".navbar-default").css("top","-0px");
  } else if ($(window).scrollTop()>$(window).height()) {
    $(".navbar-default").css("top","-80px");
  }
  prevScrollpos = currentScrollPos;
} 


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

let checked=0;
$('.checkbox').click(function() {
    if(checked==0) {
        $('.checkbox').addClass('checked');
        checked = 1;
    } else {
        $('.checkbox').removeClass('checked');
        checked = 0;
    }
    
})

$("#loginform").submit(function(e) {
    e.preventDefault();
    var password = $("#pwInput").val();
    var email = $("#emailInput").val();
    if (email.length==0) {
        $('#loginerror p').text("Devi compilare il campo e-mail.");
    }
    if (password.length==0) {
        $('#loginerror p').text("Password mancante.");
    }
    if (email.length==0&&password.length==0) {
        $('#loginerror p').text("Devi compilare i campi richiesti.");
    }
    if (email.length>0&&password.length>0) {
        $('#loginerror p').text("Credenziali di accesso errate.");
    }
    $('#loginerror').removeClass("hideError");
    setTimeout(function(){$('#loginerror').addClass("hideError");},5000);
});


$(window).scroll(function(){
            scrollElements();
        });
        function scrollElements() {
            var scroll = $(window).scrollTop();
            
            $(".tilt-bg").each(function(){
                var _offset = $(this).next().offset();
                var _transform = scroll - _offset.top;
                var skew = -_transform/200;
                if (skew > 4) {
                    skew = 4
                } else if (skew<-4) {
                    skew= -4;
                }
                if (_transform>(28-140)*5) {
                    _transform=(28-140)*5;
                }
                
                $(this).css({
                    
                    "transform": "translateY("+(140+(_transform/5))+"px) skewY("+skew+"deg)"
                });
            })
            $(".tilt-bg.grey").each(function(){
                var _offset = $(this).next().offset();
                var _transform = scroll - _offset.top;
                var skew = _transform/200;
                if (skew > 4) {
                    skew = 4
                } else if (skew<-4) {
                    skew= -4;
                }
                if (_transform>(28-160)*5) {
                    _transform=(28-160)*5;
                }
                $(this).css({
                    
                    "transform": "translateY("+(160+(_transform/5))+"px) skewY("+skew+"deg)"
                });
            })
            $(".carousel-background").each(function(){
                var _offset = $(this).next().offset();
                var _transform = scroll - _offset.top;
                $(this).css({
                    
                    "transform": "translateY("+(40+(_transform/5))+"px) skewY("+(3+_transform/200)+"deg)"
                });
            })
            $(".image").each(function(){
                var _offset = jQuery("img", this).offset();
                var _transform = scroll - _offset.top;
                if (_transform>(28-140)*6) {
                    _transform=(28-140)*6;
                }
                $(this).css({
                    
                    "transform": "translateY("+(140+(_transform/6))+"px)"
                });
            })
        }
        scrollElements();