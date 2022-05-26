class ImageClass{
  constructor (x,y,width,height){
    this.x = x;
    this.y = y;
    this.w = width;
    this.h = height;
    // this.speed = speed;
  }

  show(){

   image([frog, owl, snake][int(random(3))],this.x, this.y, this.w, this.h);
  }
}
