class World {
  character = new Character();
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
          console.log('collided', chicken);
        }
      });
    }, 1000);

    setInterval(() => {
      this.level.chicks.forEach((chick) => {
        if (this.character.isColliding(chick)) {
          console.log('collided', chick);
        }
      });
    }, 1000);

    setInterval(() => {
      this.level.bottles.forEach((bottle) => {
        if (this.character.isColliding(bottle)) {
          console.log('collided', bottle);
        }
      });
    }, 1000);

    setInterval(() => {
      this.level.coins.forEach((coin) => {
        if (this.character.isColliding(coin)) {
          console.log('collided', coin);
        }
      });
    }, 1000);
  }

  draw() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    // Draw the character, enemies, clouds, and background objects
    this.addObjects(this.level.backgroundObjects);
    this.drawImage(this.character);
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

/**
 * ! old code version, to be deleted
 */
// draw() {
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//   this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.hight);
//   this.enemies.forEach((enemy) => {
//     this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.hight);
//   });

//   this.clouds.forEach((cloud) => {
//     this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.hight);
//   });

//   this.backgroundObjects.forEach((backgroundObject) => {
//     this.ctx.drawImage(backgroundObject.img, backgroundObject.x, backgroundObject.y, backgroundObject.width, backgroundObject.hight);
//   });

//   let self = this;
//   requestAnimationFrame(() => self.draw());
// }

/**
 * ! old code version, to be deleted
 */

// draw() {
//   // Clear the canvas
//   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

//   // Draw the character, enemies, clouds, and background objects
//   this.drawImage(this.character);
//   this.enemies.forEach((enemy) => this.drawImage(enemy));
//   this.clouds.forEach((cloud) => this.drawImage(cloud));
//   this.backgroundObjects.forEach((BgObj) => this.drawImage(BgObj));

//   // Request the next animation frame
//   requestAnimationFrame(() => this.draw());
// }
