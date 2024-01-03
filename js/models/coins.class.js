class Coins extends MovableObject {
  height = 160;
  width = 160;
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
      let i = this.currentImage % this.IMAGES.length;
      let path = this.IMAGES[i];
      this.img = this.imageCache[path];
      this.currentImage++;
    }, 1000);
  }
}
