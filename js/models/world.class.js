class World {
  character = new Character();
  healthStatusbar = new HealthStatusbar();
  coinsStatusbar = new CoinsStatusbar();
  level = level1;
  ctx;
  canvas;
  keyboard;
  camera_x = 0;
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.keyboard = keyboard;

    this.draw();
    this.setWorld();
    this.checkCollisions();
  }

  setWorld() {
    this.character.world = this;
  }

  checkCollisions() {
    setInterval(() => {
      this.level.chickens.forEach((chicken) => {
        if (this.character.isColliding(chicken)) {
          this.character.hit(15);
          console.log(this.character.energy);
        }
      });
    }, 200);

    setInterval(() => {
      this.level.chicks.forEach((chick) => {
        if (this.character.isColliding(chick)) {
          this.character.hit(5);
          console.log(this.character.energy);
        }
      });
    }, 200);

    setInterval(() => {
      this.level.bottles.forEach((bottle) => {
        if (this.character.isColliding(bottle)) {
          console.log('collided', bottle);
        }
      });
    }, 200);

    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          this.coinsStatusbar.setPercentage(this.coinsStatusbar.percentage + 20);
          this.level.coins.splice(coin, 1);
          console.log('collided', coin);
        }
      });
    }, 200);
  }

  draw() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    // Draw the character, enemies, clouds, and background objects
    this.addObjects(this.level.backgroundObjects);
    this.drawImage(this.character);
    this.ctx.translate(-this.camera_x, 0);
    this.drawImage(this.healthStatusbar);
    this.drawImage(this.coinsStatusbar);
    this.ctx.translate(this.camera_x, 0);
    this.addObjects(this.level.chickens);
    this.addObjects(this.level.chicks);
    this.addObjects(this.level.bottles);
    this.addObjects(this.level.clouds);
    this.addObjects(this.level.coins);

    this.ctx.translate(-this.camera_x, 0);

    // Request the next animation frame
    requestAnimationFrame(() => this.draw());
  }

  addObjects(objects) {
    objects.forEach((obj) => this.drawImage(obj));
  }

  drawImage(entity) {
    if (entity.otherDirection) {
      this.flipImag(entity);
    }
    entity.draw(this.ctx);
    entity.drawRectangle(this.ctx);

    if (entity.otherDirection) {
      this.resetFlipImage(entity);
    }
  }

  flipImag(entity) {
    this.ctx.save();
    this.ctx.translate(entity.width, 0);
    this.ctx.scale(-1, 1);
    entity.x = entity.x * -1;
  }

  resetFlipImage(entity) {
    entity.x = entity.x * -1;
    this.ctx.restore();
  }
}
