const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drops=[]

function preload(){
    boyImg1=loadImage("images/Walking Frame/walking_1.png")
    boyImg2=loadImage("images/Walking Frame/walking_2.png")
    boyImg3=loadImage("images/Walking Frame/walking_3.png")
    boyImg4=loadImage("images/Walking Frame/walking_4.png")
    boyImg5=loadImage("images/Walking Frame/walking_5.png")
    boyImg6=loadImage("images/Walking Frame/walking_6.png")
    boyImg7=loadImage("images/Walking Frame/walking_7.png")
    boyImg8=loadImage("images/Walking Frame/walking_8.png")
}

function setup(){
    createCanvas(800,800);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    umbrella = new Umbrella(200,500)
}

function draw(){
    background("black")
    umbrella.display()
    if(frameCount%3===0){
        drops.push(new Drops(random(0,800),0))
    }
    for (let index = 0; index < drops.length; index++) {
        drops[index].display()
    }
}   
    // display()
    //     boyImg1.display()
    //     boyImg2.display()
    //     boyImg3.display()
    //     boyImg4.display()
    //     boyImg5.display()
    //     boyImg6.display()
    //     boyImg7.display()
    //     boyImg8.display()
    //     Umbrella.display()
    // push()
    //     var maxDrops=100;
    //     for(var i=0; i<maxDrops; i++){
    //         drops.push(new createDrops(random(0,400)))
    //     }
    

