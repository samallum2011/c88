var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_width=30;
block_height=30;
block_object="";
player_object="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
    player_object=Img;
    player_object.scaleToWidth(140);

    player_object.scaleToHeight(140);
player_object.set({
top:player_y,
left:player_x
});
canvas.add(player_object);
});

}
function block_update(getimg){
    fabric.Image.fromURL(getimg,function(Img){
        block_object=Img;
        block_object.scaleToWidth(block_width);
    
        block_object.scaleToHeight(block_height);
    block_object.set({
    top:player_y,
    left:player_x
    });
    canvas.add(block_object);
    });
    }
    window.addEventListener("keydown",my_keydown);
    function my_keydown(e){
        keypressed=e.keyCode;
    if(e.shiftKey==true&&keypressed=="80"){
    block_width=block_width+10; 
     block_height=block_height+10;
     document.getElementById("current_width").innerHTML=block_width;
     document.getElementById("current_height").innerHTML=block_height;
    }
    if(e.shiftKey==true&&keypressed=="77"){
        block_width=block_width-10; 
         block_height=block_height-10;
         document.getElementById("current_width").innerHTML=block_width;
         document.getElementById("current_height").innerHTML=block_height;
        }
     if(keypressed=="38"){
     console.log("up key is pressed");
     up();
     }
     if(keypressed=="39"){
        console.log("right key is pressed");
        right();
        }
        if(keypressed=="37"){
            console.log("left key is pressed");
          left();
            }
            if(keypressed=="40"){
                console.log("down key is pressed");
                down();
     }   
     if(keypressed=="87"){
        console.log("w key is pressed");
    block_update("wall.jpg");        
        }
        if(keypressed=="82"){
            console.log("r key is pressed");
        block_update("roof.jpg");        
            }
             if(keypressed=="84"){
                console.log("t key is pressed");
            block_update("trunk.jpg");        
                }
                if(keypressed=="67"){
                    console.log("c key is pressed");
                block_update("cloud.jpg");        
                    }

 if(keypressed=="68"){
        console.log("d key is pressed");
    block_update("dark_green.png");        
        }
        if(keypressed=="71"){
            console.log("g key is pressed");
        block_update("ground.png");        
            }
            if(keypressed=="76"){
                console.log("l key is pressed");
            block_update("light_green.png");        
                }
                if(keypressed=="85"){
                    console.log(" u key is pressed");
                block_update("unique.png");        
                    }
                    if(keypressed=="89"){
                        console.log("y key is pressed");
                    block_update("yellow_wall.png");        
                        }
    }
    function up(){
        if(player_y>=0){
            player_y=player_y-block_height;
            canvas.remove(player_object);
            player_update();
        }


    }
    function down(){
        if(player_y<=500){
        player_y=player_y+block_height;
        canvas.remove(player_object);
        player_update();
        }
          }
        
          function left(){
            if(player_x>=0){
            player_x=player_x-block_width;
            canvas.remove(player_object);
            player_update();
            }
              }function right(){
                if(player_x<=900){
                player_x=player_x+block_width;
                canvas.remove(player_object);
                player_update();
                }
                  }

