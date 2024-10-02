// Matrix Animation
const canvas = document.createElement('canvas');
document.getElementById('matrix').appendChild(canvas);
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const cols = Math.floor(canvas.width / 20);
const drops = Array(cols).fill(0);

function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#0F0';
    ctx.font = '20px monospace';

    drops.forEach((y, x) => {
        const text = String.fromCharCode(0x30A0 + Math.random() * 96);
        const position = x * 20;
        ctx.fillText(text, position, y);
        drops[x] = y > canvas.height || Math.random() > 0.95 ? 0 : y + 20;
    });
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for (let i = 0; i < cols; i++) {
        drops[i] = Math.random() * canvas.height;
    }
}

window.addEventListener('resize', resizeCanvas);
setInterval(drawMatrix, 50);

// Fade-out welcome message
const welcomeMessage = document.getElementById('welcome');
setTimeout(() => {
    welcomeMessage.style.display = 'none';
}, 5000);
