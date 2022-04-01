var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');


canvas.width = window.innerWidth-100;
canvas.height = window.innerHeight-100;

//공룡 위치 및 사이즈 
var dino = {
    x : 10,
    y : 10,
    width:100,
    height:100,
    draw(){
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}


dino.draw();

//장애물 만들기
class Cactus{
    constructor(){
        this.x  = 500;
        this.y = 10;
        this.width = 100;
        this.height = 100;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y,this.width,this.height);
    }
}
var cactus = new Cactus();
cactus.draw();