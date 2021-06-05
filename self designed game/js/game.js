class Game{
    constructor(){}

    getState(){
        var gameStateref = database.ref('gamestate')
        gameStateref.on("value", function(data){
         gameState = data.val()
        })
        console.log(gameState)
    }

    update(state){
        var gameStateref = database.ref('/')
        gameStateref.update({
            gamestate:state
        })
    }
    //async function
    async start(){
        if(gameState === 0){            
            player = new Player()
            //player.getCount()
            var countRef = await database.ref('playercount').once("value")
            if(countRef.exists()){
                playerCount = countRef.val()
                player.getCount();
            }
            form = new Form()
            form.display()
            basket1 = createSprite(200,displayHeight-150);
            basket1.addImage(basketImg)
            basket2 = createSprite(800,displayHeight-150);
            basket2.addImage(basketImg)
            baskets = [basket1, basket2]
            //console.log(cars)
            
        }
    }

    play(){
        form.hideElements();
        //background(jungleImg)   
        Player.getPlayerInfo()
        var index = 0; //player.index, 1 car1 cars[0], 2 car2 cars[1]
        var x=200,y;
        drawSprites()
        for(var plr in allPlayers ){
            console.log(allPlayers[plr])
            index = index + 1
            y = displayHeight-150
           
            
            baskets[index-1].x = x + allPlayers[plr].distance 
            baskets[index-1].y = y

            push()
            fill("black")
            text(allPlayers[plr].name, baskets[index-1].x, baskets[index-1].y - 50)
            pop()
            //console.log(player.index, index)
            if(player.index === index){             
                fill("red")
             
            }
            console.log(baskets[index-1].x, x, allPlayers[plr].distance)
            x = x + 600
       
        }
        if(keyDown(RIGHT_ARROW)){
            player.distance = player.distance + 10  
        }
        if(keyDown(LEFT_ARROW)){
            player.distance = player.distance - 10      
        }

        player.update()

// 15 frames delay,  math.random(1,5)
     if(frameCount % 30 === 0 ){
        var fruits = createSprite(random(100,1000), 30)
        fruits.velocityY = 2
        var rand = Math.round(random(1,5))
        switch(rand){
            case 1: fruits.addImage("fruits",appleImg)
            break;

            case 2: fruits.addImage("fruits",bananaImg)
            break;

            case 3: fruits.addImage("fruits",melonImg)
            break;

            case 4: fruits.addImage("fruits",pineappleImg)
            break;

            case 5: fruits.addImage("fruits",orangeImg)
            break;
        }
     }
        
   
    
    }

   


}