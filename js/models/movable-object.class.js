class MovableObject {
  x = 120;
  y = 250;
  img;
  height = 150;
  width = 100;
  imageCache = {};
  currentImage = 0;
  speed = 0.15;
  speedY = 0;
  acceleration = 2.5;
  otherDirection = false;

  loadImg(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImgs(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currentImage % images.length;
    let path = images[i];
    this.img = this.imageCache[path];
    this.currentImage++;
  }
  moveRight() {
    console.log('moveRight');
  }

  moveToLeft() {
    setInterval(() => {
      this.x -= this.speed;
    }, 1000 / 60);
  }

  isAboveGround() {
    return this.y < 200;
  }

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround()) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }
}
