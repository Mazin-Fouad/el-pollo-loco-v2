class Chicks extends MovableObject {
  height = 55;
  width = 60;
  y = 370;
  IMAGES_WALKING = [
    './assets/imgs/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    './assets/imgs/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'assets/imgs/3_enemies_chicken/chicken_small/1_walk/3_w.png',
  ];
  constructor() {
    super();
    this.loadImg('./assets/imgs/3_enemies_chicken/chicken_small/1_walk/1_w.png');
    this.x = 250 + Math.random() * 400;
    this.loadImgs(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }
}
