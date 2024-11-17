class Dot{

    constructor(canvas) {
        this.radius = 10;
        this.x = getRandomArbitrary(0 + this.radius, canvas.width - this.radius);
        this.y = getRandomArbitrary(0 + this.radius, canvas.height - this.radius);
        this.canvas;
        this.dirX = getRandomArbitrary(-1, 1);
        this.dirY = getRandomArbitrary(-1, 1);
        this.velocity = 5
    }

    draw(){
        ctx.fillStyle="#7ec117"
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();
    }

    move(){
        this.x += this.dirX * this.velocity;
        this.y += this.dirY * this.velocity;

        if (this.x + this.radius > canvas.width || this.x - this.radius < 0 ){
            this.dirX *= -1;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0 ){
            this.dirY *= -1;
        }
    }

    distanceTo(target){
        let dx = target.x - this.x
        let dy = target.y - this.y
        return Math.sqrt(dx ** 2 + dy ** 2 );
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
