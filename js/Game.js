class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");

      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form();
      form.display();
    }

    bike1 = createSprite(100,200);
   
    
    bike2 = createSprite(300,200);
    

    bike = [bike1, bike2];
  }

  play(){
    form.hide();

    Player.getPlayerInfo(); 
    

    
    if(allPlayers !== undefined){
      
      image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);

      var index = 0;

      //x and y position of the cars
      var x = 50;
      var y;

      for(var plr in allPlayers){
        
        index = index + 1 ;

        x = x + 400;
        
        y = displayHeight - allPlayers[plr].distance;
        bike[index-1].x = x;
        bike[index-1].y = y;

        if (index === player.index){
          stroke("black");
          fill("cyan");
          ellipse(x,y,50,50);

         
         
        }
  
      }

    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10;
      player.update();
    }
    

    
    


    drawSprites();                                                                       
  }


  end(){
    console.log("Game Ended");
     
  }
}
