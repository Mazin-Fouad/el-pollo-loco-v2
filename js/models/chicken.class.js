class Chicken extends MovableObject {
  height = 80;
  y = 350;
  constructor() {
    super();
    this.loadImg('./assets/imgs/3_enemies_chicken/chicken_normal/1_walk/1_w.png');
    this.x = 250 + Math.random() * 400;
  }
}
