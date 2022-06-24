
let glitch;
let restartGlitch=false;

function setup(){
  createCanvas(windowWidth,windowHeight);

  /* create glitch instance */
	glitch = new Glitch();
  glitch.loadType('jpeg');
  glitch.pixelate(0.09);
  glitch.loadQuality(0.1);

  glitch.loadImage('images/pixel.jpeg');

  setTimeout(reGlitch,6000);
  // setTimeout(stopGlitch,9000);
}


function draw(){
  background(0);

  if(restartGlitch){
    // glitch.randomBytes(1);
    // glitch.buildImage();
    // image(glitch.image, 0, 0,windowWidth, windowHeight);

    // glitch.resetBytes();
    // glitch.buildImage();
    // image(glitch.image, 0, 0,windowWidth, windowHeight);
  }

  glitch.limitBytes(0.02,1);
  glitch.randomBytes(2);

  image(glitch.image,0,0,windowWidth,windowHeight);
  glitch.buildImage();
}

function reGlitch() {
  restartGlitch=true;
  console.log("start");
}

function stopGlitch() {
  restartGlitch=false;
  console.log("stop");
}



// let images=[];//image array
// let rectangles=[]; //grid array
// //
// function preload(){
//  images[0]=loadImage('images/002.png');
//  images[1]=loadImage('images/003.png');
//  images[2]=loadImage('images/004.png');
//  images[3]=loadImage('images/005.png');
//  images[4]=loadImage('images/006.png');
// }
//
// function setup(){
// createCanvas(windowWidth,windowHeight);
// background(0);
// for (let i=0;i<5;i++){
//       let r = random(0,images.length);
//       rectangles[i]=new imgClass(images[r], 10*i+100, 10*i+100,150,150);
//   }
// }
//
// function draw(){
//   for (let i=0;i<rectangles.length;i++){
//   rectangles[i].show();
//   }
// }
//
// class imgClass{
//   constructor(img,x,y){
//     this.img=img;
//     this.x=x;
//     this.y=y
//   }
//   show(){
//     image(this.img,this.x,this.y,150,150);
//   }
// }
// 
