var canvas;

var gameState = 0;
var playerCount;
var allPlayers; //global variable to be used as an array to store all the players ki information
var distance = 0;
var database;

var form, player, game;

var bike ,bike1, bike2;

var track, bike1Img;



function preload(){
 bike1Img=loadImage("bike1.png");
 track = loadImage("track.jpg");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
    game.end();
  }
  
}
