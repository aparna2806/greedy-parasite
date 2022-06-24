// let listWords = ["Parasitic Deniers", "Kin Un-enthusiastics", "Fossil Freeloaders", "Multi-species Heartbreaker", "Global Debt Escapists", "Self Honoured Kings", "Tradegist of Commons", "Catalyiser for Accidental Lives", "Far-Reaching Parasites"];
let words=[];
let font1;
let chickensheet;
let simp;

let one, two, three, four, fife, six, seven, eight;

// let vid;
// let video;

function preload(){
 chickensheet = loadImage('images/chicken.png');
 font1 = loadFont('pixel2/pixel.ttf');
 simp= loadImage('images/004.png');


 one= loadImage('images/p7.png');
 two= loadImage('images/p8.png');
 three= loadImage('images/p6.png');
 four= loadImage('images/p9.png');
 five= loadImage('images/p12.png');
 six= loadImage('images/p11.png');
 seven= loadImage('images/p10.png');
 eight= loadImage('images/p3.png');

 // video=createVideo("images/vid.mp4");
}


function setup(){
  createCanvas(windowWidth,windowHeight);
    words[0] = new ZeroWord('Parasitic Deniers', 40, 120);
    words[1] = new FirstWord('Kin Un-enthusiastics', 40, 190);
    words[2] = new SecondWord('Fossil Freeloaders', 40, 260);
    words[3] = new ThirdWord('Self Honoured Kings', 40, 330);
    words[4] = new FourthWord('Global Debt Escapists', 40, 400);
    words[5] = new FifthWord('Multispecies Heartbreaker', 40, 470);
    words[6] = new SixthWord('Catalyiser for Accidental Lives', 40, 540);
    words[7] = new SeventhWord('Far-Reaching Parasites', 40, 610);
  }

function draw(){
  background('#0B32E4');

for (let i=0; i<words.length;i++){
   words[i].isDetected();
   words[i].displayWord();
   words[i].renderGraphics();
 }
  // word1.isDetected();
  // word1.displayWord();
  // word1.renderGraphics();
  //
  // word2.isDetected();
  // word2.displayWord();
  // word2.renderGraphics();

}
