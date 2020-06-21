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