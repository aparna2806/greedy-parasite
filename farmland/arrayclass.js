class WordRender{

  constructor(word,x,y){
    this.detect=false;
    this.word=word;
    this.x=x;
    this.y=y;
    this.g=createGraphics(800,500);
  }
    preload(){

    }

    isDetected(){
      if(mouseX > this.x && mouseX < this.x+150 &&
        mouseY < this.y && mouseY > this.y-25) {
        this.detect=true;
      }
      else{
        this.detect=false;
      }
    }

  displayWords(){
    if(this.detect){
      fill(0,0,255);
    }
    else{
      fill(255,0,0);
    }
    textSize(32);
    text(this.word,this.x,this.y);
  }

  renderGraphics(){
    if(this.detect){
      fill(0);
      this.g.background(0,255,0);
      this.g.ellipse(250,250,30,30);
      image(this.g,300,50);
    }
  }

  updateGraphics(){

  }

}
