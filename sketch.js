let spritesheet;
let spritedata;

// let spritesheet2;
// let spritedata2;

let animation = [];
let chickens=[];
// let chicken=[];

// let animation2=[];
// let sky=[];

let showText=false;

let shapeDraw=false;

let font1;

function preload(){
  font1 = loadFont('pixelated/pixelated.ttf');
  spritedata = loadJSON('spritechicken.json');
  spritesheet = loadImage('images/chicken.png');

  // spritedata2 = loadJSON('spritesky.json');
  // spritesheet2 = loadImage('bg1.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 //for chicken
  let frames = spritedata.frames;
  for (let i = 0; i<frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
    animation.push(img);
  }

  for (let i=0; i<10; i++){
  let xpos = i*150+100;
    chickens[i] = new Sprite (animation, xpos, 100, 0.2, 2);
  }
    setTimeout(textDis,18000);
    setTimeout(newShape,2000);
  // }
}

function textDis(){
showText=true;
setTimeout(textHide,3000);
}

function textHide(){
showText=false;
}
//drawing ellipse
function newShape(){
shapeDraw=true;
setTimeout(shapeHide,5000);
}

function shapeHide(){
shapeDraw=false;
}



function draw() {
  background (0);

   for (let chicken of chickens){
    chicken.show();
    chicken.animate();
   }

   if (showText){
    textFont(font1);
    textSize(200);
    fill('yellow');
    text('epoch of the anthropocene',15,280);
   }

   if (shapeDraw){
    fill(51);
    rect(20, 20, 60, 60);
  }
}

















//ellipse
