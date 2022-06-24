let chickendata;
let chickensheet;

let animation = [];
let chickens=[];

let changeGreen = false;
let img;
let pg;

function preload(){
 img = loadImage('images/parasite.png');
 chickendata = loadJSON('spritechicken.json');
 chickensheet = loadImage('images/chicken.png');
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(0);
  pg = createGraphics(700,500);
  pg.clear();
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



  // chickens = new Chicken(animation,50,250,0.2);

  // let frames = chickendata.frames;
  // for (i=0;i<frames.length;i++){
  //     let pos = frames[i].position;
  //     let img = chickensheet.get(pos.x,pos.y,pos.w,pos.h);
  //     animation.push(img);
  //   }
  }


 function mouseHover(){
  if(mouseX > 15 && mouseX < 110 &&
    mouseY > 10 && mouseY < 100) {
      changeGreen=true;
    }
    else{
      changeGreen=false;
    }
}

function shapeDis(){
 pg.fill('yellow');
 pg.rect(250,0,250,250);
 pg.fill('pink');
 pg.ellipse(375,115,40);
 // chicken();
 // pg.chickens[0].show;
 // pg.chickens[0].animate;
 // pg.chickens[1].show;
 // pg.chickens[1].animate;

 // for(let i=0;i<2;i++){
 //  chickens[i].show();
 //  chickens[i].animate();
 // }

 image(pg,0,0);

}

function draw(){
  // chickens.show();
  // chickens.move();

  mouseHover();
  if(changeGreen){
   fill(0,255,0);
   shapeDis();
  }
   else{
     
   fill(255,0,0);
  }
  noStroke();
  textSize(20);
  text('word', 40, 50)
  strokeWeight(2);
  noFill();
  rect(20,10,80,80);

}
