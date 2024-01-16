class MovableObject extends DrawableObject {
  speed = 0.15;
  speedY = 0;
  acceleration = 2.5;
  otherDirection = false;
  energy = 100;
  lastHit = 0;

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
  moveRight() {
    this.x += this.speed;
  }

  moveToLeft() {
    this.x -= this.speed;
  }

  isAboveGround() {
    return this.y < 200;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 30);
  }

  jump() {
    if (!this.isAboveGround()) {
      this.speedY = 35;
    }
  }

  isColliding(obj) {
    return this.x < obj.x + obj.width && this.x + this.width > obj.x && this.y < obj.y + obj.height && this.y + this.height > obj.y;
  }

  hit(damage) {
    this.energy -= damage;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }

    this.world.healthStatusbar.setPercentage(this.energy);
  }

  isHurt() {
    let passedTime = new Date().getTime() - this.lastHit; //Difference in ms
    passedTime = passedTime / 1000; // Difercene in seconds
    return passedTime < 1;
  }

  isDead() {
    return this.energy === 0;
  }
}
