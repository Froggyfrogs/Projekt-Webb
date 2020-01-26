
$(function(){
$('.komp').hide();
$('p').addClass("hidden");
$('p').fadeIn(500);
$('#komp1').fadeIn(500);
$('#komp3').fadeIn(500);
$('#komp2').fadeIn(1000);
$('#komp4').fadeIn(1000);
});


var i = 0;
var images = [];
images[0] = "./images/gustavSlide1.jpg";
images[1] = "./images/gustavSlide2.jpg";
images[2] = "./images/gustavSlide3.jpg";

//function för att byta bilder
function slideshow() {

    if (stopImg == false) {
        if (i < images.length - 1) {
            i++;
        }
        else { i = 0; }
    }
    $("#gustavSlideshow").attr("src", images[i]);
    //tidsgräns för varje bild
    setTimeout("slideshow()", 3000);
}
//Boolean som kollar om bildspelet ska stoppas/startas
var stopImg = Boolean(false);

$('#stopSlideGustav').click(function () {
    if (stopImg == false) {
        stopImg = true;
        $('#stopSlideGustav').text('Starta Bildspelet');
    }
    else {
        stopImg = false;
        $('#stopSlideGustav').text('Stoppa Bildspelet');
    }
});
slideshow();

$('#gustavSlideshow').hide();
$('#stopSlideGustav').hide();
$('#gustavSlideshow').fadeIn(1000);
$('#stopSlideGustav').fadeIn(1000);
