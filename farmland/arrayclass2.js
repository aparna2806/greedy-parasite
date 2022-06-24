class WordRender{

  constructor(word,x,y){
    this.detect=false;
    this.word=word;
    this.x=x;
    this.y=y;
    this.g=createGraphics(1100,750);
    this.worm=worm;
    this.showText=false;
    this.showImg=false;
    this.vid= createVideo("images/vid.mp4");

  }

  isDetected(){
    if(mouseX > this.x && mouseX < this.x+450 &
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
      stroke('#ff009b');
      fill('#ff009b');
    }
    textFont(font1);
    textSize(52);
    text(this.word,this.x,this.y);
  }

  startUp(){
    setTimeout(this.textDis.bind(this),2000);
    setTimeout(this.textHide.bind(this),4000);
    setTimeout(this.imgDis.bind(this),2000);
    setTimeout(this.imgHide.bind(this),8000);
    setTimeout(this.vidDis.bind(this),5000);
    setTimeout(this.vidHide.bind(this),12000);
  }
  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');
      this.g.ellipse(250,250,70,70);
    }

    if(this.showText){
      this.g.textFont(font1);
      this.g.textSize(38);
      this.g.fill('white');

      this.g.text('A world full of hosts\nTapeworms inside humans\nHumans inside earth\nRooted in relations,\nHow did the individualist logic evolve?\nTrading the commons\nfor transactions,\nAccounting for time\nin dollars',420,180,900,430);
    }

    if(this.showImg){
      this.g.image(this.worm,55,190,360,310);
    }

    if (this.showVid){
      console.log("video");
      this.video = this.vid.get();
      this.g.image(this.video, 10, 10);
    }

    else {
      this.g.fill('black');
    }

    image(this.g,760,210);

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

  vidDis(){
    this.vid.size(200, 200);
    this.vid.volume(0);
    this.vid.loop();
    this.vid.hide();
    this.showVid=true;
    console.log("function called");
  }
  vidHide(){
    this.showVid=false;
  }
}
