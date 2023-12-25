class Cloud extends MovableObject {
  y = 10;
  width = 500;
  hight = 300;
  constructor() {
    super();
    this.loadImg('./assets/imgs/5_background/layers/4_clouds/1.png');
    this.x = 2 + Math.random() * 500;
  }
}
