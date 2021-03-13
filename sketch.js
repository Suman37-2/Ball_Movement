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
writePosition(0,-2);
}

if(keyDown("down")){
writePosition(0,2);    
}

if(keyDown("left")){
writePosition(-2,0);    
}

if(keyDown("right")){
writePosition(2,0);    
}

drawSprites();    
}

function readPosition(data){
position=data.val();
ball.x=position.x;
ball.y=position.y;    
}

function writePosition(x,y){
database.ref('ball/position').set({
x : position.x+x,
y : position.y+y

})
}

function showError(){
console.log("error");    
}

