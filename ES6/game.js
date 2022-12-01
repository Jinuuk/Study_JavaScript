var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

// ctx.fillStyle = 'green';
// ctx.fillRect(10,10,100,100);

var img2 = new Image();
img2.src = 'dinosaur.png';

var dino = {
  x : 10,
  y : 200,
  width:50,
  height:50,
  draw(){
    ctx.fillStyle = 'green';
    // ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.drawImage(img2,this.x,this.y);
  }
}
// dino.x += 1;
// dino.draw();

var img1 = new Image();
img1.src = 'cactus.png';

class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    // ctx.fillRect(this.x,this.y,this.width,this.height);
    ctx.drawImage(img1,this.x,this.y);
  }
}


// var cactus = new Cactus();
// cactus.draw();

var timer = 0;
var cactuses = [];
var jumpTimer = 0;
var animationi;

function playPerFrame(){
  animation = requestAnimationFrame(playPerFrame);
  timer++;

  ctx.clearRect(0,0,canvas.width,canvas.height);

  if (timer % 180 === 0){
    var cactus = new Cactus();
    cactuses.push(cactus);
  }
  cactuses.forEach((e,i,o)=>{
    //x좌표가 0미만이면 제거
    if(e.x<0){
      o.splice(i,1);
    }
    e.x--;
    collisionChk(dino,e);
    e.draw();
  })
  
  // dino.x++;

  if(jump){
    dino.y -= 2;
    jumpTimer++;
  }
  if(!jump){
    if(dino.y < 200){
      dino.y++;
    }
  }
  if(jumpTimer > 60 ){
    jump = false;
    jumpTimer = 0;
  }

  dino.draw();
} 
playPerFrame();

//충돌 확인
function collisionChk(dino,cactus){
  var distanceX = cactus.x - (dino.x + dino.width);
  var distanceY = cactus.y - (dino.y + dino.height);
  if(distanceX < 0 && distanceY < 0) {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    cancelAnimationFrame(animation);
  }
}

var jump = false;
document.addEventListener('keydown',function(e){
  if(e.code === 'Space'){
    jump = true;
  }
})