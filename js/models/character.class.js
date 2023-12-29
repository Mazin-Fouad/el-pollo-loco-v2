class Character extends MovableObject {
  y = 210;
  height = 220;
  IMAGES_WALKING = [
    './assets/imgs/2_character_pepe/2_walk/W-21.png',
    './assets/imgs/2_character_pepe/2_walk/W-22.png',
    './assets/imgs/2_character_pepe/2_walk/W-23.png',
    './assets/imgs/2_character_pepe/2_walk/W-24.png',
    './assets/imgs/2_character_pepe/2_walk/W-25.png',
    './assets/imgs/2_character_pepe/2_walk/W-26.png',
  ];
  world;
  speed = 8;
  constructor() {
    super();
    this.loadImg('./assets/imgs/2_character_pepe/2_walk/W-21.png');
    this.loadImgs(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed;
      }

      if (this.world.keyboard.LEFT) {
        this.x -= this.speed;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCache[path];
        this.currentImage++;
      }
    }, 50);
  }

  jump() {}
}
