
let img; // creates image variable

let size = 11 // element size

let startx = 0 // starting x coordinate
let starty = 0 //

function preload() {
  img = loadImage('images/flame.png'); // preloads flame picture
}

function setup(){

  createCanvas(windowWidth, windowHeight); // creates canvas

  img.loadPixels(); // loads image
  img.resize(windowWidth, 0); // resizes image to window size
  img.updatePixels(); // updates image

}

function draw(){
clear();
background(0);


for (var starty = 0; starty < img.height; starty++) { // creates pixel index
    for (var startx = 0; startx < img.width; startx++) {
      var index = (startx + starty * img.width) * 4;

      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      // var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b)); // sets pixel value to adjusted grayscale
      fill(r,g,b); // fills element with adjusted grayscale
      noStroke();
      rect(startx, starty, size, size);
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }

updatePixels();
}
