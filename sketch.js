let rotValue;
let treeZ;
let treeY;
let treeX;
let moveUpDown;
let changeColor;
let frame;
let clockDay;
let clockHour;
let clockMinute;
let clockSec;
let roundPro;
let treeSpin;
let rotHalo;
let gif;

function preload() {
  gif = loadImage('data/GIFTS.gif');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(HSB, 255);
  rotValue = 0;
  treeZ = 0;
  treeY = 0;
  treeX = 0;
  moveUpDown = 0;
  changeColor = 0;
  frame = 0;
   treeSpin = false;
  rotHalo = 0;
  // cursor('cursor/5f7a8c859d8e4003ab7935f6a12929b9huQjlfKGzvAgmU0i-1.png');
  // noCursor();
   print("To control tree postion use WASD = (X and Y axis) and UP and DOWN ARROWS = (Z axis)");
    print("To refresh tree postion press SPACE");                             print("To spin the tree press T");           
}

// function clock() {
//   //вывод времени до нового года  в виде текста на экран

//   textSize(50);
//   //textAlign(CENTER, CENTER);
//   fill(255);

//   text(
//     "Countdown:" +
//       (31 - clockDay) +
//       " days " +
//       (23 - clockHour) +
//       " hours " +
//       (59 - clockMinute) +
//       " minutes",
//     0,
//     0
//   );
// }

function background_lights() {
  //голубые мигалки на заднем фоне
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 13; j++) {
      push();
      fill(150, 255, 250 - noise(i, frameCount / 14) * 200, 200); //изменение яркости каждые 14 фрамов
      
        translate(i * displayWidth/10, j * displayHeight/11,0); //размешение по карте
      

      quad(20, 10, 30, 0, 40, 10, 30, 20); //создание ромбов
      
      pop();
    }
  }
}

function tree_lights(D, sphereD, sphereNum) {
  //огоньки на елке

  for (let i = 0; i < sphereNum; i++) {
    // specularMaterial(map(i, 0, sphereNum, 255-changeColor, changeColor),255,255,230);
    ambientMaterial(
      map(i, 0, sphereNum, 255 - changeColor, changeColor),
      255,
      255
    );
    shininess(50);
    let xm, zm;
    // if (changeColor<255){
    fill(map(i, 0, sphereNum, 255 - changeColor, changeColor), 255, 255, 230); //}
    // if (changeColor>255){
    //   fill(map(i, 0, sphereNum, changeColor, 255-changeColor),255,255,255);}
    xm = 0 + (D / 2) * cos(2 * PI * (i / sphereNum)); //формула для расположения на окружнсоти
    zm = 0 + (D / 2) * sin(2 * PI * (i / sphereNum));
    sphere(sphereD);
    translate(xm, 2, zm); //расположение на окружнсоти
  }
}

function move_tree() {
  // не используется на данный момент
  if (keyIsDown(UP_ARROW)) {
    treeZ += 2;
  }
  if (keyIsDown(DOWN_ARROW)) {
    treeZ -= 2;
  }
  if (keyIsDown(87)) {
    treeY += 2;
  }
  if (keyIsDown(83)) {
    treeY -= 2;
  }
  if (keyIsDown(68)) {
    treeX += 2;
  }
  if (keyIsDown(65)) {
    treeX -= 2;
  }
  if (keyIsDown(32)) {
    treeX = 0;
    treeY = 0;
    treeZ = 0;
  }
}

function presents() {
  //подарки под елкой
  fill(245);
  box(60, 10, 60);
  box(10, 60, 60);
  fill(10, 255, 255, 255);
  box(50, 50, 50);
}
function keyPressed() {
  if (keyCode === 84) {
    treeSpin = !treeSpin;
  } 
}
function tree() {
  rotateX(0.1);
   // if (treeSpin == true){
   //   rotValue += 0.05;
   // } 
   // rotateY(rotValue);
  push();
  fill(30, 220, 150, 255);
  // translate(width/4,height/2,0)
  cone(50, 450, 6, 24); //ствол
  translate(0, -50, 0);
  
  fill(100, 255, 255, 255);
  cone(150, 200, 30, 10); //нижняя часть
  translate(0, 120, 0);
  cone(100, 200, 30, 10); //средняя часть
  translate(0, 100, 0);
  cone(70, 150, 30, 10); //верхняя часть

  push();
  translate(-30, -20, -34);
  tree_lights(130, 8, 4); //фонари на елке
  translate(-10, -150, -40);
  tree_lights(160, 9, 6);
  translate(-4, -140, -40);
  tree_lights(190, 10, 8);
  pop();

  fill(50, 255, 255, 230);
  push();
  translate(0, moveUpDown, 0); //движение сферы на елкой
  // specularMaterial(50,255,200,100);
  ambientMaterial(50, 255, 200);
  shininess(50);
  translate(0, 100, 0);
  sphere(20, 10, 2);
  pop();
  rotateY(rotHalo);
  push();
  // specularMaterial(50,255,200,100);
  ambientMaterial(50, 255, 200);
  shininess(50);
  translate(0, 40, 0);
  rotateX(1.6);
  torus(55, 7); //нимб елки
  pop();
}

function sign(){
    push();
  rotateX(-3);
  translate(-570,-30,-60);
  image(gif, 0, 0);
  pop();
  
   push();
  translate(-500,-260,120);
  ellipsoid(100,100,100);
  pop();
  
  push();
  translate(-400,-280,120);
  ellipsoid(100,100,100);
  pop();
    
  push();
  rotateX(0.1);
  translate(-430,-140,120);
  box(20,300,20);
  translate(0,100,0);
  box(300,150,50);
  pop();
}

function draw() {
  // clockDay = day();
  // clockHour = hour();
  // clockMinute = minute();
  // clockSec = millis();

  frame++;
  if (frame < 100) {
    moveUpDown += 0.1;
  } else {
    moveUpDown -= 0.1;
  }
  if (frame == 200) {
    frame = 0;
  }

  if (frameCount / 3) {
    changeColor += 2; //измение цвета огней на елке
  }
  if (changeColor > 255) {
    changeColor = 0;
    //flag = 0;
  }

  
  rotHalo+=0.04;
  move_tree();
  background(0);
 

//   lights();
  //lightFalloff(1, 1, 0);
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2; //свет следует за мышкой
 // lights(10);
  colorMode(RGB);
  ambientLight(200,200,255);
  directionalLight(150, 80, 250, -dirX, -dirY, -5);
  colorMode(HSB, 255);
  noStroke();
  
    push();
  translate(-displayWidth, -displayHeight, -300);
  background_lights();
  pop();
  
  
    if (treeSpin == true){
     rotValue += 0.02;
   } 
   rotateY(rotValue);
  
  
   //scale(0.5);
  
 
  scale(windowWidth/(1.9*windowHeight)); // скале по отношению размера окна
  rotateX(3); //1.5 - для просмотра елки сверху
  push();

  fill(20,0,200);
  //rotateX(1.6);
  translate(0,-220,-100);
  rotateX(1.7);
  ellipsoid(800,500,10,10,10);
  pop();
  
  push();
  rotateY(-0.2);
  sign();
  pop();
 // rotateX(3); //1.5 - для просмотра елки сверху
  translate(400+treeX,40+treeY,-150+treeZ);
  push();
  rotateY(0.5);
  rotateZ-(0.1);
  tree();
  pop();
  //rotateX(-3);

  push();
  translate(-50, -200, 0);
  presents();
  translate(120, 0, 0);
  scale(1.3);
  presents();
  translate(-40, 0, 50);
  scale(1.1);
  presents();
  pop();

}
