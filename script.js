let canvasWidth = 500;
let canvasHeight = canvasWidth;
let s = canvasWidth / 8;


function setup() {
  createCanvas(canvasWidth, canvasHeight);
  initBoard();
  textAlign(CENTER, CENTER);
  textSize(s - 20);
}

function draw() {
  background("gray");
  drawSquares();
  drawPieces();
}

function initBoard() {
  board = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ];
}

function drawSquares() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(j * s, i * s, s, s);
    }
  }
}