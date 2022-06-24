
// let img;


let theme = "'Epoch of the Greedy Parasite' is a desktop collection of poetry, strange dreams, and broken thoughts. \n\nTorn between the phenomenon of feeding on and feeding off, a parasitic relationship is formed among the ecological systems.\n\nThis artwork is exploring our relationship with the planet, just like fleas’ relationship with us-  strategic and slow destruction."

let themey = 600;


function preload(){

// img = createImg('images/g1.gif');
font1 = loadFont('pixel2/pixel.ttf');


}

function setup(){
  createCanvas(windowWidth,windowHeight);

}

  function draw(){
  background('#0B32E4');
  // img.position(50, 350);

  textSize(60);
  textFont(font1);
  fill('white');
  // stroke('white');

  text('<WELCOME>',420,y-15);
  textSize(55);
  text(':)',650,y-15);
  noFill();
  textSize(43);

  // stroke('#ff009b');
  fill('#ff009b');
  // noFill();

  text(theme, 420, themey+15,720,930);
  themey = themey - 0.75;

  if (themey < -5) {
    themey = height;
  }

  noFill();
  textSize(105);
  text('>',1350,800);


 }
