let player;

let bgImage;
let playerImage;
let obstacleImage;
let obstacles = [];

let wordClassifier;

function preload() {
  bgImage = loadImage("background.jpg");
  playerImage = loadImage("player.png");
  obstcleImage = loadImage("obstacle.png");

  let options = {
    probabilityThreshold: 0.85,
  };
  wordClassifier = ml5.soundClassifier("speechCommands18w", options);
}

function setup() {
  createCanvas(1200, 500);
  player = new Player();
  wordClassifier.classify(heardWord);
}

function heardWord(error, results) {
  if (results[0].label === "up") player.jump();
}

function keyPressed() {
  if (key === " ") {
    player.jump();
  }
}

function draw() {
  if (random(1) < 0.01) {
    obstacles.push(new Obstacle());
  }
  background(bgImage);
  player.show();
  player.move();

  for (let obs of obstacles) {
    obs.show();
    obs.move();

    if (player.collided(obs)) {
      console.log("game over");
      noLoop();
    }
  }
}
