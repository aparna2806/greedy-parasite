
let circles=[];
let img=[];
let refresh=false;
let font1;

function preload(){
img[0]=loadImage('images/002.png');
img[1]=loadImage('images/003.png');
img[2]=loadImage('images/004.png');
img[3]=loadImage('images/005.png');
img[4]=loadImage('images/006.png');

font1 = loadFont('pixel2/pixel.ttf');

}
function setup(){
  createCanvas(windowWidth,windowHeight);

  for (var a = 10; a < windowWidth; a += 110) {
    for (var b = 10; b < windowHeight; b += 110) {
         let r = floor(random(0,img.length));
  circles.push(new Circle(img[r],a, b));
  setInterval(reCircles,900);

}
}
}
  function reCircles(){
  refresh=true;
  }


  console.log(circles.length);


function draw() {
    background('#ff009b');
  for (var b = 0; b < circles.length; b++) {
    circles[b].show();
    textFont(font1);
    textSize(180);
    fill('white');
    // text('EPOCH OF THE',550,540);
    text('EPOCH OF THE',300,400);
    textSize(200);
    // text('GREEDY PARASITE',370,690);
    text('GREEDY PARASITE',125,580);
    // circles[b].render();
  }

  if (refresh){
    circles=[];
    for (var a = 10; a < windowWidth; a += 110) {
      for (var b = 10; b < windowHeight; b += 110) {
           let r = floor(random(0,img.length));
    circles.push(new Circle(img[r],a, b));
    refresh=false;
}
}
}
}


class Circle{
  constructor(img,x,y){
    this.x = x;
    this.y = y;
    this.img=img;
  }

  show(){
    image(this.img,this.x,this.y,120,120);
    // image(this.img,this.x,this.y,120,120);
  }
    }
