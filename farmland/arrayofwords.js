let words = ["rainbow", "heart", "purple", "friendship","mdef", "cute"];

let changeBlue = false;
let ypos;

function setup(){
 createCanvas(windowWidth,windowHeight);
 background('yellow');
}

 function mouseHover(){
  if(mouseX > 50 && mouseX < 180 &&
    mouseY > 30 && mouseY < 80) {
      changeBlue=true;
    }
    else{
      changeBlue=false;
    }
  }
  // x+=i;
  // y+=i;


function draw(){
console.log(mouseX, mouseY);
 mouseHover();

 if(changeBlue){
   fill(0,0,255);
   ellipse(250,250,30,30);
  }
 else{
   background(0,255,0);
  }

 fill(0);
 textSize(32);

 for (let i=0; i< words.length; i++){
    ypos= 80 + 70 * i;
   text(words[i], 60, ypos);
  }
}
