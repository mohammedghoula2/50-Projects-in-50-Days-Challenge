const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const btnIncrease = document.getElementById('increase');
const btnDecrease = document.getElementById('decrease');
const clear = document.querySelector('.clear');
const sizeInput = document.getElementById('size');
const colorInput = document.getElementById('color');
console.log(colorInput);
let isPressed = false;
let x;
let y;

function adjustSize(change) {
  let newSize = +sizeInput.innerText;
  const updatedSize = newSize + change;
  if (updatedSize >= 5 && updatedSize <= 80) {
    sizeInput.innerText = updatedSize;
  }
}

btnIncrease.addEventListener('click', () => adjustSize(5));

btnDecrease.addEventListener('click', () => adjustSize(-5));
canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});
canvas.addEventListener('mousemove', (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, +sizeInput.innerText, 0, Math.PI * 2);
  ctx.fillStyle = colorInput.value;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = colorInput.value;
  ctx.lineWidth = +sizeInput.innerText * 2;
  ctx.stroke();
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
clear.addEventListener('click', clearCanvas);
