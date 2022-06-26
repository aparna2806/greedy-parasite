let circles=[];
let img=[];
let refresh=false;
let font1;

let time;
let homepage=false;
let mousemove;
let timelimit = 800000;

let introElements=false;


let theme = "'Epoch of the Greedy Parasite' is a desktop collection of poetry, strange dreams, and broken thoughts. \n\nTorn between the phenomenon of feeding on and feeding off, a parasitic relationship is formed among the ecological systems.\n\nThis artwork is exploring our relationship with the planet, just like fleas’ relationship with us-  strategic and slow destruction."
let themey = 600;

let nextPage=false;


let words=[];
let one, two, three, four, fife, six, seven, eight;

function preload(){
  font1 = loadFont('pixel2/pixel.ttf');
  //images for cover page
  img[0]=loadImage('images/002.png');
  img[1]=loadImage('images/003.png');
  img[2]=loadImage('images/004.png');
  img[3]=loadImage('images/005.png');
  img[4]=loadImage('images/006.png');

  //timetick
  time =setTimeout(homePage, timelimit);
  setTimeout(introPage, 2000);
  // setTimeout(wordPage, 19000);

  one= loadImage('images/p7.png');
  two= loadImage('images/p8.png');
  three= loadImage('images/p6.png');
  four= loadImage('images/p9.png');
  five= loadImage('images/p12.png');
  six= loadImage('images/p11.png');
  seven= loadImage('images/p10.png');
  eight= loadImage('images/p3.png');

  // soundFormats('wav');


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

  // song=loadSound("forest1.mp3",loaded);

  words[0] = new ZeroWord('Parasitic Deniers', 40, 120);
  words[1] = new FirstWord('Kin Un-enthusiastics', 40, 190);
  words[2] = new SecondWord('Fossil Freeloaders', 40, 260);
  words[3] = new ThirdWord('Self Honoured Kings', 40, 330);
  words[4] = new FourthWord('Global Debt Escapists', 40, 400);
  words[5] = new FifthWord('Multispecies Heartbreaker', 40, 470);
  words[6] = new SixthWord('Catalyiser for Accidental Lives', 40, 540);
  words[7] = new SeventhWord('Far-Reaching Parasites', 40, 610);
  words[8] = new EightWord ("??What's This About??", 40, 700);
}

//
function loaded(){
  song.play();
}

function reCircles(){
  refresh=true;
}

function homePage(){
  homepage=true;
  console.log("on diff page");
}

function mouseMoved(){
  clearTimeout(time);
  console.log("mouse moved");
  time=setTimeout(homePage,timelimit);
}
//secondpage
function introPage(){
  introElements=true;
}

//thirdspage
function wordPage(){
  nextPage=true;
}



function draw() {
    background('#ff009b');
    // background('#f72585'); red
    // background('#ff69eb');
    for (var b = 0; b < circles.length; b++) {
    circles[b].show();
    textFont(font1);
    textSize(190);
    fill('white');
    // text('EPOCH OF THE',550,540);
    text('EPOCH OF THE',310,400);
    textSize(200);
    // text('GREEDY PARASITE',370,690);
    text('GREEDY PARASITE',135,580);
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



  if (introElements){
    background('#0B32E4');
    // background('#4361ee');
    fill('white');
    textSize(105);
    text('>',1250,800);
    //mouseclicked
    if (mouseX>1250 && mouseX<1600 && mouseY<800 && mouseY>650) {
      fill('black');
      textSize(105);
      text('>',1250,800);
      nextPage=true;
    }

    textSize(60);
    textFont(font1);
    fill('pink');
    text('<WELCOME>',420,themey-15);
    textSize(55);
    text(':)',650,themey-15);
    noFill();
    textSize(43);
    fill('eff7f6');
    text(theme, 420, themey+15,720,930);
    themey = themey - 8;

    if (themey < -2) {
      themey = height;
    }
  }


  if (nextPage){
    background('#0B32E4');
    for (let i=0; i<words.length;i++){
      words[i].isDetected();
      words[i].displayWord();
      words[i].renderGraphics();
    }
  }

  if (homepage){
        background('#ff009b');
      for (var b = 0; b < circles.length; b++) {
      circles[b].show();
      textFont(font1);
      textSize(180);
      fill('white');
      text('EPOCH OF THE',300,400);
      textSize(200);
      text('GREEDY PARASITE',125,580);

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
