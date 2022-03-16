var image;
var imgcanvas;
function upload() {
    imgcanvas = document.getElementById("d1");
    var fileinput = document.getElementById("finput");
    image = new SimpleImage(fileinput);
    image.drawTo(imgcanvas);
}

function makegray() {
    for(var pixel of image.values()) {
        var avg = (pixel.getRed() + pixel.getBlue() + pixel.getGreen()) / 3;
        pixel.setRed(avg);
        pixel.setBlue(avg);
        pixel.setGreen(avg);
    }
    imgcanvas = document.getElementById("d1");
    image.drawTo(imgcanvas);
}
function myFunction() {
    document.getElementById("myForm").reset();
    document.getElementById("d1").reset();
    image.reset();
  }