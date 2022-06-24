
class WordRender{
  constructor(word,x,y){
    this.word=word;
    this.x=x;
    this.y=y;
    this.g=createGraphics(800,500);
    this.detect=false;
    this.showText=false;
    this.showImg=false;
    // this.vid= vid;
    // this.video=video;
  }

  isDetected(){
    if(mouseX > this.x && mouseX < this.x+600 &&
      mouseY < this.y && mouseY > this.y-25) {
      if (this.detect==false){
        this.startUp();
      }
      this.detect=true;

      }
      else{
      this.detect=false;
    }
  }

  displayWord(){
    if(this.detect){
      fill('white');
    }
    else{
      fill('#60d394');
    }
    textFont(font1);
    textSize(52);
    text(this.word,this.x,this.y);
  }

  startUp(){
    setTimeout(this.textDis.bind(this),2);
    setTimeout(this.imgDis.bind(this),2);
    setTimeout(this.textHide.bind(this),38000);
    setTimeout(this.imgHide.bind(this),38000);
    // setTimeout(this.vidDis.bind(this),5000);
    // setTimeout(this.vidHide.bind(this),12000);
  }

  textDis(){
    this.showText=true;
    console.log("text!");
  }

  textHide(){
    this.showText=false;
    console.log("hide!");
  }

  imgDis(){
    this.showImg=true;

  }

  imgHide(){
    this.showImg=false;
  }
}
