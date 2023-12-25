class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud()];
  backgroundObjects = [new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/1.png', 0, 120)];
  ctx;
  canvas;
  constructor(canvas) {
    this.ctx = canvas.getContext('2d');
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Draw the character, enemies, clouds, and background objects
    this.drawImage(this.character);
    this.addObjects(this.enemies);
    this.addObjects(this.clouds);
    this.addObjects(this.backgroundObjects);

    // Request the next animation frame
    requestAnimationFrame(() => this.draw());
  }

  addObjects(objects) {
    objects.forEach((obj) => this.drawImage(obj));
  }

  drawImage(entity) {
    this.ctx.drawImage(entity.img, entity.x, entity.y, entity.width, entity.height);
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
