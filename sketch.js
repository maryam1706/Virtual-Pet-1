//Create variables here
var dog , happyDog;
var database;
var foodS , foodStock;
var Food;

function preload(){
  //load images here
  dogImg = loadImage("images/dogImg.png");
  dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(300,300,10,10);
  dog.scale = 0.1;
  dog.addImage(dogImg);
  
  database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  //add styles here
  fill("white");
  stroke("white"); 
  textSize(11);
  text("Note: Press UP_ARROW Key To Feed Drago Milk!",20,20);
  
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}




