class Chicken extends MovableObject {
  height = 65;
  width = 75;
  y = 365;
  IMAGES_WALKING = [
    './assets/imgs/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
    './assets/imgs/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
    'assets/imgs/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
  ];
  constructor() {
    super();
    this.loadImg('./assets/imgs/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.x = 250 + Math.random() * 2000;
    this.speed = 0.15 + Math.random() * 0.2;
    this.loadImgs(this.IMAGES_WALKING);
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.moveToLeft();
    }, 1000 / 60);
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 400);
  }
}
