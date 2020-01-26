

var i = 0;
var images = [];
images[0] = "./images/slide1.jpg";
images[1] = "./images/slide2.jpg";
images[2] = "./images/slide3.jpg";

//function för att byta bilder
function slideshow() {

    if (stopImg == false) {
        if (i < images.length - 1) {
            i++;
        }
        else { i = 0; }
    }
    $("#slideshow").attr("src", images[i]);
    //tidsgräns för varje bild
    setTimeout("slideshow()", 3000);
}
//Boolean som kollar om bildspelet ska stoppas/startas
var stopImg = Boolean(false);

$('#stopSlide').click(function () {
    if (stopImg == false) {
        stopImg = true;
        $('#stopSlide').text('Starta Bildspelet');
    }
    else {
        stopImg = false;
        $('#stopSlide').text('Stoppa Bildspelet');
    }
});
slideshow();

$('#slideDiv').hide();
$('#slideDiv').fadeIn(1000);





















