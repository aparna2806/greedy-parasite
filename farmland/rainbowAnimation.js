class Rainbow extends WordRender {

  constructor(word,x,y){
    super(word,x,y);
  }

  preload(){
  // chickendata = loadJSON('spritechicken.json');
    this.chicken = loadImage('images/chicken.png');
  }

  updateGraphics(){
    this.g.image(this.chicken,20,20);
  }

}
