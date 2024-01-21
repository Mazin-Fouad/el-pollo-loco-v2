class CoinsStatusbar extends DrawableObject {
  IMAGES = [
    './assets/imgs/7_statusbars/1_statusbar/1_statusbar_coin/orange/0.png',
    './assets/imgs/7_statusbars/1_statusbar/1_statusbar_coin/orange/20.png',
    './assets/imgs/7_statusbars/1_statusbar/1_statusbar_coin/orange/40.png',
    './assets/imgs/7_statusbars/1_statusbar/1_statusbar_coin/orange/60.png',
    './assets/imgs/7_statusbars/1_statusbar/1_statusbar_coin/orange/80.png',
    './assets/imgs/7_statusbars/1_statusbar/1_statusbar_coin/orange/100.png',
  ];

  percentage = 0;

  constructor() {
    super();
    this.loadImgs(this.IMAGES);
    this.setPercentage(0);
    this.x = 35;
    this.y = 45;
    this.height = 55;
    this.width = 200;
  }

  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES[this.resolveImageIndex()];
    this.img = this.imageCache[path];
  }

  resolveImageIndex() {
    if (this.percentage > 90) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
