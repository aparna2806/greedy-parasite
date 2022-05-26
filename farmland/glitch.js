
let glitch;

function setup(){
  createCanvas(windowWidth,windowHeight);

  /* create glitch instance */
	glitch = new Glitch();

  glitch.pixelate(0.09);
  glitch.loadQuality(0.1);

  glitch.loadImage('images/pixel.jpeg');
    // glitch.loadImage('images/002.png');
}


function draw(){
  background(0);

  glitch.limitBytes(0.01,1);
  glitch.randomBytes(3);


  // glitch.replaceHex('ffdb00430001', 'ffdb004300ff');
  // glitch.replaceHex('ffdb00430101', 'ffdb004301f0');

  image(glitch.image,0,0,windowWidth,windowHeight);
    glitch.buildImage();


}

function mousePressed() {

  glitch.resetBytes();

}
