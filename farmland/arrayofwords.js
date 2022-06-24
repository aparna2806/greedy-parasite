let listWords = ["rainbow", "heart", "purple", "friendship","mdef", "cute"];
let words = [];

function preload(){
 chickendata = loadJSON('spritechicken.json');
 chickensheet = loadImage('images/chicken.png');
}


function setup(){
  createCanvas(windowWidth,windowHeight);
  for(let i=0; i<listWords.length; i++){
    let ypos= 50 + 50 * i;
    console.log(i);
    words[i] = new WordRender(listWords[i], 50, ypos);
  }
  // words[i] = new Rainbow(listWords[i], 50, ypos);
}

function draw(){
background('#0B32E4');
  for(let i=0;i<listWords.length;i++){
    words[i].isDetected();
    words[i].displayWords();
    words[i].updateGraphics();
    words[i].renderGraphics();
  }
}
