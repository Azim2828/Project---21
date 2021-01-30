var canvas;
var music;

var box1 , box2 ,box3 , box4
var player

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    player = createSprite(random(20,750),100,40,40)
    player.shapeColor = "white"
    player.velocityX = 3
    player.velocityY = 5
    

    box1 = createSprite(100,570,170,25)
    box1.shapeColor = "yellow"
    box2 = createSprite(300,570,170,25)
    box2.shapeColor = "red"
    box3 = createSprite(500,570,170,25)
    box3.shapeColor = "blue"
    box4 = createSprite(700,570,170,25)
    box4.shapeColor = "green"

    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    var edges = createEdgeSprites()
    player.bounceOff(edges)



    //add condition to check if box touching surface and make it box

    if(player.isTouching(box1))
    {
        player.shapeColor = "yellow"

    }

    if(player.isTouching(box2))
    {
        player.shapeColor = "red"
        
    }

    if(player.isTouching(box3))
    {
        player.shapeColor = "blue"
        
    }

    if(player.isTouching(box4))
    {
        player.shapeColor = "green"
        
    }
    player.bounceOff(box1)
    player.bounceOff(box2)    
    player.bounceOff(box3)
    player.bounceOff(box4)
    drawSprites();
}
