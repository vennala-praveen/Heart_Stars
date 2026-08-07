const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const colors = ["red", "blue", "lime", "yellow", "cyan", "magenta", "orange", "green", "white"];

const cx = canvas.width / 2;
const cy = canvas.height / 2 - 50;

function drawStar(x, y, color){
    ctx.save();
    ctx.translate(x,y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;

    for(let i=0; i < 10; i++){
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(3,0);
        ctx.stroke();
        ctx.rotate(Math.PI/4);
    }

    ctx.restore();
}

// function drawStar(x, y, color){
//     ctx.save();
//     ctx.translate(x,y);

    
//     const gradient = ctx.createRadialGradient(0,0,0, 0,0,10);
//     gradient.addColorStop(0, "white");
//     gradient.addColorStop(1, color);

//     ctx.strokeStyle = gradient;
//     ctx.lineWidth = 2;
//     ctx.shadowColor = "rgba(0,0,0,0.5)";
//     ctx.shadowBlur = 4;

//     for(let i=0; i < 8; i++){
//         ctx.beginPath();
//         ctx.moveTo(0,0);
//         ctx.lineTo(8,0);
//         ctx.stroke();
//         ctx.rotate(Math.PI/4);
//     }

//     ctx.restore();
// }


for(let i=0; i<120; i++){
    let angle = i*Math.PI*2/120;
    let x = 16 * Math.pow(Math.sin(angle),3)*15;
    let y = (13 * Math.cos(angle) - 5 * Math.cos(2 * angle) - 2 * Math.cos(3 * angle) - Math.cos(4 * angle)) * 15;

    const color = colors[Math.floor(Math.random() * colors.length)];

    ctx.beginPath();
    ctx.moveTo(cx, cy + 40);
    ctx.lineTo(cx + x, cy - y);
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    ctx.stroke();

    drawStar(cx + x, cy - y, color);
}
