// //array of images
let images=[];
let canvas2;
let font1;
let movedX;
let movedY;
let o=0;

animation[];
let d;

//loading different images
function preload(){
apple=loadImage('images/002.png');
tree=loadImage('images/003.png');
flower=loadImage('images/004.png');
fire=loadImage('images/005.png');
stone=loadImage('images/006.png');
 // animation.push(apple,tree,flower,fire,stone);

img = loadImage('images/parasites.png');

font1 = loadFont('pixel2/pixel.ttf');
}

function setup(){
 createCanvas(windowWidth,windowHeight);
 print(images);
 canvas2 = createGraphics(windowWidth, windowHeight);
 canvas2.clear();

}

function draw(){

  d=dist(mouseX,mouseY,pmouseX,pmouseY);
  print(d);
  if (d>3){
  background('#e500ba');

  for(let x=0;x<windowWidth;x+=120){
    for(let y =0;y <windowHeight;y+=120)
      image([apple, tree, flower, fire, stone][int(random(5))], x,y,120,120);
   }

  image(canvas2,0,0);

  textFont(font1);
  textSize(180);

  fill('white');
  text('EPOCH OF THE',250,400);
  textSize(200);
  text('GREEDY PARASITE',80,580);
}

else{
  // background('#e500ba');
  fill('pink');
  ellipse(0,0,50,50);
}



  }
