class Game {
            constructor(){




            }
            getState(){
                var gameStateRef=database.ref ('gameState');
                gameStateRef.on("value",function(data){
                                gameState=data.val();
                })
            }
            update(state){
                database.ref('/').update({
                    gameState:state
                })
            }
            async start(){ 
                if(gameState === 0){
                     player = new Player(); 
                     var playerCountRef = await database.ref('playerCount').once("value");
                     if(playerCountRef.exists())
                      {
                        playerCount = playerCountRef.val();
                         player.getCount();
                     }
                        Form1 = new Form()
                        Form1.display();
                     } 
                     
                     car1=createSprite(100,200);
                     car1.addImage("c1",car1Image);

                     car2=createSprite(300,200);
                     car2.addImage("c2",car2Image) ;

                     car3=createSprite(500,200);
                     car3.addImage("c3",car3Image);

                     car4=createSprite(700,200);
                     car4.addImage("c4",car4Image);

                     cars=[car1,car2,car3,car4];

                    }

            play(){
                Form1.hide();
                 Player.getPlayerInfo()
                 player.getCarsAtEnd();

                if(allPlayers!=undefined){
                    background(rgb(198,135,103));
                            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
                            //index of the array
                            var index=0;

                            //x and y position of the car
                            var x=175;
                            var y;

                            for(var plr in allPlayers){
                                // add 1 to the index for the every loop
                                index=index+1
                                // position of the car are little away from the each other in the x direction
                                x=x+200;
                                //using data from the database to display cars in y direction
                                y=displayHeight-allPlayers[plr].distance 
                                cars[index-1].x=x;
                                cars[index-1].y=y;

                                if(index===player.index){
                                                stroke (10);
                                                fill ("red");
                                                ellipse(x,y,68,60);
                                                cars[index-1].shapeColor="red";
                                                camera.position.x=displayWidth/2;
                                                camera.position.y=cars[index-1].y;

                                }
                            }


                }
            
            if(keyIsDown(UP_ARROW) && player.index !== null){ 
                player.distance +=50;
                 player.update();


            }

            /* if(keyIsDown(DOWN_ARROW) && player.index !== null){
                player.distance -=50;
                player.update();
            } */

            if(player.distance>3860){
                gameState=2;
                player.rank+=1;
                Player.updateCarsAtEnd(player.rank);
                
            }
            
            
            drawSprites()
        }
       
            end(){
                console.log("game is over");
                console.log(player.rank);
                //game.update(2);
            }
    }
