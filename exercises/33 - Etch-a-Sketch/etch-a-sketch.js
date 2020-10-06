const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

const MOVE_AMOUNT = 60;
const HUE_INCREMENT = 10;
const { width, height } = canvas;
let x = width * Math.random();
let y = height * Math.random();
let hue = 200;

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

function draw({ key }) {
  console.log('draw');
  console.log('key', key);
  ctx.beginPath();
  ctx.moveTo(x, y);
  switch (key) {
    case 'ArrowDown':
      y += MOVE_AMOUNT;
      break;
    case 'ArrowUp':
      y -= MOVE_AMOUNT;
      break;
    case 'ArrowLeft':
      x -= MOVE_AMOUNT;
      break;
    case 'ArrowRight':
      x += MOVE_AMOUNT;
      break;
    default:
      break;
  }
  ctx.lineTo(x, y);
  ctx.stroke();
  hue += HUE_INCREMENT;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
}

draw({});

function handleKeyDown(e) {
  if (e.key.includes('Arrow')) {
    e.preventDefault();
    const pressedKey = e.key;
    draw({ key: pressedKey });
  }
}

function clearCanvas() {
  canvas.classList.add('shake');
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    'animationend',
    () => canvas.classList.remove('shake'),
    { once: true }
  );
}

shakeButton.addEventListener('click', clearCanvas);

window.addEventListener('keydown', handleKeyDown);
