var ball,database,position;

function setup(){
createCanvas(500,500);
database=firebase.database();

ball=createSprite(250,250,30,30);
ball.shapeColor="red";

var ballposition=database.ref('ball/position');
ballposition.on("value",readPosition,showError);

}

function draw(){
background("lightgreen");

if(keyDown("up")){    
poschange(0,-2);
}

if(keyDown("down")){
poschange(0,2);    
}

if(keyDown("left")){
poschange(-2,0);    
}

if(keyDown("right")){
poschange(2,0);    
}

drawSprites();    
}

function readPosition(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;    
}
function poschange(x,y){
ball.x=ball.x+x;
ball.y=ball.y+y;
}