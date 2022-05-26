
let spritesheet;
let spritedata;

let spritesheet1;
let spritedata1;

let animation = [];
let chickens=[];

let animation1 = [];
let skies=[];

function preload(){

  spritedata = loadJSON('spritechicken.json');
  spritesheet = loadImage('images/chicken.png');

  spritedata1 = loadJSON('spritesky.json');
  spritesheet1 = loadImage('images/bg1.png');
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  let frames = spritedata.frames;
  for (let i = 0; i<frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
    animation.push(img);
  }
  for (let i=0; i<10; i++){
  let xpos = i*150+100;
  chickens[i] = new Sprite (animation, xpos, 200, 0.2);
  }


  let frames1 = spritedata1.frames1;
  for (let i = 0; i<frames1.length; i++){
    let pos = frames1[i].position;
    let img1 = spritesheet1.get(pos.x,pos.y,pos.w,pos.h);
    animation1.push(img1);
  }

  for (let i=0; i<10; i++){
  let xpos = i*150-2;
  skies[i] = new Sprite (animation1, xpos, 100, 0.2);
  }

}

function draw() {
  background (0);
  push();
  scale(2);
  for (let sky of skies){
    sky.show();
    sky.animate();

  }
  pop();

  for (let chicken of chickens){
    chicken.show();
    chicken.animate();
  }



}
