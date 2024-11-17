function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height)

    dots.forEach(dot => {

        dots.forEach(target => {

            let distance = dot.distanceTo(target);
            if (distance < distancetToJoin) {
                ctx.beginPath();
                ctx.strokeStyle = "#7ec117"
                ctx.moveTo(dot.x, dot.y);
                ctx.lineTo(target.x, target.y)
                ctx.stroke();
                ctx.closePath();
            }

        })

        dot.draw();
        dot.move();
    })

    requestAnimationFrame(animate);
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    distancetToJoin = calculateDistanceToJoinByPercent()
}

function calculateDistanceToJoinByPercent(){
    let min = Math.min(canvas.width, canvas.height);
    return min*15/100
}

const canvas = document.querySelector("#node_link");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

distancetToJoin = calculateDistanceToJoinByPercent(15)

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

let dots = [];

for (let i = 0; i < 150; i++) {
    dots.push(new Dot(canvas));
}

animate();