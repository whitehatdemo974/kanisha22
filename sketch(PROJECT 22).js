const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var fairy, fairyImg;
var star, starImg;
var bgImg;

function preload()
{
   //preload the images here
   fairyImg=loadImage("images/fairy.png");
   starImg=loadImage("images/star.png");
   bgImg=loadImage("images/starnight.png");
}

function setup() {
  var canvas=createCanvas(800, 750);
  engine=Engine.create();
  world=engine.world;
  fairy=createSprite(100,500,50,50);
  fairy.addImage(fairyImg);
  fairy.scale=0.2;
  star=createSprite(700,50,20,20);
  star.addImage(starImg);
  star.scale=0.2;
}


function draw() {
  background(bgImg);
drawSprites();
}
