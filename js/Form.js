class Form{
  constructor(){
  this.input  =createInput("hello type your name");
  this.button = createButton('play');
  this.greeting = createElement('h3');
  }
  hide(){
    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }
  display(){
     var title = createElement ('h2');
     title.html("car racing game");
     title.position(130,0);
     this.input.position(130,160);
     this.button.position (200,200);
     
     this.button.mousePressed(function(){
         this.input.hide();
         this.button.hide();
         player.name = this.input.value();
         playerCount ++;
         player.index = playerCount
         player.update();
         player.updateCount(playerCount);
         this.greeting.html("hello"+name);
         this.greeting.position(130,160);
         

     })

  }
}