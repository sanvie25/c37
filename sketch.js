var gameState = 0, playerCount=0,form,player,game;
var database,position;
var allplayers;

function setup(){
    database = firebase.database(); 
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
if(playerCount === 4){
    game.update(1);
}
if (gameState === 1){
    clear();
    game.play();

}
}







































































































































































































































































































































































































































































































































































































































































































































































































































