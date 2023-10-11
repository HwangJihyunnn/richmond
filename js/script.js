$(function() {
    $('.gnb').on('mouseover focusin', function() {
        $('.bgGnb').fadeIn();
        $('.gnb .sub').fadeIn()
    })
    $('.bgGnb').on('mouseleave', function() {
        $(this).fadeOut(100);
        $('.gnb .sub').fadeOut(100)
    })
});