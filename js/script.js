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

$(function(){
    $('.mobile-btn').click(()=>{
        $('.mobile-gnb, .mobile-bg').stop().fadeIn(300)
    });
    $(".gnb-close").click(()=>{
    $('.mobile-gnb, .mobile-bg').stop().fadeOut(300)
    })
})