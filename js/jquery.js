

$(document).ready(function () {
    $(".burger").on('click', function () {
        $(this).toggleClass("toggle");
    });
});

$('.sectText').hide();
$('.text1').fadeIn(500);
$('.text2').fadeIn(1000);
$('.text3').fadeIn(1500);