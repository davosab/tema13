let canvasWidth = 500;
let canvasHeight = canvasWidth;
let s = canvasWidth / 8;

let board;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
}

function draw() {
  drawBoard();
  drawSquaresAndFaces();
}

function drawBoard() {
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

  board[2][0] = new Face("b", 3, 1);
  board[1][1] = new Face("b", 2, 2);
  board[3][2] = new Face("b", 4, 3);
  board[1][3] = new Face("b", 2, 4);
  board[2][4] = new Face("b", 3, 5);
  board[1][5] = new Face("b", 2, 6);
  board[3][6] = new Face("b", 4, 7);
  board[1][7] = new Face("b", 2, 8);

  board[6][0] = new Face("w", 7, 1);
  board[4][1] = new Face("w", 5, 2);
  board[6][2] = new Face("w", 7, 3);
  board[5][3] = new Face("w", 6, 4);
  board[4][4] = new Face("w", 5, 5);
  board[5][5] = new Face("w", 6, 6);
  board[6][6] = new Face("w", 7, 7);
  board[5][7] = new Face("w", 6, 8);
}

function drawSquaresAndFaces() {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      stroke(0);
      if ((i + j) % 2 == 0) {
        fill(0);
      } else {
        fill(255);
      }
      rect(j * s, i * s, s, s);
      if (board[i][j] instanceof Face) board[i][j].draw();
    }
  }
}

class Face {
  constructor(colour, row, col) {
    this.colour = colour;
    this.row = row;
    this.col = col;
  }

  draw() {
    let centerX = this.col * s - s/2;
    let centerY = this.row * s - s/2;
    stroke(100);
    (this.colour == "w") ? fill(255) : fill(50);
    circle(centerX, centerY, s * 0.8);
    circle(centerX - s * 0.125, centerY - s * 0.1, s * 0.1); // left eye
    circle(centerX + s * 0.125, centerY - s * 0.1, s * 0.1); // right eye
    arc(centerX, centerY + s * 0.125, s * 0.4, s * 0.2, 0, PI) // mouth
  }

}