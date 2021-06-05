
var database;
var gameState, playerCount;
var player1, player2
var players = []

function setup (){
    database = firebase.database();
    game = new Game()
    game.getState()
    game.start()
}

function draw (){
    if(playerCount === 2){
        game.update(1)
   }
   if (gameState === 1){
        clear()
        game.play()
   }

}  