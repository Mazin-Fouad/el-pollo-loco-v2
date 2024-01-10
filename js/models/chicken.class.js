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
    this.moveToLeft();
    this.updateImage();
  }

  updateImage() {
    setInterval(() => {
      // let i = this.currentImage % this.IMAGES_WALKING.length;
      // let path = this.IMAGES_WALKING[i];
      // this.img = this.imageCache[path];
      // this.currentImage++;
      this.playAnimation(this.IMAGES_WALKING);
    }, 400);
  }
}
