
//namespacing
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//making global variables
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var score=0;

var gameState = "onSling";
var bg = "sprites/bg.png";


function preload() {
    //calling the function
    getBackgroundImg();
}

function setup(){
    //making canvas
    var canvas = createCanvas(1200,400);
    //creating engine and world
    engine = Engine.create();
    world = engine.world;

    //creating objects from different classes
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    //using background when only background image is looaded
    if(backgroundImg)
    background(backgroundImg);

    //making the score
    textSize(35);
    fill("white");
    noStroke();
    textFont("Georgia");
    text("Score="+score,width-300,50);


    Engine.update(engine);
    //strokeWeight(4);
    //displaying everything
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();
    
    

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
   
}

function mouseDragged(){
    //if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}

//getting the bird to fly
function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}
//getting the bird to tp back to the slingshot when space is pressed
function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
    
    slingshot.attach(bird.body);
    bird.trajectory=[];
    Matter.Body.setPosition(bird.body,{x:200,y:50});
    }
}

//async to onvert it into an asynchronous function
//await to wait till values are fetched
async function getBackgroundImg(){
    //using using API to make it day or night
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "sprites/bg.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}





