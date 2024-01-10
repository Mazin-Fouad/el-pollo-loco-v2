class Bottle extends MovableObject {
  height = 80;
  width = 80;
  y = 350;
  IMAGES = ['./assets/imgs/6_salsa_bottle/1_salsa_bottle_on_ground.png', './assets/imgs/6_salsa_bottle/2_salsa_bottle_on_ground.png'];

  constructor() {
    super();
    this.loadImg('./assets/imgs/6_salsa_bottle/1_salsa_bottle_on_ground.png');
    this.loadImgs(this.IMAGES);
    this.x = 80 + Math.random() * 2000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 1000);
  }
}
