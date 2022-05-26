
let chickendata;
let chickensheet;

let animation = [];
let chickens=[];

function preload(){
 chickendata = loadJSON('spritechicken.json');
 chickensheet = loadImage('images/chicken.png');
}

function setup(){
  createCanvas(windowWidth,windowHeight);

 let frames = chickendata.frames;
 for (i=0;i<frames.length;i++){
   let pos = frames[i].position;
   let img = chickensheet.get(pos.x,pos.y,pos.w,pos.h);
   animation.push(img);
  }

 for(let i=0;i<2;i++){
   let x= 10 + 90 *i;
   chickens[i] = new Chicken (animation, x, 100, 0.2);
  }

}

function draw(){
 background(0);

  for(let i=0;i<2;i++){
   chickens[i].show();
   chickens[i].animate();
  }

}
