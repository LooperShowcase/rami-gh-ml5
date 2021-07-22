class Player {
  constructor() {
    this.size = 100;
    this.x = this.size;
    this.y = height - this.size;
    this.velocityY = 0;
    this.gravity = 1.5;
  }

  jump() {
    if (this.y == height - this.size) {
      this.velocityY = -24;
    }
  }

  move() {
    this.y = this.y + this.velocityY;
    this.velocityY += this.gravity;
    this.y = constrain(this.y, 0, height - this.size);
  }

  show() {
    fill(21, 87, 192);
    stroke(220, 47, 2);
    image(playerImage, this.x, this.y, this.size - 25, this.size);
  }
  collided(currentObs) {
    let isColliding = collideRectRect(
      this.x,
      this.y,
      this.size,
      this.size,
      currentObs.x,
      currentObs.y,
      currentObs.size,
      currentObs.size
    );
    return isColliding;
  }
}
