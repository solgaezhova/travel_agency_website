$(document).ready(function () {
    $('.team-header-item').click(function () {
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });


    $('.item-mountain-2').click(function () {
        if ($('.team-slide-2').is(":hidden")) {
            $('.team-slide-2').show();
            $('.team-slide-1').hide();
        }
    });

    $('.item-mountain-1').click(function () {
        if ($('.team-slide-1').is(":hidden")) {
            $('.team-slide-1').show();
            $('.team-slide-2').hide();
        }
    });
});