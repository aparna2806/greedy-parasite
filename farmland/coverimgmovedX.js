// //array of images
let images=[];
let canvas2;
let font1;
//
let o=0;

let d;
let r = 20;
//loading different images
function preload(){
apple=loadImage('images/002.png');
tree=loadImage('images/003.png');
flower=loadImage('images/004.png');
fire=loadImage('images/005.png');
stone=loadImage('images/006.png');


img = loadImage('images/parasites.png');
font1 = loadFont('pixelated/pixelated.ttf');
}

function setup(){
 createCanvas(windowWidth,windowHeight);
 frameRate(2);
 print(images);
 canvas2 = createGraphics(windowWidth, windowHeight);
 canvas2.clear();
}

function draw(){
background('#e500ba');

  for(let x=0;x<windowWidth;x+=80){
     for(let y =0;y <windowHeight;y+=80)
    image([apple, tree, flower, fire, stone][int(random(5))], x,y,80,80);
   }
   console.log(movedX,movedY,mouseX,mouseY);

   d= dist(movedX,movedY,mouseX,mouseY);

   if (d>=r){
     background('red');
   }


image(canvas2,0,0);
stroke('#faff00');
strokeWeight(2.5);

  textFont(font1);
  textSize(150);
  fill('#53ff45');
  text('epoch of the',170,280);
  textSize(170);
  text('greedy parasite',15,480);

  }
