let spritesheet;
let spritedata;
let animation=[];
let boys=[];

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
  for (let i=0; i<8; i++){
   boys[i] = new Sprite (animation,random(width),i*random(windowHeight), random(0.1,0.7));
  }
  console.log(animation);
  setInterval(goBlack,2000);

}

function goBlack(){
  console.log("turning black!");
  state=!state
}

function draw() {
  background (255,255,0);

  if (state)
  {for (let boy of boys){
    boy.show();
    boy.animate();
  }
} else{
  background(0)
}


}
