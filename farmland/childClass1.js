class EightWord extends WordRender{
  constructor(word,x,y){
  super(word,x,y)
  }

  displayWord(){
    if(this.detect){
      fill('#ff009b');
    }
    else{
      fill('white');
    }
    textFont(font1);
    textSize(35);
    text(this.word,this.x,this.y);
  }

  renderGraphics(){
  if(this.detect){
    this.g.noFill();
    this.g.background('#ff009b');

    if(this.showText){
      this.g.textFont(font1);
      this.g.textSize(29);
      this.g.fill('white');

      this.g.text('The above words are an attempt to get out of our individual heads and look at us humans collectively as a species. The project comes from a desperate need to answer the question:how are we doing as a species? in a world full of ecological dependent relationships. I went on to give adjectives to us as parasitical creatures as our relationship to the planet is the same as a leech has to us. These adjectives emerge from multi disciplines - from biology to philosophy to theology. I always wanted to know what would people from different disciplines and their expertise think of us as species. It’s this effort to create such a space.',50,50,600,400);


//       fill(255,0,0);
// text("I want ",50,50);
// fill(0,255,0);
// text("THIS",50 + widthOfFirstPart,50)
// fill(255,0,0);
// text("to be in green.",50 + widthOfSecondPart,50);
    }

    else {
      this.g.fill('black');
    }

      image(this.g,750,90);
  }
}


}
class SeventhWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.eight=eight;
  }

  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('Open loud cry\nTo find others\nSending golden disks\nOut in the open\nLooking for others\nTrying to know the answers\nA very curious parasite\nWith a goal to unite\nOr to lead\nWe might never know',50,90,600,400);
      }

      if(this.showImg){
        this.g.image(this.eight,370,140,290,280);
      }

      else {
        this.g.fill('black');
      }

      image(this.g,750,90);

    }
  }
}


class SixthWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.seven=seven;
  }

  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('While humans fit into\nindustrial, urban and\nhyper-individual systems\nbuilt under capitalism,\nThe terraformed planet\npaved into a blessing for a few.\nCyanobacteria thrive\nin anthropogenic land,\ncephalopods grow \nin the warm sea,\narchaea bacteria triple \nin the piss acidic paris lanes',50,60,600,400);
      }

      if(this.showImg){
        this.g.image(this.seven,330,210,340,270);
      }

      else {
        this.g.fill('black');
      }

      image(this.g,750,90);

    }
  }
}


class FifthWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.six=six;
  }

  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('Stomachs of seagulls full of\njet fuel and plastic bags,\ntrails of benzene and mercury\nowning up for the deaths to come,\naffair with the wintry bushes\nneeds a reschedule,\nas the birds arrive not having checked\nWith the new clocks',50,90,600,400);
      }

      if(this.showImg){
        this.g.image(this.six,390,110,390,310);
      }

      else {
        this.g.fill('black');
      }

      image(this.g,750,90);

    }
  }
}

class FourthWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.five=five;
  }

  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('Wealth as in energy and\necological services,\nOur life mounted\nWith costly nutrients,\nDemanding more from what is common.\nOur pricey life\ndetrimental to others,\nIt’s a debt which demands repayment,\nBut we don’t know what’s even left',50,90,600,400);
      }

      if(this.showImg){
        this.g.image(this.five,330,65,440,420);
      }

      else {
        this.g.fill('black');
      }

      image(this.g,750,90);

    }
  }
}


class ThirdWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.four=four;
  }

  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('Breaking into biological castes,\nFeeding the superiority complex\nshelving up ourselves\nat the top of the food chain\nWeren’t the\nweb of rebirths,\nOr tree of life\nReminding that we are all related\nEven if distant\nIsn’t that enough to deflate us?',50,90,600,400);
      }

      if(this.showImg){
        this.g.image(this.four,420,140,310,280);
      }

      else {
        this.g.fill('black');
      }

      image(this.g,750,90);

    }
  }
}

class SecondWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.three=three;
  }

  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('Fossil-making man\nMade a world out of oil and coal\nTraded the fields\nTraded the seas\nTraded its own men\nNow, looking for a refresh button\nOh no, how techno blind',50,90,600,400);
      }

      if(this.showImg){
        this.g.image(this.three,470,140,350,320);
      }

      else {
        this.g.fill('black');
      }

      image(this.g,750,90);

    }
  }
}


class FirstWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.two=two;
  }

  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('A world full of hosts\nTapeworms inside humans\nHumans inside earth\nRooted in relations,\nHow did the individualist logic evolve?\nTrading the commons\nwith transactions,\nAccounting for time\nin dollars',50,90,600,400);
      }

      if(this.showImg){
        this.g.image(this.two,450,140,340,280);
      }

      else {
        this.g.fill('black');
      }

      image(this.g,750,90);

    }
  }
}



class ZeroWord extends WordRender{
  constructor(word,x,y){
      super(word,x,y)
      this.one=one;

    // this.vid= vid;
    // this.video=video;
  }
  // startUp(){
  //   setTimeout(this.textDis.bind(this),2000);
  //   setTimeout(this.textHide.bind(this),4000);
  //   setTimeout(this.imgDis.bind(this),4000);
  //   setTimeout(this.imgHide.bind(this),8000);
  //   // setTimeout(this.vidDis.bind(this),5000);
  //   // setTimeout(this.vidHide.bind(this),12000);
  // }

  // isDetected(){
  //   if(mouseX > this.x && mouseX < this.x+450 &&
  //     mouseY < this.y && mouseY > this.y-25) {
  //     if (this.detect==false){
  //         this.startUp();
  //       }
  //       this.detect=true;
  //
  //     }
  //       else{
  //       this.detect=false;
  //   }
  // }
  renderGraphics(){
    if(this.detect){
      this.g.noFill();
      this.g.background('#ff009b');

      if(this.showText){
        this.g.textFont(font1);
        this.g.textSize(29);
        this.g.fill('white');

        this.g.text('Ticks tock,\nFleas flick.\nLeeches suck,\nHumans extract.\nIn a loop of parasitic circles\nSome call it mutualism\nanother name of togetherness\nSome call it  strategic traps\nanother of extractivism\nBut what’s there to deny?\nWe are all branched from the same cell.',50,60,600,400);
        print("text writing");
      }

      if(this.showImg){
        this.g.image(this.one,350,90,410,280);
      }

      // if (this.showVid){
      //   console.log("video");
      //   this.vid = this.video.get();
      //   this.g.image(this.vid, 10, 10,100,100);
      // }

      else {
        this.g.fill('black');
      }
      image(this.g,750,90);

    }
  }
}

// textDis(){
  //   this.showText=true;
  //   console.log("text!");
  // }
  //
  // textHide(){
  //   this.showText=false;
  //   console.log("hide!");
  // }
  //
  // imgDis(){
  //   this.showImg=true;
  //
  // }
  //
  // imgHide(){
  //   this.showImg=false;
  // }

  // vidDis(){
  //   this.video.size(200, 200);
  //   this.video.volume(0);
  //   this.video.loop();
  //   this.video.hide();
  //   this.showVid=true;
  //   console.log("function called");
  //
  // }
  // vidHide(){
  //   this.showVid=false;
  // }
