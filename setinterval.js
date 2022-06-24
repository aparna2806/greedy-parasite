let spritesheet;
let spritedata;
let animation=[];
let boys=[];
///
let state= true;

function preload(){
  spritedata = loadJSON('spritedata.json');
  spritesheet = loadImage('spritesheet.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  let frames = spritedata.frames;
  for (let i = 0; i<frames.length; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
    animation.push(img);
  }

  for (let i=0; i<5; i++){
   boys[i] = new Sprite (animation,random(width)+65,random(height), 0.1);
  }
  console.log(animation);
  ///
  setInterval(goStraight,2000);
}

function goStraight(){
  console.log("going straight!");
  state =! state;
}

function draw() {
  background (0);

  if (state)
  {for (let boy of boys){
     boy.show();
     boy.animate();
    }

  }
  else{
    {for (let boy of boys){
     boy.straight();
     boy.animate();
  }
}
}
}
