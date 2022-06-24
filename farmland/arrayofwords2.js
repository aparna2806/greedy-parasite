let listWords = ["Parasitic Deniers", "Kin Un-enthusiastics", "Fossil Freeloaders", "Multi-species Heartbreaker", "Global Debt Escapists", "Self Honoured Kings", "Tradegist of Commons", "Catalyiser for Accidental Lives", "Far-Reaching Parasites"];
let words = [];
let font1;
let chickensheet;
let simp;
let vid;
let video;
let worm;

function preload(){
 chickensheet = loadImage('images/chicken.png');
 font1 = loadFont('pixel2/pixel.ttf');
 simp= loadImage('images/simp.png');
 apple = loadImage('images/002.png');
 worm =loadImage('images/k3.png');
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i=0; i<listWords.length; i++){
    let ypos= 240 + 90 * i;
    console.log(i);
    words[i] = new WordRender(listWords[i], 40, ypos);
  }
}

function draw(){
  background('#0B32E4');
  for(let i=0;i<listWords.length;i++){
    words[i].isDetected();
    words[i].displayWord();
    words[i].renderGraphics();

  }

}
