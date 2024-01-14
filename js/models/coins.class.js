class Coins extends MovableObject {
  height = 95;
  width = 110;
  y = 70;
  IMAGES = ['./assets/imgs/8_coin/coin_1.png', './assets/imgs/8_coin/coin_2.png'];

  constructor() {
    super();
    this.loadImg('./assets/imgs/8_coin/coin_1.png');
    this.loadImgs(this.IMAGES);
    this.x = 120 + Math.random() * 4000;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES);
    }, 1000);
  }
}
