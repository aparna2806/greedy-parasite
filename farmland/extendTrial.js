circles=[];
let col;
let img;

function preload(){
  img=loadImage("images/1.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);

}

function mousePressed(){
  if (mouseX<width/2){
    circles.push(new aCircle(50,50,150,'blue'));
  }

 else {
   circles.push( new bCircle);
  }

}


function draw(){
  background(0);
  for(let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].display();
  }
}


class aCircle{
  constructor(x = 50, y = 50, r = 70, col= 'green'){
    this.x = x;
    this.y = y;
    this.r = r;
    this.col = col;

  }
  move(){
    this.x += random(0,1);
    this.y += random(0,1);

  }
  display(){
    fill(this.col);
    ellipse(this.x,this.y,this.r);
  }
}


class bCircle extends aCircle{
  constructor(x = 190, y = 190, r = 90, col = 'white') {
    super(x, y, r, col);
      this.img=img;
      this.w=50
      this.h=70;
  }

  display(){
    fill(this.col);
    image(img,this.x,this.y,this.w,this.h);
  }

}
