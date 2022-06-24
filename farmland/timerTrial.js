let time;
let homepage=false;
let mousemove;
let timelimit = 2000;
// 180000; //(3mins)

function setup(){
  createCanvas(windowWidth,windowHeight);
  time =setTimeout(homePage, timelimit);
  // time2=setTimeout(homePage, 3000);
}

function homePage(){
homepage=true;
console.log("on diff page");
}

function mouseMoved(){
  clearTimeout(time);
  console.log("mouse moved");
  time=setTimeout(homePage,timelimit);
  // console.log("mouse not moved");
}

function draw(){
  background(0);

  if (homepage){
   background(255,0,0);

  }

}
