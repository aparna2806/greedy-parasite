// //array of images
let images=[];
let canvas2;
let font1;
//
let o=0;


//loading different images
function preload(){
apple=loadImage('images/002.png');
tree=loadImage('images/003.png');
flower=loadImage('images/004.png');
fire=loadImage('images/005.png');
stone=loadImage('images/006.png');
//

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
  // yellow background('#faff00');
  //orange background('#ff4242');
  //purple background('#8a54ff');
  // background('#ff01fb');


  for(let x=0;x<windowWidth;x+=80){
     for(let y =0;y <windowHeight;y+=80)
    image([apple, tree, flower, fire, stone][int(random(5))], x,y,80,80);
   }
//
image(canvas2,0,0);
stroke('#faff00');
strokeWeight(2.5);
// for(let x=0;x<windowWidth+150; x+=80){
//    for(let y =0;y <windowHeight+150; y+=80)
//    //rect fill canvas2.fill('#faff00');
//    canvas2.rect(random(x),random(y),40,40);
// }
//font
  textFont(font1);
  textSize(150);
  fill('#53ff45');
  text('epoch of the',170,280);
  textSize(170);
  text('greedy  parasite',15,480);

  //
  // translate (width/2, height/2);
  //   o+= 0.02;
  //   // rotate(o);
  //   image(img,0, 0, 220,250);


  }
