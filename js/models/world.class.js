class World {
  character = new Character();
  chickens = [new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken()];
  chicks = [new Chicks(), new Chicks(), new Chicks(), new Chicks(), new Chicks(), new Chicks(), new Chicks(), new Chicks(), new Chicks(), new Chicks()];
  clouds = [new Cloud()];
  backgroundObjects = [
    new BackgroundObject('./assets/imgs/5_background/layers/air.png', -719),
    new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/2.png', -719),
    new BackgroundObject('assets/imgs/5_background/layers/2_second_layer/2.png', -719),
    new BackgroundObject('./assets/imgs/5_background/layers/1_first_layer/2.png', -719),

    new BackgroundObject('./assets/imgs/5_background/layers/air.png', 0),
    new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/1.png', 0),
    new BackgroundObject('assets/imgs/5_background/layers/2_second_layer/1.png', 0),
    new BackgroundObject('./assets/imgs/5_background/layers/1_first_layer/1.png', 0),
    new BackgroundObject('./assets/imgs/5_background/layers/air.png', 719),
    new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/2.png', 719),
    new BackgroundObject('assets/imgs/5_background/layers/2_second_layer/2.png', 719),
    new BackgroundObject('./assets/imgs/5_background/layers/1_first_layer/2.png', 719),

    new BackgroundObject('./assets/imgs/5_background/layers/air.png', 719 * 2),
    new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/1.png', 719 * 2),
    new BackgroundObject('assets/imgs/5_background/layers/2_second_layer/1.png', 719 * 2),
    new BackgroundObject('./assets/imgs/5_background/layers/1_first_layer/1.png', 719 * 2),
    new BackgroundObject('./assets/imgs/5_background/layers/air.png', 719 * 3),
    new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/2.png', 719 * 3),
    new BackgroundObject('assets/imgs/5_background/layers/2_second_layer/2.png', 719 * 3),
    new BackgroundObject('./assets/imgs/5_background/layers/1_first_layer/2.png', 719 * 3),

    new BackgroundObject('./assets/imgs/5_background/layers/air.png', 719 * 4),
    new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/1.png', 719 * 4),
    new BackgroundObject('assets/imgs/5_background/layers/2_second_layer/1.png', 719 * 4),
    new BackgroundObject('./assets/imgs/5_background/layers/1_first_layer/1.png', 719 * 4),
    new BackgroundObject('./assets/imgs/5_background/layers/air.png', 719 * 5),
    new BackgroundObject('./assets/imgs/5_background/layers/3_third_layer/2.png', 719 * 5),
    new BackgroundObject('assets/imgs/5_background/layers/2_second_layer/2.png', 719 * 5),
    new BackgroundObject('./assets/imgs/5_background/layers/1_first_layer/2.png', 719 * 5),
  ];
  bottles = [new Bottle(), new Bottle(), new Bottle(), new Bottle(), new Bottle()];
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
  }

  setWorld() {
    this.character.world = this;
  }

  draw() {
    // Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.translate(this.camera_x, 0);

    // Draw the character, enemies, clouds, and background objects
    this.addObjects(this.backgroundObjects);
    this.drawImage(this.character);
    this.addObjects(this.chickens);
    this.addObjects(this.chicks);
    this.addObjects(this.bottles);
    this.addObjects(this.clouds);

    this.ctx.translate(-this.camera_x, 0);

    // Request the next animation frame
    requestAnimationFrame(() => this.draw());
  }

  addObjects(objects) {
    objects.forEach((obj) => this.drawImage(obj));
  }

  drawImage(entity) {
    if (entity.otherDirection) {
      this.ctx.save();
      this.ctx.translate(entity.width, 0);
      this.ctx.scale(-1, 1);
      entity.x = entity.x * -1;
    }
    this.ctx.drawImage(entity.img, entity.x, entity.y, entity.width, entity.height);
    if (entity.otherDirection) {
      entity.x = entity.x * -1;
      this.ctx.restore();
    }
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
