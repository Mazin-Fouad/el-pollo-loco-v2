class Chicks extends MovableObject {
  height = 45;
  width = 50;
  y = 380;
  IMAGES_WALKING = [
    './assets/imgs/3_enemies_chicken/chicken_small/1_walk/1_w.png',
    './assets/imgs/3_enemies_chicken/chicken_small/1_walk/2_w.png',
    'assets/imgs/3_enemies_chicken/chicken_small/1_walk/3_w.png',
  ];
  constructor() {
    super();
    this.loadImg('./assets/imgs/3_enemies_chicken/chicken_small/1_walk/1_w.png');
    this.x = 250 + Math.random() * 3000;
    this.speed = 0.15 + Math.random() * 0.7;
    this.loadImgs(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    this.updateImage();
    this.moveToLeft();
  }

  updateImage() {
    setInterval(() => {
      let i = this.currentImage % this.IMAGES_WALKING.length;
      let path = this.IMAGES_WALKING[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 100);
  }
}
