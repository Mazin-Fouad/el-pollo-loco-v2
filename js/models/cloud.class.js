class Cloud extends MovableObject {
  y = 10;
  width = 500;
  height = 300;
  speed = 0.16; // Speed of the cloud movement

  constructor() {
    super();
    this.loadImg('./assets/imgs/5_background/layers/4_clouds/1.png');
    this.x = 2 + Math.random() * 500;
    this.animateCloud();
  }

  animateCloud() {
    setInterval(() => {
      this.x -= this.speed;
    }, 60);
  }
}
