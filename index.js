$(document).ready(function () {
    $('.tour-header-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });


    $('.item-mountain-2').click(function () {
        if ($('.tour-slide-2').is(":hidden")) {
            $('.tour-slide-2').show();
            $('.tour-slide-1').hide();
            $('.tour-slide-3').hide();
        }
    });

    $('.item-mountain-1').click(function () {
        if ($('.tour-slide-1').is(":hidden")) {
            $('.tour-slide-1').show();
            $('.tour-slide-2').hide();
            $('.tour-slide-3').hide();
        }
    });

    $('.item-mountain-3').click(function () {
        if ($('.tour-slide-3').is(":hidden")) {
            $('.tour-slide-3').show();
            $('.tour-slide-1').hide();
            $('.tour-slide-2').hide();
        }
    });
});