class Endboss extends MovableObject {
  height = 450;
  width = 300;
  IMAGES_WALKING = [
    './assets/imgs/4_enemie_boss_chicken/2_alert/G5.png',
    './assets/imgs/4_enemie_boss_chicken/2_alert/G6.png',
    './assets/imgs/4_enemie_boss_chicken/2_alert/G7.png',
    './assets/imgs/4_enemie_boss_chicken/2_alert/G8.png',
    './assets/imgs/4_enemie_boss_chicken/2_alert/G9.png',
    './assets/imgs/4_enemie_boss_chicken/2_alert/G10.png',
    './assets/imgs/4_enemie_boss_chicken/2_alert/G11.png',
    './assets/imgs/4_enemie_boss_chicken/2_alert/G12.png',
  ];

  constructor() {
    super();
    this.loadImg(this.IMAGES_WALKING[0]);
    this.loadImgs(this.IMAGES_WALKING);
    this.x = 3900;
    this.y = 7;
    this.animate();
  }

  animate() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }
}
